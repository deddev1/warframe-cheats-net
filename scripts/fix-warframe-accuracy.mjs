#!/usr/bin/env node
/**
 * Normalize copy for Warframe — removes Fortnite/Rust/Epic/EAC leftovers.
 * Run: node scripts/fix-warframe-accuracy.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** @type {[string | RegExp, string][]} */
const RULES = [
	[/Epic services/gi, 'Warframe servers'],
	[/Epic platform/gi, 'Warframe launcher'],
	[/Epic's rules/gi, "Digital Extremes' Terms of Service"],
	[/Epic terms/gi, 'Digital Extremes terms'],
	[/If Epic services/gi, 'If Warframe servers'],
	[/Embark' anti-cheat/gi, 'Digital Extremes anti-cheat'],
	[/Warframe or EAC patch/gi, 'Warframe or anti-cheat patch'],
	[/and EAC questions/gi, 'and anti-cheat questions'],
	[/EAC patch/gi, 'anti-cheat patch'],
	[/Battle royale fights happen in three dimensions — rooftops, windows, and flanks\./gi,
		'Multi-floor tilesets stack vertical fights — catwalks, doorways, and side spawns.'],
	[/extraction loop/gi, 'mission loop'],
	[/endgame circles/gi, 'defense waves'],
	[/ranked mission fight/gi, 'Steel Path mission fight'],
	[/ranked objective fight/gi, 'Steel Path objective fight'],
	[/ranked-critical/gi, 'mission-critical'],
	[/ranked lobbies/gi, 'co-op squads'],
	[/ranked block/gi, 'mission session'],
	[/before ranked/gi, 'before Steel Path'],
	[/Built for ranked pressure/gi, 'Built for Steel Path pressure'],
	[/before a third party/gi, 'before a flank wave'],
	[/third parties/gi, 'flank waves'],
	[/enemy squads/gi, 'enemy units'],
	[/enemy player/gi, 'enemy unit'],
	[/enemy players/gi, 'enemy units'],
	[/vehicles, loot, chests/gi, 'lockers, resource caches, and pickups'],
	[/vehicles and chests/gi, 'lockers and resource caches'],
	[/loot and chest/gi, 'pickups and lockers'],
	[/loot chests/gi, 'resource caches'],
	[/supply-drop/gi, 'pickup'],
	[/mid-match/gi, 'mid-mission'],
	[/map rotations/gi, 'tileset rotations'],
	[/map rotation/gi, 'tileset rotation'],
	[/POIs/g, 'tileset areas'],
	[/POI/g, 'tileset area'],
	[/loot routes/gi, 'farm routes'],
	[/drop path/gi, 'farm route'],
	[/track players and containers/gi, 'track enemies and containers'],
	[/track players/gi, 'track enemies'],
	[/player threats/gi, 'enemy threats'],
	[/enemy Warframes/gi, 'enemy units'],
	[/enemy Warframe/gi, 'enemy unit'],
	[/Warframe' live seasons/gi, "Warframe's live updates"],
	[/season updates from/gi, 'game updates from'],
	[/season calendars/gi, 'update calendars'],
	[/season notes from/gi, 'patch notes from'],
	[/season messaging/gi, 'official patch messaging'],
	[/season maps/gi, 'tileset updates'],
	[/for ranked/gi, 'for Steel Path'],
	[/in ranked/gi, 'in Steel Path'],
	[/ranked loadout/gi, 'mission loadout'],
	[/ranked climb/gi, 'Steel Path progression'],
	[/ranked grinders/gi, 'Steel Path players'],
	[/ranked/gi, 'Steel Path'],
	[/FNCS/gi, 'Sortie'],
	[/vbucks/gi, 'Platinum'],
	[/Bugha/gi, 'pro Tenno'],
	[/zero-build/gi, 'ability-only'],
	[/Battle Pass/gi, 'Prime Access'],
	[/Embark/gi, 'Digital Extremes'],
	[/Epic's rules/gi, "Digital Extremes' Terms of Service"],
	[/Epic terms/gi, 'Digital Extremes terms'],
	[/Epic patch/gi, 'Warframe patch'],
	[/every Epic patch/gi, 'every Warframe patch'],
	[/Epic health/gi, 'server status'],
	[/Cheats are flanking tools/gi, 'Cheats are third-party tools'],
	[/for Embark bans/gi, 'for game bans'],
	[/notice vehicles before/gi, 'spot heavy units before'],
	[/mark chests worth/gi, 'mark lockers and caches worth'],
	[/players, loot, and vehicles/gi, 'enemies, pickups, and lockers'],
	[/loot, chests, and vehicles/gi, 'pickups, lockers, and caches'],
	[/see players, loot, vehicles/gi, 'see enemies, pickups, and lockers'],
	[/live matches/gi, 'live missions'],
	[/in BR —/gi, 'in co-op —'],
	[/ghostware rust/gi, 'ghostware warframe'],
	[/rust wallhack/gi, 'warframe wallhack'],
	[/loot esp/gi, 'resource esp'],
	[/wipe-to-raid/gi, 'mission-to-rewards'],
	[/OW2/gi, 'Warframe'],
	[/payload corners/gi, 'objective corners'],
	[/payload escorts/gi, 'defense waves'],
	[/overtime/gi, 'extraction phase'],
	[/per-hero/gi, 'per-weapon'],
	[/hitscan and projectile/gi, 'primaries and secondaries'],
	[/AK, SMG, and bolt/gi, 'rifles, shotguns, and snipers'],
	[/AK, SMG ve bolt/gi, 'rifle, shotgun ve sniper'],
];

const FILES = [
	'scripts/i18n-data/pages-en.mjs',
	'src/data/site.ts',
	'scripts/generate-blog-posts.mjs',
	'src/data/schema.ts',
	'src/components/HomeSeo.astro',
	'src/data/i18n/gallery-ui.ts',
	'src/data/warframe.ts',
	'src/components/Gallery.astro',
	'src/data/page-sitemap.ts',
];

function applyRules(text) {
	let out = text;
	for (const [from, to] of RULES) {
		out = out.replace(from, to);
	}
	return out;
}

for (const rel of FILES) {
	const path = join(ROOT, rel);
	const next = applyRules(readFileSync(path, 'utf8'));
	writeFileSync(path, next);
	console.log('✓', rel);
}

// English UI image alts only
const uiPath = join(ROOT, 'scripts/i18n-data/ui-strings-part1.mjs');
let ui = readFileSync(uiPath, 'utf8');
ui = ui.replace(
	/aimbotCombat: '[^']+'/,
	"aimbotCombat: 'Warframe aimbot targeting a Grineer heavy unit during a Steel Path mission'",
);
ui = ui.replace(
	/squadFight: '[^']+'/,
	"squadFight: 'Warframe squad co-op fight with ESP and aimbot active in a Sortie'",
);
ui = ui.replace(
	/battleRoyale: '[^']+'/,
	"battleRoyale: 'Warframe Steel Path fight with undetected ESP overlays'",
);
ui = ui.replace(
	/battleRoyaleIsland: '[^']+'/,
	"battleRoyaleIsland: 'Warframe cheats menu with per-weapon aimbot profiles'",
);
ui = ui.replace(
	/espWallhack: '[^']+'/,
	"espWallhack: 'Warframe ESP overlay highlighting Grineer and Corpus units through walls'",
);
ui = ui.replace(
	/playerEsp: '[^']+'/,
	"playerEsp: 'Warframe wallhack ESP boxes on Grineer, Corpus, and Sentient units in Steel Path'",
);
writeFileSync(uiPath, ui);
console.log('✓ scripts/i18n-data/ui-strings-part1.mjs (en image alts)');

console.log('Done. Run: npm run generate:i18n && node scripts/generate-blog-posts.mjs');
