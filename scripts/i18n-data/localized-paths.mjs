/** Minimal localized path builder for i18n content generation (mirrors src/data/i18n/routing.ts). */

const EN = {
	home: '/',
	hacks: '/warframe-cheats/',
	'warframe-esp': '/warframe-esp/',
	'warframe-aimbot': '/warframe-aimbot/',
	wallhack: '/warframe-wallhack/',
	radar: '/warframe-radar/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	refund: '/refund-policy/',
};

/** Slug after /{locale}/ for non-English pages used in FAQs and CTAs. */
const SLUGS = {
	es: { home: '', hacks: 'trucos-warframe', 'warframe-esp': 'trucos-warframe-esp', 'warframe-aimbot': 'trucos-warframe-aimbot', wallhack: 'trucos-warframe-wallhack', radar: 'trucos-warframe-radar', features: 'caracteristicas-trucos-warframe', pricing: 'precios-trucos-warframe', setup: 'instalacion-trucos-warframe', updates: 'actualizaciones-trucos-warframe', faq: 'preguntas-trucos-warframe', support: 'soporte-trucos-warframe', refund: 'politica-reembolso' },
	fr: { home: '', hacks: 'triche-warframe', 'warframe-esp': 'triche-warframe-esp', 'warframe-aimbot': 'triche-warframe-aimbot', wallhack: 'triche-warframe-wallhack', radar: 'triche-warframe-radar', features: 'fonctionnalites-triche-warframe', pricing: 'prix-triche-warframe', setup: 'installation-triche-warframe', updates: 'mises-a-jour-triche-warframe', faq: 'faq-triche-warframe', support: 'support-triche-warframe', refund: 'politique-remboursement' },
	de: { home: '', hacks: 'warframe-cheats', 'warframe-esp': 'warframe-esp-wallhack', 'warframe-aimbot': 'warframe-aimbot', wallhack: 'warframe-wallhack', radar: 'warframe-radar-hack', features: 'warframe-cheats-funktionen', pricing: 'warframe-cheats-preise', setup: 'warframe-cheats-setup', updates: 'warframe-cheats-updates', faq: 'warframe-cheats-faq', support: 'warframe-cheats-support', refund: 'rueckerstattungsrichtlinie' },
	uk: { home: '', hacks: 'chity-warframe', 'warframe-esp': 'warframe-esp-chity', 'warframe-aimbot': 'warframe-aimbot-chity', wallhack: 'warframe-wallhack-chity', radar: 'warframe-radar-chity', features: 'funkcii-chitiv-warframe', pricing: 'ciny-chitiv-warframe', setup: 'vstanovlennya-chitiv-warframe', updates: 'onovlennya-chitiv-warframe', faq: 'faq-chitiv-warframe', support: 'pidtrymka-chitiv-warframe', refund: 'polityka-povernennya' },
};

/** Fallback: English path prefixed with locale (works for pages that share English slugs). */
export function localizedPath(locale, pageId) {
	if (locale === 'en') return EN[pageId] ?? '/';
	const map = SLUGS[locale];
	if (map?.[pageId] !== undefined) {
		const slug = map[pageId];
		return slug ? `/${locale}/${slug}/` : `/${locale}/`;
	}
	const en = EN[pageId];
	if (!en || en === '/') return `/${locale}/`;
	const slug = en.replace(/^\/|\/$/g, '');
	return `/${locale}/${slug}/`;
}
