/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'war-thunder-esp', 'war-thunder-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/**
 * Hero image per page — rotate the five distinct screenshots.
 * Topic pages keep thematic matches; utility/legal pages fill remaining slots.
 */
export const HERO_IMAGES = {
	home: '/images/war-thunder-hacks-hero.webp',
	'war-thunder-esp': '/images/war-thunder-esp-overlay.webp',
	'war-thunder-aimbot': '/images/war-thunder-aimbot-menu.webp',
	features: '/images/war-thunder-esp-tanks.webp',
	pricing: '/images/war-thunder-esp-modules.webp',
	setup: '/images/war-thunder-aimbot-menu.webp',
	updates: '/images/war-thunder-esp-overlay.webp',
	faq: '/images/war-thunder-esp-tanks.webp',
	support: '/images/war-thunder-aimbot-menu.webp',
	undetected: '/images/war-thunder-hacks-hero.webp',
	wallhack: '/images/war-thunder-esp-modules.webp',
	radar: '/images/war-thunder-radar-hack.webp',
	'eac-bypass': '/images/war-thunder-esp-overlay.webp',
	'cheats-2026': '/images/war-thunder-hacks-hero.webp',
	hacks: '/images/war-thunder-esp-tanks.webp',
	'cheat-download': '/images/war-thunder-esp-overlay.webp',
	'mod-menu': '/images/war-thunder-aimbot-menu.webp',
	'soft-aim': '/images/war-thunder-hacks-hero.webp',
	'best-cheats': '/images/war-thunder-esp-modules.webp',
	'aimbot-hack': '/images/war-thunder-aimbot-menu.webp',
	'esp-hack': '/images/war-thunder-esp-overlay.webp',
	'unlock-all': '/images/war-thunder-esp-tanks.webp',
	privacy: '/images/war-thunder-esp-modules.webp',
	refund: '/images/war-thunder-aimbot-menu.webp',
	terms: '/images/war-thunder-esp-tanks.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
};
export type PageId = 'home' | 'war-thunder-esp' | 'war-thunder-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Remove Zadeyo from meta title/description strings only. */
export function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout über Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy War Thunder Hacks/g, 'Buy War Thunder Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	epic: '<a href="https://warthunder.com/en" target="_blank" rel="noopener noreferrer">War Thunder</a>',
	rust: '<a href="https://warthunder.com/en" target="_blank" rel="noopener noreferrer">War Thunder</a>',
	status: '<a href="https://warthunder.com/en" target="_blank" rel="noopener noreferrer">War Thunder</a>',
	eac: '<a href="https://warthunder.com/en" target="_blank" rel="noopener noreferrer">Gaijin Easy Anti-Cheat</a>',
};
