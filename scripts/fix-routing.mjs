#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Warzone source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['warzone-esp', 'overwatch-esp'],
	['warzone-aimbot', 'overwatch-aimbot'],
	['ricochet', 'eac-bypass'],
	['undetected-warzone-cheats', 'undetected-overwatch-cheats'],
	['warzone-wallhack', 'overwatch-wallhack'],
	['warzone-radar-hack', 'overwatch-radar-hack'],
	['warzone-cheats-2026', 'overwatch-cheats-2026'],
	['ricochet-bypass', 'eac-bypass-overwatch'],
	['warzonescheats.net', 'overwatchhacks.com'],
	['trucos-warzone', 'trucos-overwatch'],
	['triche-warzone', 'triche-overwatch'],
	['warzone-cheats', 'overwatch-cheats'],
	['cheats-warzone', 'cheats-overwatch'],
	['trucchi-warzone', 'trucchi-overwatch'],
	['cheaty-warzone', 'cheaty-overwatch'],
	['chity-warzone', 'chity-overwatch'],
	['chitov-warzone', 'chitov-overwatch'],
	['chitiv-warzone', 'chitiv-overwatch'],
	['cheatow-warzone', 'cheatow-overwatch'],
	['hile-warzone', 'hile-overwatch'],
	['warzone-hile', 'overwatch-hile'],
	['warzone-esp-chity', 'overwatch-esp-chity'],
	['warzone-aimbot-chity', 'overwatch-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-overwatch-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-overwatch-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-overwatch-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-overwatch'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-overwatch'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-overwatch-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-overwatch'],
	['cheats-warzone-nedetectabile', 'cheats-overwatch-nedetectabile'],
	['basta-warzone-cheats', 'basta-overwatch-cheats'],
	['eac-bypass-overwatch-trucos-warzone', 'eac-bypass-overwatch-trucos-overwatch'],
	['eac-bypass-overwatch-triche-warzone', 'eac-bypass-overwatch-triche-overwatch'],
	['eac-bypass-overwatch-cheats-warzone', 'eac-bypass-overwatch-cheats-overwatch'],
	['eac-bypass-overwatch-chity-warzone', 'eac-bypass-overwatch-chity-overwatch'],
	['eac-bypass-overwatch-warzone', 'eac-bypass-overwatch'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac-bypass': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich overwatch-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/overwatch-cheats-hero.webp',
	'overwatch-esp': '/images/overwatch-cheats-esp-wallhack.webp',
	'overwatch-aimbot': '/images/overwatch-cheats-aimbot-combat.webp',
	features: '/images/overwatch-cheats-package.webp',
	pricing: '/images/overwatch-cheats-cover.webp',
	setup: '/images/rust-loadout-builder.webp',
	updates: '/images/rust-header-art.webp',
	faq: '/images/rust-squad-fight.webp',
	support: '/images/overwatch-cheats-package.webp',
	undetected: '/images/rust-battle-royale-combat.webp',
	wallhack: '/images/overwatch-cheats-esp-wallhack.webp',
	radar: '/images/rust-player-esp.webp',
	'eac-bypass': '/images/rust-reboot-van-fight.webp',
	'cheats-2026': '/images/overwatch-cheats-hero.webp',
	privacy: '/images/overwatch-cheats-aimbot-combat.webp',
	refund: '/images/overwatch-cheats-cover.webp',
	terms: '/images/overwatch-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'overwatch-esp', 'overwatch-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'overwatch-esp' | 'overwatch-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/gulagFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
