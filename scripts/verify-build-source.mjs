#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const packageName = JSON.parse(readFileSync('package.json', 'utf8')).name;
let commit = 'unknown';

try {
	commit = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
} catch {
	// Ignore outside git checkouts.
}

console.log(`[verify-build] commit=${commit} package=${packageName}`);

if (packageName !== 'warframe-cheats') {
	console.error(
		'[verify-build] Wrong package name for warframecheats.net. Expected warframe-cheats, not a Zomboid or other rebrand checkout.',
	);
	process.exit(1);
}

if (!existsSync('src/components/WarframeAuthorityLinks.astro')) {
	console.error(
		'[verify-build] Missing src/components/WarframeAuthorityLinks.astro. Deploy the Warframe main branch, not a Project Zomboid rebrand.',
	);
	process.exit(1);
}

if (existsSync('src/components/ZomboidAuthorityLinks.astro')) {
	console.error(
		'[verify-build] Project Zomboid component detected. Revert the Zomboid rebrand before deploying warframecheats.net.',
	);
	process.exit(1);
}
