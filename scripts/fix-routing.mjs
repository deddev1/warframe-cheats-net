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
	['warzone-esp', 'war-thunder-esp'],
	['warzone-aimbot', 'war-thunder-aimbot'],
	['ricochet', 'eac-bypass'],
	['undetected-warzone-cheats', 'undetected-war-thunder-cheats'],
	['warzone-wallhack', 'war-thunder-wallhack'],
	['warzone-radar-hack', 'war-thunder-radar-hack'],
	['warzone-cheats-2026', 'war-thunder-cheats-2026'],
	['ricochet-bypass', 'eac-bypass-war-thunder'],
	['warzonescheats.net', 'warthunderhacks.com'],
	['trucos-warzone', 'trucos-war-thunder'],
	['triche-warzone', 'triche-war-thunder'],
	['warzone-cheats', 'war-thunder-cheats'],
	['cheats-warzone', 'cheats-war-thunder'],
	['trucchi-warzone', 'trucchi-war-thunder'],
	['cheaty-warzone', 'cheaty-war-thunder'],
	['chity-warzone', 'chity-war-thunder'],
	['chitov-warzone', 'chitov-war-thunder'],
	['chitiv-warzone', 'chitiv-overwatch'],
	['cheatow-warzone', 'cheatow-war-thunder'],
	['hile-warzone', 'hile-war-thunder'],
	['warzone-hile', 'war-thunder-hile'],
	['warzone-esp-chity', 'war-thunder-esp-chity'],
	['warzone-aimbot-chity', 'war-thunder-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-war-thunder-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-war-thunder-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-war-thunder-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-war-thunder'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-war-thunder'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-war-thunder-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-war-thunder'],
	['cheats-warzone-nedetectabile', 'cheats-war-thunder-nedetectabile'],
	['basta-warzone-cheats', 'basta-war-thunder-cheats'],
	['eac-bypass-war-thunder-trucos-warzone', 'eac-bypass-war-thunder-trucos-war-thunder'],
	['eac-bypass-war-thunder-triche-warzone', 'eac-bypass-war-thunder-triche-war-thunder'],
	['eac-bypass-war-thunder-cheats-warzone', 'eac-bypass-war-thunder-cheats-war-thunder'],
	['eac-bypass-war-thunder-chity-warzone', 'eac-bypass-war-thunder-chity-war-thunder'],
	['eac-bypass-war-thunder-warzone', 'eac-bypass-war-thunder'],
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
	const heroImages = `/** Hero image per page topic — keyword-rich war-thunder-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/war-thunder-cheats-hero.webp',
	'war-thunder-esp': '/images/war-thunder-cheats-esp-wallhack.webp',
	'war-thunder-aimbot': '/images/war-thunder-cheats-aimbot-combat.webp',
	features: '/images/war-thunder-cheats-package.webp',
	pricing: '/images/war-thunder-cheats-cover.webp',
	setup: '/images/rust-loadout-builder.webp',
	updates: '/images/rust-header-art.webp',
	faq: '/images/rust-squad-fight.webp',
	support: '/images/war-thunder-cheats-package.webp',
	undetected: '/images/rust-battle-royale-combat.webp',
	wallhack: '/images/war-thunder-cheats-esp-wallhack.webp',
	radar: '/images/rust-player-esp.webp',
	'eac-bypass': '/images/rust-reboot-van-fight.webp',
	'cheats-2026': '/images/war-thunder-cheats-hero.webp',
	privacy: '/images/war-thunder-cheats-aimbot-combat.webp',
	refund: '/images/war-thunder-cheats-cover.webp',
	terms: '/images/war-thunder-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'war-thunder-esp', 'war-thunder-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'war-thunder-esp' | 'war-thunder-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/gulagFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
