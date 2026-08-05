import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');

/** Seven unique Overwatch 2 hack screenshots — keyword-mapped for overwatchhacks.com SEO. */
const SOURCES = [
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/2c/se/63abhhc0k40gccgk4o0w4.webp?p=mason-ow2-s1.webp&s=s3',
		file: 'overwatch-hacks-hero.webp',
		alt: 'Overwatch 2 hacks main menu with ESP, wallhack, and aimbot toggles on PC',
	},
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/a0/q1/6u9rp8g0wsgssc08k0c8o.webp?p=mason-ow2-s2.webp&s=s3',
		file: 'overwatch-esp-overlay.webp',
		alt: 'Overwatch 2 ESP overlay showing enemy hero positions and health bars through walls',
	},
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/3z/c4/l5mli9mowkwokk4ogk4cw.webp?p=byster-overwatch-s1.webp&s=s3',
		file: 'overwatch-esp-bots.webp',
		alt: 'Overwatch wallhack ESP with hero skeleton boxes and distance readouts in ranked',
	},
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/bq/1j/zvmc9twgw048kokc808sg.webp?p=byster-overwatch-s2.webp&s=s3',
		file: 'overwatch-esp-hitbox.webp',
		alt: 'Overwatch aimbot hitbox lock on enemy DPS hero during a team fight on PC',
	},
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/c8/5b/nnii90gg8ks4k8wsgwssk.webp?p=byster-overwatch-s3.webp&s=s3',
		file: 'overwatch-aimbot-menu.webp',
		alt: 'Overwatch hacks cheat menu with soft aim, FOV slider, and bone priority settings',
	},
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/7x/6e/a58jkjwoso0ws4ggcko88.webp?p=byster-overwatch-s4.webp&s=s3',
		file: 'overwatch-radar-hack.webp',
		alt: 'Overwatch radar hack 2D minimap overlay showing flank routes and enemy heroes',
	},
	{
		url: 'https://wh-satano.ru/storage/thumbnails/default/3p/sk/7h7dja04wwk4cw0w0gc8k.webp?p=byster-overwatch-s5.webp&s=s3',
		file: 'overwatch-ranked-fight.webp',
		alt: 'Overwatch hacks ranked team fight with ESP boxes and aimbot active on payload',
	},
];

const VARIANT_WIDTHS = [480, 640, 960, 1400];

async function download(url) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function writeMaster(buffer, file) {
	const masterPath = join(outDir, file);
	await writeFile(masterPath, buffer);
	return masterPath;
}

async function writeVariants(buffer, file) {
	const base = file.replace(/\.webp$/i, '');
	for (const width of VARIANT_WIDTHS) {
		const variantPath = join(outDir, `${base}-${width}w.webp`);
		await sharp(buffer)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality: 82 })
			.toFile(variantPath);
	}
}

await mkdir(outDir, { recursive: true });

for (const item of SOURCES) {
	console.log(`Fetching ${item.file}…`);
	const buffer = await download(item.url);
	await writeMaster(buffer, item.file);
	await writeVariants(buffer, item.file);
	console.log(`  ✓ ${item.file} (+ variants)`);
}

console.log('Done — 7 Overwatch 2 hack images installed.');
