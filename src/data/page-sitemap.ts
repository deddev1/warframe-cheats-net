import { siteConfig } from './site';
import { rustImages } from './rust';
import { englishPaths, sitemapPageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	lastmod: string;
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

/** Sitemap image assignments for indexable pages only (see sitemapPageIds in routing.ts). */
const sitemapImagesByPageId: Partial<Record<PageId, SitemapImage[]>> = {
	home: [
		img(rustImages.hero, 'Overwatch Hacks', 'Overwatch Hacks homepage hero'),
		img(rustImages.espWallhack, 'Overwatch ESP', 'Overwatch ESP wallhack overlay'),
		img(rustImages.aimbotCombat, 'Overwatch Aimbot', 'Overwatch Aimbot combat preview'),
	],
	hacks: [
		img(rustImages.battleRoyaleCombat, 'Overwatch Hacks', 'Overwatch 2 hacks ranked team fight preview'),
		img(rustImages.espWallhack, 'Overwatch Hacks ESP', 'Overwatch wallhack ESP on enemy heroes'),
	],
	'overwatch-esp': [
		img(rustImages.espWallhack, 'Overwatch ESP', 'Overwatch ESP wallhack overlay'),
		img(rustImages.playerEsp, 'Overwatch player ESP', 'Overwatch player ESP markers'),
	],
	'overwatch-aimbot': [
		img(rustImages.aimbotCombat, 'Overwatch Aimbot', 'Overwatch Aimbot combat preview'),
		img(rustImages.squadFight, 'Overwatch Aimbot squad fight', 'Overwatch Aimbot in squad combat'),
	],
	wallhack: [
		img(rustImages.espWallhack, 'Overwatch Wallhack', 'Overwatch wallhack ESP view'),
	],
	radar: [
		img(rustImages.radarHack, 'Overwatch Radar Hack', 'Overwatch 2 radar hack minimap overlay'),
	],
	features: [
		img(rustImages.hero, 'Overwatch Hacks Features', 'Overwatch Hacks feature overview'),
		img(rustImages.loadoutBuilder, 'Overwatch Hacks menu', 'Overwatch Hacks in-client controls'),
	],
	pricing: [
		img(rustImages.cover, 'Overwatch Hacks Pricing', 'Overwatch Hacks license plans'),
		img(rustImages.cheatsPackage, 'Overwatch Hacks package', 'Overwatch Hacks product package'),
	],
	setup: [
		img(rustImages.squadFight, 'Overwatch Hacks Setup', 'Overwatch Hacks installation guide'),
	],
	updates: [
		img(rustImages.hero, 'Overwatch Hacks Updates', 'Overwatch Hacks patch status'),
	],
	faq: [
		img(rustImages.loadoutBuilder, 'Overwatch Hacks FAQ', 'Overwatch Hacks frequently asked questions'),
	],
	support: [
		img(rustImages.headerArt, 'Overwatch Hacks Support', 'Overwatch Hacks help center'),
	],
	privacy: [
		img(rustImages.cover, 'Overwatch Hacks Privacy Policy', 'Overwatch Hacks privacy policy'),
	],
	refund: [
		img(rustImages.cover, 'Overwatch Hacks Refund Policy', 'Overwatch Hacks refund policy'),
	],
	terms: [
		img(rustImages.squadFight, 'Overwatch Hacks Terms', 'Overwatch Hacks terms of use'),
	],
};

for (const pageId of sitemapPageIds) {
	if (!sitemapImagesByPageId[pageId]?.length) {
		throw new Error(`[sitemap] No images configured for sitemap pageId: ${pageId}`);
	}
}

/** Canonical English sitemap entries — core overwatch-hacks URLs only. */
export const pageSitemapEntries: PageSitemapEntry[] = sitemapPageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: meta.lastmod,
		images: sitemapImagesByPageId[pageId]!,
	};
});

/** Unique keyword images for the dedicated image sitemap. */
export const imageSitemapEntries: SitemapImage[] = rustImages.sitemap.map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
