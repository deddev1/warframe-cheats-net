import { siteConfig } from '../site';
import {
	defaultLocale,
	localeCodes,
	type LocaleCode,
	locales,
} from './locales';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'war-thunder-esp'
	| 'war-thunder-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac-bypass'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'war-thunder-esp': '/war-thunder-esp/',
	'war-thunder-aimbot': '/war-thunder-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/war-thunder-hacks/',
	wallhack: '/war-thunder-wallhack/',
	radar: '/war-thunder-radar/',
	'eac-bypass': '/war-thunder-hacks/',
	'cheats-2026': '/war-thunder-hacks/',
	hacks: '/war-thunder-hacks/',
	'cheat-download': '/pricing/',
	'mod-menu': '/features/',
	'soft-aim': '/war-thunder-aimbot/',
	'best-cheats': '/war-thunder-hacks/',
	'aimbot-hack': '/war-thunder-aimbot/',
	'esp-hack': '/war-thunder-esp/',
	'unlock-all': '/features/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Core English pages for sitemap.xml — focused war-thunder-hacks URLs only.
 * Thin keyword-duplicate landings redirect to these canonical pages.
 */
export const sitemapPageIds: PageId[] = [
	'home',
	'hacks',
	'war-thunder-esp',
	'war-thunder-aimbot',
	'wallhack',
	'radar',
	'features',
	'pricing',
	'setup',
	'updates',
	'faq',
	'support',
	'privacy',
	'refund',
	'terms',
];

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'war-thunder-esp': {
		en: 'war-thunder-esp',
		es: 'trucos-war-thunder-esp',
		fr: 'triche-war-thunder-esp',
		de: 'war-thunder-esp-wallhack',
		pt: 'cheats-war-thunder-esp',
		it: 'trucchi-war-thunder-esp',
		nl: 'war-thunder-esp-wallhack',
		pl: 'cheaty-war-thunder-esp',
		ru: 'war-thunder-esp-chity',
		tr: 'war-thunder-esp-hile',
		ar: 'war-thunder-esp-wallhack',
		ja: 'war-thunder-esp-wallhack',
		ko: 'war-thunder-esp-wallhack',
		zh: 'war-thunder-esp-wallhack',
		hi: 'war-thunder-esp-wallhack',
		id: 'war-thunder-esp-wallhack',
		th: 'war-thunder-esp-wallhack',
		vi: 'war-thunder-esp-wallhack',
		uk: 'war-thunder-esp-chity',
		cs: 'war-thunder-esp-wallhack',
		ro: 'war-thunder-esp-wallhack',
		sv: 'war-thunder-esp-wallhack',
	},
	'war-thunder-aimbot': {
		en: 'war-thunder-aimbot',
		es: 'trucos-war-thunder-aimbot',
		fr: 'triche-war-thunder-aimbot',
		de: 'war-thunder-aimbot',
		pt: 'cheats-war-thunder-aimbot',
		it: 'trucchi-war-thunder-aimbot',
		nl: 'war-thunder-aimbot',
		pl: 'cheaty-war-thunder-aimbot',
		ru: 'war-thunder-aimbot-chity',
		tr: 'war-thunder-aimbot-hile',
		ar: 'war-thunder-aimbot',
		ja: 'war-thunder-aimbot',
		ko: 'war-thunder-aimbot',
		zh: 'war-thunder-aimbot',
		hi: 'war-thunder-aimbot',
		id: 'war-thunder-aimbot',
		th: 'war-thunder-aimbot',
		vi: 'war-thunder-aimbot',
		uk: 'war-thunder-aimbot-chity',
		cs: 'war-thunder-aimbot',
		ro: 'war-thunder-aimbot',
		sv: 'war-thunder-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-war-thunder',
		fr: 'fonctionnalites-triche-war-thunder',
		de: 'war-thunder-cheats-funktionen',
		pt: 'recursos-cheats-war-thunder',
		it: 'funzioni-trucchi-war-thunder',
		nl: 'war-thunder-cheats-functies',
		pl: 'funkcje-cheatow-war-thunder',
		ru: 'funkcii-chitov-war-thunder',
		tr: 'war-thunder-hile-ozellikleri',
		ar: 'war-thunder-cheats-features',
		ja: 'war-thunder-cheats-features',
		ko: 'war-thunder-cheats-features',
		zh: 'war-thunder-cheats-features',
		hi: 'war-thunder-cheats-features',
		id: 'war-thunder-cheats-features',
		th: 'war-thunder-cheats-features',
		vi: 'war-thunder-cheats-features',
		uk: 'funkcii-chitiv-war-thunder',
		cs: 'war-thunder-cheats-funkce',
		ro: 'functii-cheats-war-thunder',
		sv: 'war-thunder-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-war-thunder',
		fr: 'prix-triche-war-thunder',
		de: 'war-thunder-cheats-preise',
		pt: 'precos-cheats-war-thunder',
		it: 'prezzi-trucchi-war-thunder',
		nl: 'war-thunder-cheats-prijzen',
		pl: 'ceny-cheatow-war-thunder',
		ru: 'ceny-chitov-war-thunder',
		tr: 'war-thunder-hile-fiyatlari',
		ar: 'war-thunder-cheats-pricing',
		ja: 'war-thunder-cheats-pricing',
		ko: 'war-thunder-cheats-pricing',
		zh: 'war-thunder-cheats-pricing',
		hi: 'war-thunder-cheats-pricing',
		id: 'war-thunder-cheats-pricing',
		th: 'war-thunder-cheats-pricing',
		vi: 'war-thunder-cheats-pricing',
		uk: 'ciny-chitiv-war-thunder',
		cs: 'war-thunder-cheats-ceny',
		ro: 'preturi-cheats-war-thunder',
		sv: 'war-thunder-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-war-thunder',
		fr: 'installation-triche-war-thunder',
		de: 'war-thunder-cheats-installation',
		pt: 'instalacao-cheats-war-thunder',
		it: 'installazione-trucchi-war-thunder',
		nl: 'war-thunder-cheats-installatie',
		pl: 'instalacja-cheatow-war-thunder',
		ru: 'ustanovka-chitov-war-thunder',
		tr: 'war-thunder-hile-kurulum',
		ar: 'war-thunder-cheats-setup',
		ja: 'war-thunder-cheats-setup',
		ko: 'war-thunder-cheats-setup',
		zh: 'war-thunder-cheats-setup',
		hi: 'war-thunder-cheats-setup',
		id: 'war-thunder-cheats-setup',
		th: 'war-thunder-cheats-setup',
		vi: 'war-thunder-cheats-setup',
		uk: 'vstanovka-chitiv-war-thunder',
		cs: 'war-thunder-cheats-instalace',
		ro: 'instalare-cheats-war-thunder',
		sv: 'war-thunder-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-war-thunder',
		fr: 'mises-a-jour-triche-war-thunder',
		de: 'war-thunder-cheats-updates',
		pt: 'atualizacoes-cheats-war-thunder',
		it: 'aggiornamenti-trucchi-war-thunder',
		nl: 'war-thunder-cheats-updates',
		pl: 'aktualizacje-cheatow-war-thunder',
		ru: 'obnovleniya-chitov-war-thunder',
		tr: 'war-thunder-hile-guncellemeleri',
		ar: 'war-thunder-cheats-updates',
		ja: 'war-thunder-cheats-updates',
		ko: 'war-thunder-cheats-updates',
		zh: 'war-thunder-cheats-updates',
		hi: 'war-thunder-cheats-updates',
		id: 'war-thunder-cheats-updates',
		th: 'war-thunder-cheats-updates',
		vi: 'war-thunder-cheats-updates',
		uk: 'onovlennya-chitiv-war-thunder',
		cs: 'war-thunder-cheats-aktualizace',
		ro: 'actualizari-cheats-war-thunder',
		sv: 'war-thunder-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-war-thunder',
		fr: 'faq-triche-war-thunder',
		de: 'war-thunder-cheats-faq',
		pt: 'faq-cheats-war-thunder',
		it: 'faq-trucchi-war-thunder',
		nl: 'war-thunder-cheats-faq',
		pl: 'faq-cheatow-war-thunder',
		ru: 'faq-chitov-war-thunder',
		tr: 'war-thunder-hile-sss',
		ar: 'war-thunder-cheats-faq',
		ja: 'war-thunder-cheats-faq',
		ko: 'war-thunder-cheats-faq',
		zh: 'war-thunder-cheats-faq',
		hi: 'war-thunder-cheats-faq',
		id: 'war-thunder-cheats-faq',
		th: 'war-thunder-cheats-faq',
		vi: 'war-thunder-cheats-faq',
		uk: 'faq-chitiv-war-thunder',
		cs: 'war-thunder-cheats-faq',
		ro: 'faq-cheats-war-thunder',
		sv: 'war-thunder-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-war-thunder',
		fr: 'support-triche-war-thunder',
		de: 'war-thunder-cheats-support',
		pt: 'suporte-cheats-war-thunder',
		it: 'supporto-trucchi-war-thunder',
		nl: 'war-thunder-cheats-support',
		pl: 'wsparcie-cheatow-war-thunder',
		ru: 'podderzhka-chitov-war-thunder',
		tr: 'war-thunder-hile-destek',
		ar: 'war-thunder-cheats-support',
		ja: 'war-thunder-cheats-support',
		ko: 'war-thunder-cheats-support',
		zh: 'war-thunder-cheats-support',
		hi: 'war-thunder-cheats-support',
		id: 'war-thunder-cheats-support',
		th: 'war-thunder-cheats-support',
		vi: 'war-thunder-cheats-support',
		uk: 'pidtrymka-chitiv-war-thunder',
		cs: 'war-thunder-cheats-podpora',
		ro: 'suport-cheats-war-thunder',
		sv: 'war-thunder-cheats-support',
	},
	undetected: {
		en: 'undetected-war-thunder-cheats',
		es: 'trucos-war-thunder-indetectables',
		fr: 'triche-war-thunder-indetectable',
		de: 'unentdeckte-war-thunder-cheats',
		pt: 'cheats-war-thunder-indetectaveis',
		it: 'trucchi-war-thunder-indetectabili',
		nl: 'undetected-war-thunder-cheats',
		pl: 'niewykrywalne-cheats-war-thunder',
		ru: 'nedecektiruemye-chity-war-thunder',
		tr: 'tespit-edilemeyen-war-thunder-hileleri',
		ar: 'undetected-war-thunder-cheats',
		ja: 'undetected-war-thunder-cheats',
		ko: 'undetected-war-thunder-cheats',
		zh: 'undetected-war-thunder-cheats',
		hi: 'undetected-war-thunder-cheats',
		id: 'undetected-war-thunder-cheats',
		th: 'undetected-war-thunder-cheats',
		vi: 'undetected-war-thunder-cheats',
		uk: 'nedecektovani-chity-war-thunder',
		cs: 'undetected-war-thunder-cheats',
		ro: 'cheats-war-thunder-nedetectabile',
		sv: 'undetected-war-thunder-cheats',
	},
	wallhack: {
		en: 'war-thunder-wallhack',
		es: 'wallhack-trucos-war-thunder',
		fr: 'wallhack-triche-war-thunder',
		de: 'war-thunder-wallhack',
		pt: 'wallhack-cheats-war-thunder',
		it: 'wallhack-trucchi-war-thunder',
		nl: 'war-thunder-wallhack',
		pl: 'wallhack-cheatow-war-thunder',
		ru: 'wallhack-chity-war-thunder',
		tr: 'war-thunder-wallhack-hile',
		ar: 'war-thunder-wallhack',
		ja: 'war-thunder-wallhack',
		ko: 'war-thunder-wallhack',
		zh: 'war-thunder-wallhack',
		hi: 'war-thunder-wallhack',
		id: 'war-thunder-wallhack',
		th: 'war-thunder-wallhack',
		vi: 'war-thunder-wallhack',
		uk: 'wallhack-chity-war-thunder',
		cs: 'war-thunder-wallhack',
		ro: 'wallhack-cheats-war-thunder',
		sv: 'war-thunder-wallhack',
	},
	radar: {
		en: 'war-thunder-radar-hack',
		es: 'radar-hack-trucos-war-thunder',
		fr: 'radar-hack-triche-war-thunder',
		de: 'war-thunder-radar-hack',
		pt: 'radar-hack-cheats-war-thunder',
		it: 'radar-hack-trucchi-war-thunder',
		nl: 'war-thunder-radar-hack',
		pl: 'radar-hack-cheatow-war-thunder',
		ru: 'radar-hack-chity-war-thunder',
		tr: 'war-thunder-radar-hack',
		ar: 'war-thunder-radar-hack',
		ja: 'war-thunder-radar-hack',
		ko: 'war-thunder-radar-hack',
		zh: 'war-thunder-radar-hack',
		hi: 'war-thunder-radar-hack',
		id: 'war-thunder-radar-hack',
		th: 'war-thunder-radar-hack',
		vi: 'war-thunder-radar-hack',
		uk: 'radar-hack-chity-war-thunder',
		cs: 'war-thunder-radar-hack',
		ro: 'radar-hack-cheats-war-thunder',
		sv: 'war-thunder-radar-hack',
	},
	'eac-bypass': {
		en: 'eac-bypass-war-thunder',
		es: 'eac-bypass-war-thunder-trucos',
		fr: 'eac-bypass-war-thunder-triche',
		de: 'eac-bypass-war-thunder',
		pt: 'eac-bypass-war-thunder-cheats',
		it: 'eac-bypass-war-thunder-trucchi',
		nl: 'eac-bypass-war-thunder',
		pl: 'eac-bypass-war-thunder-cheatow',
		ru: 'eac-bypass-war-thunder-chity',
		tr: 'eac-bypass-war-thunder',
		ar: 'eac-bypass-war-thunder',
		ja: 'eac-bypass-war-thunder',
		ko: 'eac-bypass-war-thunder',
		zh: 'eac-bypass-war-thunder',
		hi: 'eac-bypass-war-thunder',
		id: 'eac-bypass-war-thunder',
		th: 'eac-bypass-war-thunder',
		vi: 'eac-bypass-war-thunder',
		uk: 'eac-bypass-war-thunder-chity',
		cs: 'eac-bypass-war-thunder',
		ro: 'eac-bypass-war-thunder-cheats',
		sv: 'eac-bypass-war-thunder',
	},
	'cheats-2026': {
		en: 'war-thunder-cheats-2026',
		es: 'trucos-war-thunder-2026',
		fr: 'triche-war-thunder-2026',
		de: 'war-thunder-cheats-2026',
		pt: 'cheats-war-thunder-2026',
		it: 'trucchi-war-thunder-2026',
		nl: 'war-thunder-cheats-2026',
		pl: 'cheaty-war-thunder-2026',
		ru: 'chity-war-thunder-2026',
		tr: 'war-thunder-hileleri-2026',
		ar: 'war-thunder-cheats-2026',
		ja: 'war-thunder-cheats-2026',
		ko: 'war-thunder-cheats-2026',
		zh: 'war-thunder-cheats-2026',
		hi: 'war-thunder-cheats-2026',
		id: 'war-thunder-cheats-2026',
		th: 'war-thunder-cheats-2026',
		vi: 'war-thunder-cheats-2026',
		uk: 'chity-war-thunder-2026',
		cs: 'war-thunder-cheats-2026',
		ro: 'cheats-war-thunder-2026',
		sv: 'war-thunder-cheats-2026',
	},
	hacks: {
		en: 'war-thunder-hacks',
		es: 'hacks-trucos-war-thunder',
		fr: 'hacks-triche-war-thunder',
		de: 'war-thunder-hacks',
		pt: 'hacks-cheats-war-thunder',
		it: 'hacks-trucchi-war-thunder',
		nl: 'war-thunder-hacks',
		pl: 'hacks-cheatow-war-thunder',
		ru: 'haksy-chity-war-thunder',
		tr: 'war-thunder-hile-hacks',
		ar: 'war-thunder-hacks',
		ja: 'war-thunder-hacks',
		ko: 'war-thunder-hacks',
		zh: 'war-thunder-hacks',
		hi: 'war-thunder-hacks',
		id: 'war-thunder-hacks',
		th: 'war-thunder-hacks',
		vi: 'war-thunder-hacks',
		uk: 'haksy-chity-war-thunder',
		cs: 'war-thunder-hacks',
		ro: 'hacks-cheats-war-thunder',
		sv: 'war-thunder-hacks',
	},
	'cheat-download': {
		en: 'war-thunder-cheat-download',
		es: 'descarga-trucos-war-thunder',
		fr: 'telechargement-triche-war-thunder',
		de: 'war-thunder-cheat-download',
		pt: 'download-cheats-war-thunder',
		it: 'download-trucchi-war-thunder',
		nl: 'war-thunder-cheat-download',
		pl: 'pobieranie-cheatow-war-thunder',
		ru: 'skachat-chity-war-thunder',
		tr: 'war-thunder-hile-indir',
		ar: 'war-thunder-cheat-download',
		ja: 'war-thunder-cheat-download',
		ko: 'war-thunder-cheat-download',
		zh: 'war-thunder-cheat-download',
		hi: 'war-thunder-cheat-download',
		id: 'war-thunder-cheat-download',
		th: 'war-thunder-cheat-download',
		vi: 'war-thunder-cheat-download',
		uk: 'zavantazhennya-chitiv-war-thunder',
		cs: 'war-thunder-cheat-download',
		ro: 'descarcare-cheats-war-thunder',
		sv: 'war-thunder-cheat-download',
	},
	'mod-menu': {
		en: 'war-thunder-mod-menu',
		es: 'menu-mod-trucos-war-thunder',
		fr: 'menu-mod-triche-war-thunder',
		de: 'war-thunder-mod-menu',
		pt: 'menu-mod-cheats-war-thunder',
		it: 'menu-mod-trucchi-war-thunder',
		nl: 'war-thunder-mod-menu',
		pl: 'menu-mod-cheatow-war-thunder',
		ru: 'mod-menu-chity-war-thunder',
		tr: 'war-thunder-mod-menu',
		ar: 'war-thunder-mod-menu',
		ja: 'war-thunder-mod-menu',
		ko: 'war-thunder-mod-menu',
		zh: 'war-thunder-mod-menu',
		hi: 'war-thunder-mod-menu',
		id: 'war-thunder-mod-menu',
		th: 'war-thunder-mod-menu',
		vi: 'war-thunder-mod-menu',
		uk: 'mod-menu-chity-war-thunder',
		cs: 'war-thunder-mod-menu',
		ro: 'meniu-mod-cheats-war-thunder',
		sv: 'war-thunder-mod-menu',
	},
	'soft-aim': {
		en: 'war-thunder-soft-aim',
		es: 'soft-aim-trucos-war-thunder',
		fr: 'soft-aim-triche-war-thunder',
		de: 'war-thunder-soft-aim',
		pt: 'soft-aim-cheats-war-thunder',
		it: 'soft-aim-trucchi-war-thunder',
		nl: 'war-thunder-soft-aim',
		pl: 'soft-aim-cheatow-war-thunder',
		ru: 'soft-aim-chity-war-thunder',
		tr: 'war-thunder-soft-aim',
		ar: 'war-thunder-soft-aim',
		ja: 'war-thunder-soft-aim',
		ko: 'war-thunder-soft-aim',
		zh: 'war-thunder-soft-aim',
		hi: 'war-thunder-soft-aim',
		id: 'war-thunder-soft-aim',
		th: 'war-thunder-soft-aim',
		vi: 'war-thunder-soft-aim',
		uk: 'soft-aim-chity-war-thunder',
		cs: 'war-thunder-soft-aim',
		ro: 'soft-aim-cheats-war-thunder',
		sv: 'war-thunder-soft-aim',
	},
	'best-cheats': {
		en: 'best-war-thunder-cheats',
		es: 'mejores-trucos-war-thunder',
		fr: 'meilleures-triches-war-thunder',
		de: 'beste-war-thunder-cheats',
		pt: 'melhores-cheats-war-thunder',
		it: 'migliori-trucchi-war-thunder',
		nl: 'beste-war-thunder-cheats',
		pl: 'najlepsze-cheats-war-thunder',
		ru: 'luchshie-chity-war-thunder',
		tr: 'en-iyi-war-thunder-hileleri',
		ar: 'best-war-thunder-cheats',
		ja: 'best-war-thunder-cheats',
		ko: 'best-war-thunder-cheats',
		zh: 'best-war-thunder-cheats',
		hi: 'best-war-thunder-cheats',
		id: 'best-war-thunder-cheats',
		th: 'best-war-thunder-cheats',
		vi: 'best-war-thunder-cheats',
		uk: 'naykrashchi-chity-war-thunder',
		cs: 'nejlepsi-war-thunder-cheats',
		ro: 'cele-mai-bune-cheats-war-thunder',
		sv: 'basta-war-thunder-cheats',
	},
	'aimbot-hack': {
		en: 'war-thunder-aimbot-hack',
		es: 'aimbot-hack-trucos-war-thunder',
		fr: 'aimbot-hack-triche-war-thunder',
		de: 'war-thunder-aimbot-hack',
		pt: 'aimbot-hack-cheats-war-thunder',
		it: 'aimbot-hack-trucchi-war-thunder',
		nl: 'war-thunder-aimbot-hack',
		pl: 'aimbot-hack-cheatow-war-thunder',
		ru: 'aimbot-hack-chity-war-thunder',
		tr: 'war-thunder-aimbot-hack',
		ar: 'war-thunder-aimbot-hack',
		ja: 'war-thunder-aimbot-hack',
		ko: 'war-thunder-aimbot-hack',
		zh: 'war-thunder-aimbot-hack',
		hi: 'war-thunder-aimbot-hack',
		id: 'war-thunder-aimbot-hack',
		th: 'war-thunder-aimbot-hack',
		vi: 'war-thunder-aimbot-hack',
		uk: 'aimbot-hack-chity-war-thunder',
		cs: 'war-thunder-aimbot-hack',
		ro: 'aimbot-hack-cheats-war-thunder',
		sv: 'war-thunder-aimbot-hack',
	},
	'esp-hack': {
		en: 'war-thunder-esp-hack',
		es: 'esp-hack-trucos-war-thunder',
		fr: 'esp-hack-triche-war-thunder',
		de: 'war-thunder-esp-hack',
		pt: 'esp-hack-cheats-war-thunder',
		it: 'esp-hack-trucchi-war-thunder',
		nl: 'war-thunder-esp-hack',
		pl: 'esp-hack-cheatow-war-thunder',
		ru: 'esp-hack-chity-war-thunder',
		tr: 'war-thunder-esp-hack',
		ar: 'war-thunder-esp-hack',
		ja: 'war-thunder-esp-hack',
		ko: 'war-thunder-esp-hack',
		zh: 'war-thunder-esp-hack',
		hi: 'war-thunder-esp-hack',
		id: 'war-thunder-esp-hack',
		th: 'war-thunder-esp-hack',
		vi: 'war-thunder-esp-hack',
		uk: 'esp-hack-chity-war-thunder',
		cs: 'war-thunder-esp-hack',
		ro: 'esp-hack-cheats-war-thunder',
		sv: 'war-thunder-esp-hack',
	},
	'unlock-all': {
		en: 'war-thunder-unlock-all',
		es: 'unlock-all-trucos-war-thunder',
		fr: 'unlock-all-triche-war-thunder',
		de: 'war-thunder-unlock-all',
		pt: 'unlock-all-cheats-war-thunder',
		it: 'unlock-all-trucchi-war-thunder',
		nl: 'war-thunder-unlock-all',
		pl: 'unlock-all-cheatow-war-thunder',
		ru: 'unlock-all-chity-war-thunder',
		tr: 'war-thunder-unlock-all',
		ar: 'war-thunder-unlock-all',
		ja: 'war-thunder-unlock-all',
		ko: 'war-thunder-unlock-all',
		zh: 'war-thunder-unlock-all',
		hi: 'war-thunder-unlock-all',
		id: 'war-thunder-unlock-all',
		th: 'war-thunder-unlock-all',
		vi: 'war-thunder-unlock-all',
		uk: 'unlock-all-chity-war-thunder',
		cs: 'war-thunder-unlock-all',
		ro: 'unlock-all-cheats-war-thunder',
		sv: 'war-thunder-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			return getLocalizedPath(pageId, locale);
		}
	}
	return href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return new URL(getLocalizedPath(pageId, locale), siteConfig.url).href;
}

/**
 * Canonical path for SEO — always the English official URL.
 * Locale UI routes (`/{lang}/…`) keep working for UX but consolidate ranking to English.
 */
export function getCanonicalPath(pageId: PageId, _locale: LocaleCode = defaultLocale): string {
	return getLocalizedPath(pageId, defaultLocale);
}

export function absoluteCanonicalUrl(pageId: PageId): string {
	return absoluteLocalizedUrl(pageId, defaultLocale);
}

/**
 * Hreflang cluster: English + x-default only.
 * Non-English UI locales are thin convenience translations — do not advertise them
 * as equal language alternates (hreflang spam / thin-content risk).
 */
export function getHreflangAlternates(pageId: PageId) {
	const enHref = absoluteCanonicalUrl(pageId);
	const enMeta = locales.find((l) => l.code === defaultLocale)!;
	return [
		{ hreflang: enMeta.hreflang, href: enHref },
		{ hreflang: 'x-default' as const, href: enHref },
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
		{ label: 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('war-thunder-aimbot', locale), pageId: 'war-thunder-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('war-thunder-esp', locale), pageId: 'war-thunder-esp' },
		{ label: 'Blog', href: '/blog/' },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
