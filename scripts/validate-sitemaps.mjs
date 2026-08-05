#!/usr/bin/env node
/**
 * Validates built sitemaps match English-primary SEO policy.
 * Run after `npm run build`: node scripts/validate-sitemaps.mjs
 *
 * Policy: English is official (canonical + x-default). Thin locale UI routes
 * stay built for UX but are omitted from sitemaps / multi-locale hreflang.
 */
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

/** dist/ for static builds; dist/client/ when a Cloudflare adapter rearranges assets. */
async function resolveDistRoot() {
	const candidates = [
		path.join(ROOT, 'dist'),
		path.join(ROOT, 'dist', 'client'),
	];
	for (const dir of candidates) {
		try {
			await access(path.join(dir, 'sitemap.xml'));
			return dir;
		} catch {
			// try next candidate
		}
	}
	throw new Error(
		'Could not find sitemap.xml in dist/ or dist/client/. Run `astro build` first.',
	);
}
const SITE = 'https://warthunderhacks.net';

const MARKETING_SITEMAP_PAGES = 15;
const BUILT_MARKETING_PAGES = 25; // thin landings still built; 301 to canonical URLs
const BLOG_PAGES = 18; // /blog/ index + 17 posts
const REVIEW_PAGES = 11; // /reviews/ index + 10 review detail pages
const SITEMAP_ENGLISH_PAGES = MARKETING_SITEMAP_PAGES + BLOG_PAGES + REVIEW_PAGES;
const BUILT_ENGLISH_PAGES = BUILT_MARKETING_PAGES + BLOG_PAGES + REVIEW_PAGES;
const ENGLISH_PAGES = SITEMAP_ENGLISH_PAGES;
const I18N_LOCALES = 21;
const PAGES_PER_LOCALE = 25;
const LOCALE_UI_PAGES = I18N_LOCALES * PAGES_PER_LOCALE;
const TOTAL_HTML_PAGES = BUILT_ENGLISH_PAGES + LOCALE_UI_PAGES;
const HREFLANG_PER_URL = 2; // en + x-default
const SITEMAP_INDEX_ENTRIES = 2; // EN + images
const IMAGE_SITEMAP_ENTRIES = 7; // unique keyword assets in rustImages.sitemap

const ENGLISH_PATHS = [
	'/',
	'/war-thunder-hacks/',
	'/war-thunder-esp/',
	'/war-thunder-aimbot/',
	'/war-thunder-wallhack/',
	'/war-thunder-radar/',
	'/features/',
	'/pricing/',
	'/setup/',
	'/updates/',
	'/faq/',
	'/support/',
	'/privacy-policy/',
	'/refund-policy/',
	'/terms/',
];

const LOCALE_CODES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

const I18N_LOCALE_CODES = LOCALE_CODES.filter((code) => code !== 'en');

function extractLocs(xml) {
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function extractHreflangCount(xml, url) {
	const block = xml.split('<loc>').find((part) => part.startsWith(url.replace(/&/g, '&amp;')));
	if (!block) return 0;
	return (block.match(/hreflang="/g) ?? []).length;
}

function extractHreflangs(xml, url) {
	const block = xml.split('<loc>').find((part) => part.startsWith(url.replace(/&/g, '&amp;')));
	if (!block) return [];
	return [...block.matchAll(/hreflang="([^"]+)"/g)].map((m) => m[1]);
}

async function collectHtmlPaths(dir, base = '') {
	const entries = await readdir(dir, { withFileTypes: true });
	const paths = [];
	for (const entry of entries) {
		const rel = `${base}/${entry.name}`.replace(/\\/g, '/');
		if (entry.isDirectory()) {
			paths.push(...(await collectHtmlPaths(path.join(dir, entry.name), rel)));
		} else if (entry.name === 'index.html') {
			const urlPath = rel.replace(/\/index\.html$/, '/') || '/';
			paths.push(urlPath === '' ? '/' : urlPath);
		}
	}
	return paths;
}

function fail(msg) {
	console.error(`✗ ${msg}`);
	process.exitCode = 1;
}

function ok(msg) {
	console.log(`✓ ${msg}`);
}

async function main() {
	console.log('Validating sitemaps (English-official SEO policy)…\n');
	let errors = 0;
	const bump = () => {
		errors += 1;
	};

	const DIST = await resolveDistRoot();
	if (DIST !== path.join(ROOT, 'dist')) {
		console.log(`Using build output at ${path.relative(ROOT, DIST)}/\n`);
	}

	const sitemapEn = await readFile(path.join(DIST, 'sitemap.xml'), 'utf8');
	const sitemapI18n = await readFile(path.join(DIST, 'sitemap-i18n.xml'), 'utf8');
	const sitemapIndex = await readFile(path.join(DIST, 'sitemap-index.xml'), 'utf8');
	const sitemapImages = await readFile(path.join(DIST, 'sitemap-images.xml'), 'utf8');
	const robots = await readFile(path.join(ROOT, 'public', 'robots.txt'), 'utf8');

	const enLocs = extractLocs(sitemapEn);
	const i18nLocs = extractLocs(sitemapI18n);
	const imageLocs = extractLocs(sitemapImages);
	const indexLocs = extractLocs(sitemapIndex);

	// Per-locale sitemap files exist but must be empty (UX routes kept; SEO omitted)
	let localeUrlTotal = 0;
	for (const locale of I18N_LOCALE_CODES) {
		const file = path.join(DIST, `sitemap-${locale}.xml`);
		const xml = await readFile(file, 'utf8');
		const locs = extractLocs(xml);
		localeUrlTotal += locs.length;

		if (locs.length !== 0) {
			fail(`sitemap-${locale}.xml: expected 0 URLs (English-only SEO), got ${locs.length}`);
			bump();
		}
	}
	if (errors === 0) {
		ok(`All 21 locale sitemaps are empty (UX routes not listed for SEO)`);
	}

	if (enLocs.length !== ENGLISH_PAGES) {
		fail(`sitemap.xml: expected ${ENGLISH_PAGES} URLs, got ${enLocs.length}`);
		bump();
	} else ok(`sitemap.xml has ${ENGLISH_PAGES} English URLs`);

	if (i18nLocs.length !== 0) {
		fail(`sitemap-i18n.xml: expected 0 URLs, got ${i18nLocs.length}`);
		bump();
	} else ok('sitemap-i18n.xml is empty (legacy stub)');

	if (localeUrlTotal !== 0) {
		fail(`Per-locale sitemaps total: expected 0, got ${localeUrlTotal}`);
		bump();
	}

	if (imageLocs.length !== IMAGE_SITEMAP_ENTRIES) {
		fail(`sitemap-images.xml: expected ${IMAGE_SITEMAP_ENTRIES} image host URLs, got ${imageLocs.length}`);
		bump();
	} else ok(`sitemap-images.xml has ${IMAGE_SITEMAP_ENTRIES} image entries`);

	for (const p of ENGLISH_PATHS) {
		const full = `${SITE}${p === '/' ? '/' : p}`;
		if (!enLocs.includes(full)) {
			fail(`Missing English URL in sitemap.xml: ${full}`);
			bump();
		}
	}
	if (errors === 0) ok(`All ${ENGLISH_PATHS.length} English marketing paths present in sitemap.xml`);

	for (const loc of enLocs) {
		if (!loc.startsWith('https://')) {
			fail(`Non-HTTPS URL: ${loc}`);
			bump();
		}
		if (!loc.endsWith('/')) {
			fail(`URL missing trailing slash: ${loc}`);
			bump();
		}
	}
	if (errors === 0) ok('All English sitemap URLs use HTTPS with trailing slashes');

	const homeHreflang = extractHreflangCount(sitemapEn, `${SITE}/`);
	const homeLangs = extractHreflangs(sitemapEn, `${SITE}/`);
	if (homeHreflang !== HREFLANG_PER_URL) {
		fail(`Homepage hreflang links: expected ${HREFLANG_PER_URL} (en + x-default), got ${homeHreflang}`);
		bump();
	} else if (!homeLangs.includes('en') || !homeLangs.includes('x-default')) {
		fail(`Homepage hreflang must include en and x-default, got: ${homeLangs.join(', ')}`);
		bump();
	} else ok('Homepage has en + x-default hreflang only (English official)');

	if (indexLocs.length !== SITEMAP_INDEX_ENTRIES) {
		fail(`sitemap-index.xml: expected ${SITEMAP_INDEX_ENTRIES} sub-sitemaps, got ${indexLocs.length}`);
		bump();
	} else ok(`sitemap-index.xml lists ${SITEMAP_INDEX_ENTRIES} sub-sitemaps (English + images)`);

	if (!indexLocs.includes(`${SITE}/sitemap.xml`)) {
		fail('sitemap-index.xml missing sitemap.xml');
		bump();
	}
	if (!indexLocs.includes(`${SITE}/sitemap-images.xml`)) {
		fail('sitemap-index.xml missing sitemap-images.xml');
		bump();
	}
	for (const locale of I18N_LOCALE_CODES) {
		const loc = `${SITE}/sitemap-${locale}.xml`;
		if (indexLocs.includes(loc)) {
			fail(`sitemap-index.xml must not list thin-locale sitemap: sitemap-${locale}.xml`);
			bump();
		}
	}
	if (errors === 0) ok('sitemap-index.xml lists English + images only (no locale sitemaps)');

	for (const sub of ['sitemap-index.xml', 'sitemap.xml']) {
		if (!robots.includes(`${SITE}/${sub}`)) {
			fail(`robots.txt missing Sitemap: ${sub}`);
			bump();
		}
	}
	for (const sub of ['sitemap-i18n.xml', 'sitemap-images.xml', 'sitemap-blog.xml']) {
		if (robots.includes(`${SITE}/${sub}`)) {
			fail(`robots.txt must not list redundant sitemap: ${sub}`);
			bump();
		}
	}
	if (errors === 0) ok('robots.txt lists primary sitemap URLs only');

	const htmlPaths = await collectHtmlPaths(DIST);
	const sitemapPaths = new Set(enLocs.map((u) => u.replace(SITE, '') || '/'));
	const htmlSet = new Set(htmlPaths);

	if (htmlSet.size !== TOTAL_HTML_PAGES) {
		fail(`Built HTML pages: expected ${TOTAL_HTML_PAGES} (EN + locale UI), got ${htmlSet.size}`);
		bump();
	} else ok(`${TOTAL_HTML_PAGES} HTML pages built (English SEO + locale UI routes)`);

	const missingEnglish = [...sitemapPaths].filter((p) => !htmlSet.has(p));
	if (missingEnglish.length > 0) {
		fail(`Sitemap URLs without HTML: ${missingEnglish.slice(0, 5).join(', ')}`);
		bump();
	} else ok('Every English sitemap URL has a matching HTML page');

	const localeHtml = [...htmlSet].filter((p) => /^\/[a-z]{2}\//.test(p));
	const localeInSitemap = localeHtml.filter((p) => sitemapPaths.has(p));
	if (localeInSitemap.length > 0) {
		fail(`Locale UI paths must not appear in English sitemap: ${localeInSitemap.slice(0, 3).join(', ')}`);
		bump();
	} else ok(`Locale UI routes (${localeHtml.length}) kept out of sitemaps`);

	console.log('');
	if (errors > 0) {
		console.error(`Validation failed with ${errors} error(s).`);
		process.exit(1);
	}
	console.log('All sitemap checks passed.');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
