#!/usr/bin/env node
/**
 * Cloudflare Workers Builds entry point.
 * Finds the project root, installs dependencies, builds Astro to dist/, and validates output.
 */
import { execSync } from 'node:child_process';
import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

function hasProjectFiles(dir) {
	return existsSync(join(dir, 'package.json')) && existsSync(join(dir, 'wrangler.toml'));
}

function findProjectRoot(startDir) {
	let dir = resolve(startDir);

	while (dir !== dirname(dir)) {
		if (hasProjectFiles(dir)) return dir;
		dir = dirname(dir);
	}

	dir = resolve(startDir);
	if (!existsSync(dir)) return null;

	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (!entry.isDirectory() || entry.name.startsWith('.')) continue;
		const candidate = join(dir, entry.name);
		if (hasProjectFiles(candidate)) return candidate;
	}

	return null;
}

function listDir(dir) {
	try {
		return readdirSync(dir).join(', ');
	} catch {
		return '(unreadable)';
	}
}

const startDir = process.cwd();
const projectRoot = findProjectRoot(startDir);

if (!projectRoot) {
	console.error(`[cloudflare-build] Could not find package.json + wrangler.toml`);
	console.error(`[cloudflare-build] Started in: ${startDir}`);
	console.error(`[cloudflare-build] Contents: ${listDir(startDir)}`);
	console.error(
		'[cloudflare-build] Fix: Cloudflare Settings > Build > Root directory must be blank (repo root).',
	);
	console.error(
		'[cloudflare-build] Also verify the connected Git repo is notfaadi/theislehacks on branch main.',
	);
	process.exit(1);
}

if (projectRoot !== startDir) {
	console.log(`[cloudflare-build] Switching to project root: ${projectRoot}`);
	process.chdir(projectRoot);
}

console.log(`[cloudflare-build] Project root: ${projectRoot}`);
console.log('[cloudflare-build] Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('[cloudflare-build] Building site...');
execSync('npm run build', { stdio: 'inherit' });

if (!existsSync('dist/index.html')) {
	console.error('[cloudflare-build] dist/index.html was not created. Build failed.');
	process.exit(1);
}

console.log('[cloudflare-build] Build complete.');

let buildId = 'unknown';
try {
	buildId = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
} catch {
	buildId = new Date().toISOString();
}

writeFileSync(
	'dist/build-version.json',
	JSON.stringify(
		{
			builtAt: new Date().toISOString(),
			commit: buildId,
			site: 'https://warthunderhacks.com',
		},
		null,
		2,
	) + '\n',
);
console.log(`[cloudflare-build] build-version.json → ${buildId}`);
