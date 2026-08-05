#!/usr/bin/env node
/**
 * SEO audit for overwatchhacks.com — Overwatch Hacks keyword focus.
 * Run: node scripts/seo-audit.mjs
 * Exit 1 on critical failures.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { englishPagesFinal } from './i18n-data/pages-en.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOMAIN = 'overwatchhacks.com';
const ORIGIN = `https://${DOMAIN}`;
const PRIMARY_KW = 'overwatch hacks';
const SECONDARY_KWS = ['overwatch', 'overwatch esp', 'overwatch aimbot'];

const BANNED = [
	/islecheat/i,
	/the isle/i,
	/\brust cheats\b/i,
	/\bfacepunch\b/i,
	/fortnitehack/i,
	/rusthacks\.net/i,
	/islecheat\.net/i,
	/arcraidershacks\.com/i,
];

const warnings = [];
const errors = [];

function warn(msg) {
	warnings.push(msg);
}
function fail(msg) {
	errors.push(msg);
}

function hasKeyword(text, kw = PRIMARY_KW) {
	return text.toLowerCase().includes(kw);
}

function checkBanned(label, text) {
	for (const re of BANNED) {
		if (re.test(text)) fail(`${label}: banned match ${re} → "${text.slice(0, 80)}..."`);
	}
}

// --- EN page content ---
const pageIds = Object.keys(englishPagesFinal);
for (const id of pageIds) {
	const p = englishPagesFinal[id];
	const label = `en/${id}`;

	checkBanned(label, `${p.title} ${p.description} ${p.h1} ${p.intro}`);

	if (p.title.length > 60) fail(`${label}: title too long (${p.title.length}): ${p.title}`);
	if (p.title.length < 20) warn(`${label}: title short (${p.title.length}): ${p.title}`);

	if (p.description.length > 160) fail(`${label}: description too long (${p.description.length})`);
	if (p.description.length < 100) warn(`${label}: description short (${p.description.length})`);

	if (!hasKeyword(p.title, 'overwatch')) {
		fail(`${label}: title missing "overwatch" → ${p.title}`);
	}
	if (!hasKeyword(p.description, 'overwatch')) {
		fail(`${label}: description missing "overwatch" → ${p.description.slice(0, 80)}`);
	}
	if (!hasKeyword(p.h1, 'overwatch') && !['privacy', 'refund', 'terms'].includes(id)) {
		fail(`${label}: h1 missing "overwatch" → ${p.h1}`);
	}

	// Primary keyword in money pages
	if (['home', 'hacks', 'overwatch-esp', 'overwatch-aimbot', 'pricing'].includes(id)) {
		if (!hasKeyword(p.description, PRIMARY_KW) && !hasKeyword(p.description, 'overwatch hacks')) {
			warn(`${label}: description should include primary keyword "overwatch hacks"`);
		}
	}
}

// --- site config files ---
const siteTs = readFileSync(join(root, 'src/data/site.ts'), 'utf8');
if (!siteTs.includes(ORIGIN)) fail(`site.ts missing canonical origin ${ORIGIN}`);
if (!siteTs.includes(`support@${DOMAIN}`)) fail(`site.ts missing support@${DOMAIN}`);
checkBanned('site.ts', siteTs);

const astroConfig = readFileSync(join(root, 'astro.config.mjs'), 'utf8');
if (!astroConfig.includes(ORIGIN)) fail(`astro.config.mjs missing site ${ORIGIN}`);

const robots = readFileSync(join(root, 'public/robots.txt'), 'utf8');
if (!robots.includes(DOMAIN)) fail(`robots.txt missing sitemap for ${DOMAIN}`);
checkBanned('robots.txt', robots);

const middleware = readFileSync(join(root, 'functions/_middleware.js'), 'utf8');
if (!middleware.includes(ORIGIN)) fail(`_middleware.js missing ${ORIGIN}`);
checkBanned('_middleware.js (content)', middleware.replace(/LEGACY_HOSTS[\s\S]*?;/, ''));

// --- built output (optional) ---
const distIndex = join(root, 'dist/index.html');
if (existsSync(distIndex)) {
	const html = readFileSync(distIndex, 'utf8');
	if (!html.includes(`href="${ORIGIN}/"`)) fail('dist/index.html canonical missing apex URL');
	if (!html.includes('Overwatch') && !html.includes('Overwatch Hacks')) {
		fail('dist/index.html missing Overwatch in title/meta');
	}
	checkBanned('dist/index.html', html);
}

// --- reviews pages ---
for (const file of ['src/pages/reviews/index.astro', 'src/pages/reviews/[slug]/index.astro']) {
	const src = readFileSync(join(root, file), 'utf8');
	checkBanned(file, src);
	if (!/overwatch hacks/i.test(src)) warn(`${file}: consider adding "Overwatch Hacks" keyword`);
}

// --- image alts ---
const rustTs = readFileSync(join(root, 'src/data/rust.ts'), 'utf8');
if (!/Overwatch/i.test(rustTs)) fail('rust.ts image alts missing Overwatch keyword');
checkBanned('rust.ts', rustTs);

// --- report ---
console.log('\n=== SEO Audit: overwatchhacks.com ===\n');
console.log(`Pages checked: ${pageIds.length} EN landing pages`);
console.log(`Primary keyword: "${PRIMARY_KW}"`);
console.log(`Canonical: ${ORIGIN}\n`);

if (warnings.length) {
	console.log(`Warnings (${warnings.length}):`);
	for (const w of warnings) console.log(`  ⚠ ${w}`);
	console.log('');
}

if (errors.length) {
	console.log(`Errors (${errors.length}):`);
	for (const e of errors) console.log(`  ✗ ${e}`);
	console.log('\nAudit FAILED.\n');
	process.exit(1);
}

console.log('✓ All critical SEO checks passed.\n');
