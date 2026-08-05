#!/usr/bin/env node
/**
 * Completes war-thunder-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'war-thunder-hacks', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'war-thunder-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'war-thunder-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'war-thunder-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-war-thunder-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'war-thunder-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'war-thunder-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'war-thunder-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/warzone-warzone/g, 'rust'],
	[/eac-bypass-war-thunder-warzone/g, 'eac-bypass-war-thunder'],
	[/Call of Duty: Warzone/g, 'Rust'],
	[/Call of Duty Warzone/g, 'Rust'],
	[/Call of Duty/g, 'Rust'],
	[/Warzone Wallhack/g, 'Rust Wallhack'],
	[/Warzone Radar Hack/g, 'Rust Radar Hack'],
	[/Warzone Cheat Features/g, 'Rust Cheat Features'],
	[/Warzone Cheat Pricing/g, 'Rust Cheat Pricing'],
	[/Warzone Cheat Setup/g, 'Rust Cheat Setup'],
	[/Warzone Cheat Status/g, 'Rust Cheat Status'],
	[/Warzone Cheat Support/g, 'Rust Cheat Support'],
	[/Warzone platoon engagement/g, 'Rust platoon engagement'],
	[/Warzone squad builder/g, 'Rust loadout builder'],
	[/Warzone store header/g, 'Rust header'],
	[/Warzone wasteland combat/g, 'Rust realistic battles combat'],
	[/Warzone loadout builder/g, 'Rust loadout builder'],
	[/Warzone pricing/g, 'Rust pricing'],
	[/Warzone Gaijin Easy Anti-Cheat/g, 'Rust Gaijin Easy Anti-Cheat'],
	[/on Warzone/g, 'on Rust'],
	[/for Warzone/g, 'for War Thunder'],
	[/Warzone guides/g, 'Rust guides'],
	[/Warzone guide/g, 'Rust guide'],
	[/Warzone hileleri/g, 'Rust hileleri'],
	[/Warzone hile/g, 'Rust hile'],
	[/Warzone hileleri/g, 'Rust hileleri'],
	[/cheatów Warzone/g, 'cheatów Rust'],
	[/cheat Warzone/g, 'cheat Rust'],
	[/cheats Warzone/g, 'cheats War Thunder'],
	[/trucos Warzone/g, 'trucos War Thunder'],
	[/triche Warzone/g, 'triche Rust'],
	[/trucchi Warzone/g, 'trucchi Rust'],
	[/Wallhack Warzone/g, 'Rust Wallhack'],
	[/cheat Warzone undetected/g, 'cheat Rust undetected'],
	[/cheats Warzone undetected/g, 'cheats War Thunder undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/Resurgence room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'War Thunder and capture zones'],
	[/Verdansk, Urzikstan/g, 'War Thunder, capture zones'],
	[/realistic battles and Resurgence/g, 'realistic battles and capture zones'],
	[/Activision's anti-cheat/g, "Embark' anti-cheat"],
	[/Activision anti-cheat/g, 'Embark anti-cheat'],
	[/Activision ships/g, 'Embark ships'],
	[/Activision security/g, 'Embark security'],
	[/Activision bans/g, 'Embark bans'],
	[/Activision/g, 'Embark'],
	[/ricochet/gi, 'eac'],
	[/Ricochet/g, 'Gaijin Easy Anti-Cheat (EAC)'],
	[/call-of-duty-warzone-cheats/g, 'war-thunder-cheats'],
	[/call-of-duty-warzone/g, 'rust'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for War Thunder'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Rust anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy War Thunder Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Warzone guides/g, 'Rust guides');
	content = content.replace(/Warzone guide/g, 'Rust guide');
	content = content.replace(/Warzone hileleri/g, 'Rust hileleri');
	content = content.replace(/Warzone hile/g, 'Rust hile');
	content = content.replace(/cheat Warzone/g, 'cheat Rust');
	content = content.replace(/cheats Warzone/g, 'cheats War Thunder');
	content = content.replace(/trucos Warzone/g, 'trucos War Thunder');
	content = content.replace(/triche Warzone/g, 'triche Rust');
	content = content.replace(/trucchi Warzone/g, 'trucchi Rust');
	content = content.replace(/cheatów Warzone/g, 'cheatów Rust');
	content = content.replace(/читов Warzone/g, 'читов Rust');
	content = content.replace(/читів Warzone/g, 'читів Rust');
	content = content.replace(/Warzoneチート/g, 'Rustチート');
	content = content.replace(/Warzone 치트/g, 'Rust 치트');
	content = content.replace(/Warzone作弊/g, 'Rust作弊');
	content = content.replace(/Warzone rehberleri/g, 'Rust rehberleri');
	content = content.replace(/Warzone gidsen/g, 'Rust gidsen');
	content = content.replace(/Warzone průvodce/g, 'Rust průvodce');
	content = content.replace(/Warzone guider/g, 'Rust guider');
	content = content.replace(/Warzone related/g, 'Rust related');
	content = content.replace(/Warzone ガイド/g, 'Rust ガイド');
	content = content.replace(/Warzone 가이드/g, 'Rust 가이드');
	content = content.replace(/Warzone指南/g, 'Rust指南');
	content = content.replace(/Warzone गाइड/g, 'Rust गाइड');
	content = content.replace(/Warzone panduan/g, 'Rust panduan');
	content = content.replace(/Warzone คู่มือ/g, 'Rust คู่มือ');
	content = content.replace(/Warzone hướng dẫn/g, 'Rust hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== War Thunder Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
