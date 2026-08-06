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
		img(rustImages.hero, 'War Thunder Hacks', 'War Thunder Hacks homepage hero'),
		img(rustImages.espWallhack, 'War Thunder ESP', 'War Thunder ESP wallhack overlay'),
		img(rustImages.aimbotCombat, 'War Thunder Aimbot', 'War Thunder Aimbot combat preview'),
	],
	hacks: [
		img(rustImages.battleRoyaleCombat, 'War Thunder Hacks', 'War Thunder hacks ranked ground battle preview'),
		img(rustImages.espWallhack, 'War Thunder Hacks ESP', 'War Thunder wallhack ESP on enemy tanks and aircraft'),
	],
	'war-thunder-esp': [
		img(rustImages.espWallhack, 'War Thunder ESP', 'War Thunder ESP wallhack overlay'),
		img(rustImages.playerEsp, 'War Thunder player ESP', 'War Thunder player ESP markers'),
	],
	'war-thunder-aimbot': [
		img(rustImages.aimbotCombat, 'War Thunder Aimbot', 'War Thunder Aimbot combat preview'),
		img(rustImages.squadFight, 'War Thunder Aimbot platoon engagement', 'War Thunder Aimbot in platoon combat'),
	],
	wallhack: [
		img(rustImages.espWallhack, 'War Thunder Wallhack', 'War Thunder wallhack ESP view'),
		img(rustImages.cover, 'War Thunder Wallhack overlay', 'War Thunder ESP boxes through terrain'),
	],
	radar: [
		img(rustImages.radarHack, 'War Thunder Radar Hack', 'War Thunder radar hack minimap overlay'),
		img(rustImages.rebootFight, 'War Thunder Radar Hack overlay', 'War Thunder 2D radar for flank detection'),
	],
	features: [
		img(rustImages.hero, 'War Thunder Hacks Features', 'War Thunder Hacks feature overview'),
		img(rustImages.loadoutBuilder, 'War Thunder Hacks menu', 'War Thunder Hacks in-client controls'),
	],
	pricing: [
		img(rustImages.cover, 'War Thunder Hacks Pricing', 'War Thunder Hacks license plans'),
		img(rustImages.cheatsPackage, 'War Thunder Hacks package', 'War Thunder Hacks product package'),
	],
	setup: [
		img(rustImages.squadFight, 'War Thunder Hacks Setup', 'War Thunder Hacks installation guide'),
	],
	updates: [
		img(rustImages.hero, 'War Thunder Hacks Updates', 'War Thunder Hacks patch status'),
	],
	faq: [
		img(rustImages.loadoutBuilder, 'War Thunder Hacks FAQ', 'War Thunder Hacks frequently asked questions'),
	],
	support: [
		img(rustImages.headerArt, 'War Thunder Hacks Support', 'War Thunder Hacks help center'),
	],
	privacy: [
		img(rustImages.cover, 'War Thunder Hacks Privacy Policy', 'War Thunder Hacks privacy policy'),
	],
	refund: [
		img(rustImages.cover, 'War Thunder Hacks Refund Policy', 'War Thunder Hacks refund policy'),
	],
	terms: [
		img(rustImages.squadFight, 'War Thunder Hacks Terms', 'War Thunder Hacks terms of use'),
	],
};

for (const pageId of sitemapPageIds) {
	if (!sitemapImagesByPageId[pageId]?.length) {
		throw new Error(`[sitemap] No images configured for sitemap pageId: ${pageId}`);
	}
}

/** Canonical English sitemap entries — core war-thunder-hacks URLs only. */
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
