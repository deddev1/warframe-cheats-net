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
	| 'overwatch-esp'
	| 'overwatch-aimbot'
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
	'overwatch-esp': '/overwatch-esp/',
	'overwatch-aimbot': '/overwatch-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/overwatch-hacks/',
	wallhack: '/overwatch-wallhack/',
	radar: '/overwatch-radar/',
	'eac-bypass': '/overwatch-hacks/',
	'cheats-2026': '/overwatch-hacks/',
	hacks: '/overwatch-hacks/',
	'cheat-download': '/pricing/',
	'mod-menu': '/features/',
	'soft-aim': '/overwatch-aimbot/',
	'best-cheats': '/overwatch-hacks/',
	'aimbot-hack': '/overwatch-aimbot/',
	'esp-hack': '/overwatch-esp/',
	'unlock-all': '/overwatch-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Core English pages for sitemap.xml — focused overwatch-hacks URLs only.
 * Thin keyword-duplicate landings redirect to these canonical pages.
 */
export const sitemapPageIds: PageId[] = [
	'home',
	'hacks',
	'overwatch-esp',
	'overwatch-aimbot',
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
	'overwatch-esp': {
		en: 'overwatch-esp',
		es: 'trucos-overwatch-esp',
		fr: 'triche-overwatch-esp',
		de: 'overwatch-esp-wallhack',
		pt: 'cheats-overwatch-esp',
		it: 'trucchi-overwatch-esp',
		nl: 'overwatch-esp-wallhack',
		pl: 'cheaty-overwatch-esp',
		ru: 'overwatch-esp-chity',
		tr: 'overwatch-esp-hile',
		ar: 'overwatch-esp-wallhack',
		ja: 'overwatch-esp-wallhack',
		ko: 'overwatch-esp-wallhack',
		zh: 'overwatch-esp-wallhack',
		hi: 'overwatch-esp-wallhack',
		id: 'overwatch-esp-wallhack',
		th: 'overwatch-esp-wallhack',
		vi: 'overwatch-esp-wallhack',
		uk: 'overwatch-esp-chity',
		cs: 'overwatch-esp-wallhack',
		ro: 'overwatch-esp-wallhack',
		sv: 'overwatch-esp-wallhack',
	},
	'overwatch-aimbot': {
		en: 'overwatch-aimbot',
		es: 'trucos-overwatch-aimbot',
		fr: 'triche-overwatch-aimbot',
		de: 'overwatch-aimbot',
		pt: 'cheats-overwatch-aimbot',
		it: 'trucchi-overwatch-aimbot',
		nl: 'overwatch-aimbot',
		pl: 'cheaty-overwatch-aimbot',
		ru: 'overwatch-aimbot-chity',
		tr: 'overwatch-aimbot-hile',
		ar: 'overwatch-aimbot',
		ja: 'overwatch-aimbot',
		ko: 'overwatch-aimbot',
		zh: 'overwatch-aimbot',
		hi: 'overwatch-aimbot',
		id: 'overwatch-aimbot',
		th: 'overwatch-aimbot',
		vi: 'overwatch-aimbot',
		uk: 'overwatch-aimbot-chity',
		cs: 'overwatch-aimbot',
		ro: 'overwatch-aimbot',
		sv: 'overwatch-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-overwatch',
		fr: 'fonctionnalites-triche-overwatch',
		de: 'overwatch-cheats-funktionen',
		pt: 'recursos-cheats-overwatch',
		it: 'funzioni-trucchi-overwatch',
		nl: 'overwatch-cheats-functies',
		pl: 'funkcje-cheatow-overwatch',
		ru: 'funkcii-chitov-overwatch',
		tr: 'overwatch-hile-ozellikleri',
		ar: 'overwatch-cheats-features',
		ja: 'overwatch-cheats-features',
		ko: 'overwatch-cheats-features',
		zh: 'overwatch-cheats-features',
		hi: 'overwatch-cheats-features',
		id: 'overwatch-cheats-features',
		th: 'overwatch-cheats-features',
		vi: 'overwatch-cheats-features',
		uk: 'funkcii-chitiv-overwatch',
		cs: 'overwatch-cheats-funkce',
		ro: 'functii-cheats-overwatch',
		sv: 'overwatch-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-overwatch',
		fr: 'prix-triche-overwatch',
		de: 'overwatch-cheats-preise',
		pt: 'precos-cheats-overwatch',
		it: 'prezzi-trucchi-overwatch',
		nl: 'overwatch-cheats-prijzen',
		pl: 'ceny-cheatow-overwatch',
		ru: 'ceny-chitov-overwatch',
		tr: 'overwatch-hile-fiyatlari',
		ar: 'overwatch-cheats-pricing',
		ja: 'overwatch-cheats-pricing',
		ko: 'overwatch-cheats-pricing',
		zh: 'overwatch-cheats-pricing',
		hi: 'overwatch-cheats-pricing',
		id: 'overwatch-cheats-pricing',
		th: 'overwatch-cheats-pricing',
		vi: 'overwatch-cheats-pricing',
		uk: 'ciny-chitiv-overwatch',
		cs: 'overwatch-cheats-ceny',
		ro: 'preturi-cheats-overwatch',
		sv: 'overwatch-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-overwatch',
		fr: 'installation-triche-overwatch',
		de: 'overwatch-cheats-installation',
		pt: 'instalacao-cheats-overwatch',
		it: 'installazione-trucchi-overwatch',
		nl: 'overwatch-cheats-installatie',
		pl: 'instalacja-cheatow-overwatch',
		ru: 'ustanovka-chitov-overwatch',
		tr: 'overwatch-hile-kurulum',
		ar: 'overwatch-cheats-setup',
		ja: 'overwatch-cheats-setup',
		ko: 'overwatch-cheats-setup',
		zh: 'overwatch-cheats-setup',
		hi: 'overwatch-cheats-setup',
		id: 'overwatch-cheats-setup',
		th: 'overwatch-cheats-setup',
		vi: 'overwatch-cheats-setup',
		uk: 'vstanovka-chitiv-overwatch',
		cs: 'overwatch-cheats-instalace',
		ro: 'instalare-cheats-overwatch',
		sv: 'overwatch-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-overwatch',
		fr: 'mises-a-jour-triche-overwatch',
		de: 'overwatch-cheats-updates',
		pt: 'atualizacoes-cheats-overwatch',
		it: 'aggiornamenti-trucchi-overwatch',
		nl: 'overwatch-cheats-updates',
		pl: 'aktualizacje-cheatow-overwatch',
		ru: 'obnovleniya-chitov-overwatch',
		tr: 'overwatch-hile-guncellemeleri',
		ar: 'overwatch-cheats-updates',
		ja: 'overwatch-cheats-updates',
		ko: 'overwatch-cheats-updates',
		zh: 'overwatch-cheats-updates',
		hi: 'overwatch-cheats-updates',
		id: 'overwatch-cheats-updates',
		th: 'overwatch-cheats-updates',
		vi: 'overwatch-cheats-updates',
		uk: 'onovlennya-chitiv-overwatch',
		cs: 'overwatch-cheats-aktualizace',
		ro: 'actualizari-cheats-overwatch',
		sv: 'overwatch-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-overwatch',
		fr: 'faq-triche-overwatch',
		de: 'overwatch-cheats-faq',
		pt: 'faq-cheats-overwatch',
		it: 'faq-trucchi-overwatch',
		nl: 'overwatch-cheats-faq',
		pl: 'faq-cheatow-overwatch',
		ru: 'faq-chitov-overwatch',
		tr: 'overwatch-hile-sss',
		ar: 'overwatch-cheats-faq',
		ja: 'overwatch-cheats-faq',
		ko: 'overwatch-cheats-faq',
		zh: 'overwatch-cheats-faq',
		hi: 'overwatch-cheats-faq',
		id: 'overwatch-cheats-faq',
		th: 'overwatch-cheats-faq',
		vi: 'overwatch-cheats-faq',
		uk: 'faq-chitiv-overwatch',
		cs: 'overwatch-cheats-faq',
		ro: 'faq-cheats-overwatch',
		sv: 'overwatch-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-overwatch',
		fr: 'support-triche-overwatch',
		de: 'overwatch-cheats-support',
		pt: 'suporte-cheats-overwatch',
		it: 'supporto-trucchi-overwatch',
		nl: 'overwatch-cheats-support',
		pl: 'wsparcie-cheatow-overwatch',
		ru: 'podderzhka-chitov-overwatch',
		tr: 'overwatch-hile-destek',
		ar: 'overwatch-cheats-support',
		ja: 'overwatch-cheats-support',
		ko: 'overwatch-cheats-support',
		zh: 'overwatch-cheats-support',
		hi: 'overwatch-cheats-support',
		id: 'overwatch-cheats-support',
		th: 'overwatch-cheats-support',
		vi: 'overwatch-cheats-support',
		uk: 'pidtrymka-chitiv-overwatch',
		cs: 'overwatch-cheats-podpora',
		ro: 'suport-cheats-overwatch',
		sv: 'overwatch-cheats-support',
	},
	undetected: {
		en: 'undetected-overwatch-cheats',
		es: 'trucos-overwatch-indetectables',
		fr: 'triche-overwatch-indetectable',
		de: 'unentdeckte-overwatch-cheats',
		pt: 'cheats-overwatch-indetectaveis',
		it: 'trucchi-overwatch-indetectabili',
		nl: 'undetected-overwatch-cheats',
		pl: 'niewykrywalne-cheats-overwatch',
		ru: 'nedecektiruemye-chity-overwatch',
		tr: 'tespit-edilemeyen-overwatch-hileleri',
		ar: 'undetected-overwatch-cheats',
		ja: 'undetected-overwatch-cheats',
		ko: 'undetected-overwatch-cheats',
		zh: 'undetected-overwatch-cheats',
		hi: 'undetected-overwatch-cheats',
		id: 'undetected-overwatch-cheats',
		th: 'undetected-overwatch-cheats',
		vi: 'undetected-overwatch-cheats',
		uk: 'nedecektovani-chity-overwatch',
		cs: 'undetected-overwatch-cheats',
		ro: 'cheats-overwatch-nedetectabile',
		sv: 'undetected-overwatch-cheats',
	},
	wallhack: {
		en: 'overwatch-wallhack',
		es: 'wallhack-trucos-overwatch',
		fr: 'wallhack-triche-overwatch',
		de: 'overwatch-wallhack',
		pt: 'wallhack-cheats-overwatch',
		it: 'wallhack-trucchi-overwatch',
		nl: 'overwatch-wallhack',
		pl: 'wallhack-cheatow-overwatch',
		ru: 'wallhack-chity-overwatch',
		tr: 'overwatch-wallhack-hile',
		ar: 'overwatch-wallhack',
		ja: 'overwatch-wallhack',
		ko: 'overwatch-wallhack',
		zh: 'overwatch-wallhack',
		hi: 'overwatch-wallhack',
		id: 'overwatch-wallhack',
		th: 'overwatch-wallhack',
		vi: 'overwatch-wallhack',
		uk: 'wallhack-chity-overwatch',
		cs: 'overwatch-wallhack',
		ro: 'wallhack-cheats-overwatch',
		sv: 'overwatch-wallhack',
	},
	radar: {
		en: 'overwatch-radar-hack',
		es: 'radar-hack-trucos-overwatch',
		fr: 'radar-hack-triche-overwatch',
		de: 'overwatch-radar-hack',
		pt: 'radar-hack-cheats-overwatch',
		it: 'radar-hack-trucchi-overwatch',
		nl: 'overwatch-radar-hack',
		pl: 'radar-hack-cheatow-overwatch',
		ru: 'radar-hack-chity-overwatch',
		tr: 'overwatch-radar-hack',
		ar: 'overwatch-radar-hack',
		ja: 'overwatch-radar-hack',
		ko: 'overwatch-radar-hack',
		zh: 'overwatch-radar-hack',
		hi: 'overwatch-radar-hack',
		id: 'overwatch-radar-hack',
		th: 'overwatch-radar-hack',
		vi: 'overwatch-radar-hack',
		uk: 'radar-hack-chity-overwatch',
		cs: 'overwatch-radar-hack',
		ro: 'radar-hack-cheats-overwatch',
		sv: 'overwatch-radar-hack',
	},
	'eac-bypass': {
		en: 'eac-bypass-overwatch',
		es: 'eac-bypass-overwatch-trucos',
		fr: 'eac-bypass-overwatch-triche',
		de: 'eac-bypass-overwatch',
		pt: 'eac-bypass-overwatch-cheats',
		it: 'eac-bypass-overwatch-trucchi',
		nl: 'eac-bypass-overwatch',
		pl: 'eac-bypass-overwatch-cheatow',
		ru: 'eac-bypass-overwatch-chity',
		tr: 'eac-bypass-overwatch',
		ar: 'eac-bypass-overwatch',
		ja: 'eac-bypass-overwatch',
		ko: 'eac-bypass-overwatch',
		zh: 'eac-bypass-overwatch',
		hi: 'eac-bypass-overwatch',
		id: 'eac-bypass-overwatch',
		th: 'eac-bypass-overwatch',
		vi: 'eac-bypass-overwatch',
		uk: 'eac-bypass-overwatch-chity',
		cs: 'eac-bypass-overwatch',
		ro: 'eac-bypass-overwatch-cheats',
		sv: 'eac-bypass-overwatch',
	},
	'cheats-2026': {
		en: 'overwatch-cheats-2026',
		es: 'trucos-overwatch-2026',
		fr: 'triche-overwatch-2026',
		de: 'overwatch-cheats-2026',
		pt: 'cheats-overwatch-2026',
		it: 'trucchi-overwatch-2026',
		nl: 'overwatch-cheats-2026',
		pl: 'cheaty-overwatch-2026',
		ru: 'chity-overwatch-2026',
		tr: 'overwatch-hileleri-2026',
		ar: 'overwatch-cheats-2026',
		ja: 'overwatch-cheats-2026',
		ko: 'overwatch-cheats-2026',
		zh: 'overwatch-cheats-2026',
		hi: 'overwatch-cheats-2026',
		id: 'overwatch-cheats-2026',
		th: 'overwatch-cheats-2026',
		vi: 'overwatch-cheats-2026',
		uk: 'chity-overwatch-2026',
		cs: 'overwatch-cheats-2026',
		ro: 'cheats-overwatch-2026',
		sv: 'overwatch-cheats-2026',
	},
	hacks: {
		en: 'overwatch-hacks',
		es: 'hacks-trucos-overwatch',
		fr: 'hacks-triche-overwatch',
		de: 'overwatch-hacks',
		pt: 'hacks-cheats-overwatch',
		it: 'hacks-trucchi-overwatch',
		nl: 'overwatch-hacks',
		pl: 'hacks-cheatow-overwatch',
		ru: 'haksy-chity-overwatch',
		tr: 'overwatch-hile-hacks',
		ar: 'overwatch-hacks',
		ja: 'overwatch-hacks',
		ko: 'overwatch-hacks',
		zh: 'overwatch-hacks',
		hi: 'overwatch-hacks',
		id: 'overwatch-hacks',
		th: 'overwatch-hacks',
		vi: 'overwatch-hacks',
		uk: 'haksy-chity-overwatch',
		cs: 'overwatch-hacks',
		ro: 'hacks-cheats-overwatch',
		sv: 'overwatch-hacks',
	},
	'cheat-download': {
		en: 'overwatch-cheat-download',
		es: 'descarga-trucos-overwatch',
		fr: 'telechargement-triche-overwatch',
		de: 'overwatch-cheat-download',
		pt: 'download-cheats-overwatch',
		it: 'download-trucchi-overwatch',
		nl: 'overwatch-cheat-download',
		pl: 'pobieranie-cheatow-overwatch',
		ru: 'skachat-chity-overwatch',
		tr: 'overwatch-hile-indir',
		ar: 'overwatch-cheat-download',
		ja: 'overwatch-cheat-download',
		ko: 'overwatch-cheat-download',
		zh: 'overwatch-cheat-download',
		hi: 'overwatch-cheat-download',
		id: 'overwatch-cheat-download',
		th: 'overwatch-cheat-download',
		vi: 'overwatch-cheat-download',
		uk: 'zavantazhennya-chitiv-overwatch',
		cs: 'overwatch-cheat-download',
		ro: 'descarcare-cheats-overwatch',
		sv: 'overwatch-cheat-download',
	},
	'mod-menu': {
		en: 'overwatch-mod-menu',
		es: 'menu-mod-trucos-overwatch',
		fr: 'menu-mod-triche-overwatch',
		de: 'overwatch-mod-menu',
		pt: 'menu-mod-cheats-overwatch',
		it: 'menu-mod-trucchi-overwatch',
		nl: 'overwatch-mod-menu',
		pl: 'menu-mod-cheatow-overwatch',
		ru: 'mod-menu-chity-overwatch',
		tr: 'overwatch-mod-menu',
		ar: 'overwatch-mod-menu',
		ja: 'overwatch-mod-menu',
		ko: 'overwatch-mod-menu',
		zh: 'overwatch-mod-menu',
		hi: 'overwatch-mod-menu',
		id: 'overwatch-mod-menu',
		th: 'overwatch-mod-menu',
		vi: 'overwatch-mod-menu',
		uk: 'mod-menu-chity-overwatch',
		cs: 'overwatch-mod-menu',
		ro: 'meniu-mod-cheats-overwatch',
		sv: 'overwatch-mod-menu',
	},
	'soft-aim': {
		en: 'overwatch-soft-aim',
		es: 'soft-aim-trucos-overwatch',
		fr: 'soft-aim-triche-overwatch',
		de: 'overwatch-soft-aim',
		pt: 'soft-aim-cheats-overwatch',
		it: 'soft-aim-trucchi-overwatch',
		nl: 'overwatch-soft-aim',
		pl: 'soft-aim-cheatow-overwatch',
		ru: 'soft-aim-chity-overwatch',
		tr: 'overwatch-soft-aim',
		ar: 'overwatch-soft-aim',
		ja: 'overwatch-soft-aim',
		ko: 'overwatch-soft-aim',
		zh: 'overwatch-soft-aim',
		hi: 'overwatch-soft-aim',
		id: 'overwatch-soft-aim',
		th: 'overwatch-soft-aim',
		vi: 'overwatch-soft-aim',
		uk: 'soft-aim-chity-overwatch',
		cs: 'overwatch-soft-aim',
		ro: 'soft-aim-cheats-overwatch',
		sv: 'overwatch-soft-aim',
	},
	'best-cheats': {
		en: 'best-overwatch-cheats',
		es: 'mejores-trucos-overwatch',
		fr: 'meilleures-triches-overwatch',
		de: 'beste-overwatch-cheats',
		pt: 'melhores-cheats-overwatch',
		it: 'migliori-trucchi-overwatch',
		nl: 'beste-overwatch-cheats',
		pl: 'najlepsze-cheats-overwatch',
		ru: 'luchshie-chity-overwatch',
		tr: 'en-iyi-overwatch-hileleri',
		ar: 'best-overwatch-cheats',
		ja: 'best-overwatch-cheats',
		ko: 'best-overwatch-cheats',
		zh: 'best-overwatch-cheats',
		hi: 'best-overwatch-cheats',
		id: 'best-overwatch-cheats',
		th: 'best-overwatch-cheats',
		vi: 'best-overwatch-cheats',
		uk: 'naykrashchi-chity-overwatch',
		cs: 'nejlepsi-overwatch-cheats',
		ro: 'cele-mai-bune-cheats-overwatch',
		sv: 'basta-overwatch-cheats',
	},
	'aimbot-hack': {
		en: 'overwatch-aimbot-hack',
		es: 'aimbot-hack-trucos-overwatch',
		fr: 'aimbot-hack-triche-overwatch',
		de: 'overwatch-aimbot-hack',
		pt: 'aimbot-hack-cheats-overwatch',
		it: 'aimbot-hack-trucchi-overwatch',
		nl: 'overwatch-aimbot-hack',
		pl: 'aimbot-hack-cheatow-overwatch',
		ru: 'aimbot-hack-chity-overwatch',
		tr: 'overwatch-aimbot-hack',
		ar: 'overwatch-aimbot-hack',
		ja: 'overwatch-aimbot-hack',
		ko: 'overwatch-aimbot-hack',
		zh: 'overwatch-aimbot-hack',
		hi: 'overwatch-aimbot-hack',
		id: 'overwatch-aimbot-hack',
		th: 'overwatch-aimbot-hack',
		vi: 'overwatch-aimbot-hack',
		uk: 'aimbot-hack-chity-overwatch',
		cs: 'overwatch-aimbot-hack',
		ro: 'aimbot-hack-cheats-overwatch',
		sv: 'overwatch-aimbot-hack',
	},
	'esp-hack': {
		en: 'overwatch-esp-hack',
		es: 'esp-hack-trucos-overwatch',
		fr: 'esp-hack-triche-overwatch',
		de: 'overwatch-esp-hack',
		pt: 'esp-hack-cheats-overwatch',
		it: 'esp-hack-trucchi-overwatch',
		nl: 'overwatch-esp-hack',
		pl: 'esp-hack-cheatow-overwatch',
		ru: 'esp-hack-chity-overwatch',
		tr: 'overwatch-esp-hack',
		ar: 'overwatch-esp-hack',
		ja: 'overwatch-esp-hack',
		ko: 'overwatch-esp-hack',
		zh: 'overwatch-esp-hack',
		hi: 'overwatch-esp-hack',
		id: 'overwatch-esp-hack',
		th: 'overwatch-esp-hack',
		vi: 'overwatch-esp-hack',
		uk: 'esp-hack-chity-overwatch',
		cs: 'overwatch-esp-hack',
		ro: 'esp-hack-cheats-overwatch',
		sv: 'overwatch-esp-hack',
	},
	'unlock-all': {
		en: 'overwatch-unlock-all',
		es: 'unlock-all-trucos-overwatch',
		fr: 'unlock-all-triche-overwatch',
		de: 'overwatch-unlock-all',
		pt: 'unlock-all-cheats-overwatch',
		it: 'unlock-all-trucchi-overwatch',
		nl: 'overwatch-unlock-all',
		pl: 'unlock-all-cheatow-overwatch',
		ru: 'unlock-all-chity-overwatch',
		tr: 'overwatch-unlock-all',
		ar: 'overwatch-unlock-all',
		ja: 'overwatch-unlock-all',
		ko: 'overwatch-unlock-all',
		zh: 'overwatch-unlock-all',
		hi: 'overwatch-unlock-all',
		id: 'overwatch-unlock-all',
		th: 'overwatch-unlock-all',
		vi: 'overwatch-unlock-all',
		uk: 'unlock-all-chity-overwatch',
		cs: 'overwatch-unlock-all',
		ro: 'unlock-all-cheats-overwatch',
		sv: 'overwatch-unlock-all',
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
		{ label: labels.aimbot, href: getLocalizedPath('overwatch-aimbot', locale), pageId: 'overwatch-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('overwatch-esp', locale), pageId: 'overwatch-esp' },
		{ label: 'Blog', href: '/blog/' },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
