/**
 * Homepage sections, footer labels, explore links, and gallery chrome — all 22 locales.
 * Merged into ui strings during i18n generation.
 */

const explore = (o) => ({
	guide: o.guide,
	esp: o.esp,
	aimbot: o.aimbot,
	wallhack: o.wallhack,
	radar: o.radar,
	features: o.features,
	pricing: o.pricing,
	setup: o.setup,
	updates: o.updates,
	faq: o.faq,
	reviews: o.reviews,
	blog: o.blog,
});

export const siteSections = {
	en: {
		navExtras: { cheats: 'Cheats', reviews: 'Reviews', guides: 'Guides' },
		sections: {
			homeFaq: {
				title: 'Frequently asked questions',
				intro: 'Quick answers about setup, features, Steel Path and open world use, patch-day status, and support.',
				seeAll: 'See all FAQ questions',
				readGuides: 'Read Warframe guides',
			},
			homeExplore: {
				title: 'Explore Warframe Cheats',
				intro: 'Compare guides, feature pages, pricing, setup help, reviews, and the blog before you buy.',
				stillDeciding: 'Still deciding? Read the full',
				orBrowse: 'or browse',
				faqLink: 'FAQ',
				reviewsLink: 'customer reviews',
			},
			homeGuides: {
				title: 'Warframe guides',
				intro: 'Game guides on Steel Path, open world, factions, and patch notes — linked to official Warframe resources.',
				browseAll: 'Browse all guides',
			},
			footer: { guides: 'Guides', support: 'Support', privacy: 'Privacy', terms: 'Terms', refund: 'Refund' },
			pricing: { easyToUse: 'Easy to use', undetected: 'Undetected', support24: '24/7 support' },
			gallery: { subtitle: 'In-game ESP, aimbot, and radar screenshots. Click any image to open that page.' },
			navbar: { openMenu: 'Open menu', closeMenu: 'Close menu' },
			exploreLinks: explore({
				guide: 'Warframe Cheats guide', esp: 'Warframe ESP', aimbot: 'Warframe Aimbot', wallhack: 'Warframe wallhack',
				radar: 'Warframe radar', features: 'Features', pricing: 'Pricing', setup: 'Setup', updates: 'Updates',
				faq: 'FAQ', reviews: 'Reviews', blog: 'Blog',
			}),
		},
	},
	uk: {
		navExtras: { cheats: 'Чіти', reviews: 'Відгуки', guides: 'Гайди' },
		sections: {
			homeFaq: {
				title: 'Часті запитання',
				intro: 'Швидкі відповіді про налаштування, функції, Steel Path, відкритий світ, оновлення після патчів і підтримку.',
				seeAll: 'Переглянути всі питання',
				readGuides: 'Читати гайди Warframe',
			},
			homeExplore: {
				title: 'Дослідити Warframe Cheats',
				intro: 'Порівняйте гайди, функції, ціни, інструкцію з налаштування, відгуки та блог перед покупкою.',
				stillDeciding: 'Ще вагаєтеся? Прочитайте повний',
				orBrowse: 'або перегляньте',
				faqLink: 'FAQ',
				reviewsLink: 'відгуки клієнтів',
			},
			homeGuides: {
				title: 'Гайди Warframe',
				intro: 'Ігрові гайди про Steel Path, відкритий світ, фракції та патчноути — з посиланнями на офіційні ресурси Warframe.',
				browseAll: 'Переглянути всі гайди',
			},
			footer: { guides: 'Гайди', support: 'Підтримка', privacy: 'Конфіденційність', terms: 'Умови', refund: 'Повернення' },
			pricing: { easyToUse: 'Простий у використанні', undetected: 'Невиявлений', support24: 'Підтримка 24/7' },
			gallery: { subtitle: 'Скріншоти ESP, aimbot і radar у грі. Натисніть на зображення, щоб відкрити сторінку.' },
			navbar: { openMenu: 'Відкрити меню', closeMenu: 'Закрити меню' },
			exploreLinks: explore({
				guide: 'Гайд Warframe Cheats', esp: 'Warframe ESP', aimbot: 'Warframe Aimbot', wallhack: 'Warframe wallhack',
				radar: 'Warframe radar', features: 'Функції', pricing: 'Ціни', setup: 'Встановлення', updates: 'Оновлення',
				faq: 'FAQ', reviews: 'Відгуки', blog: 'Блог',
			}),
		},
	},
	fr: {
		navExtras: { cheats: 'Astuces', reviews: 'Avis', guides: 'Guides' },
		sections: {
			homeFaq: {
				title: 'Questions fréquentes',
				intro: 'Réponses rapides sur l\'installation, les fonctions, Steel Path, le monde ouvert, les mises à jour et le support.',
				seeAll: 'Voir toutes les questions',
				readGuides: 'Lire les guides Warframe',
			},
			homeExplore: {
				title: 'Explorer Warframe Cheats',
				intro: 'Comparez guides, fonctions, tarifs, installation, avis et blog avant d\'acheter.',
				stillDeciding: 'Vous hésitez encore ? Lisez la',
				orBrowse: 'ou parcourez les',
				faqLink: 'FAQ',
				reviewsLink: 'avis clients',
			},
			homeGuides: {
				title: 'Guides Warframe',
				intro: 'Guides Steel Path, monde ouvert, factions et patch notes — liens vers les ressources officielles Warframe.',
				browseAll: 'Voir tous les guides',
			},
			footer: { guides: 'Guides', support: 'Support', privacy: 'Confidentialité', terms: 'Conditions', refund: 'Remboursement' },
			pricing: { easyToUse: 'Facile à utiliser', undetected: 'Indétectable', support24: 'Support 24/7' },
			gallery: { subtitle: 'Captures ESP, aimbot et radar en jeu. Cliquez sur une image pour ouvrir la page.' },
			navbar: { openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu' },
			exploreLinks: explore({
				guide: 'Guide Warframe Cheats', esp: 'Warframe ESP', aimbot: 'Warframe Aimbot', wallhack: 'Warframe wallhack',
				radar: 'Warframe radar', features: 'Fonctions', pricing: 'Tarifs', setup: 'Installation', updates: 'Mises à jour',
				faq: 'FAQ', reviews: 'Avis', blog: 'Blog',
			}),
		},
	},
	es: {
		navExtras: { cheats: 'Trucos', reviews: 'Reseñas', guides: 'Guías' },
		sections: {
			homeFaq: {
				title: 'Preguntas frecuentes',
				intro: 'Respuestas rápidas sobre instalación, funciones, Steel Path, mundo abierto, actualizaciones y soporte.',
				seeAll: 'Ver todas las preguntas',
				readGuides: 'Leer guías de Warframe',
			},
			homeExplore: {
				title: 'Explorar Warframe Cheats',
				intro: 'Compara guías, funciones, precios, instalación, reseñas y blog antes de comprar.',
				stillDeciding: '¿Aún no decides? Lee las',
				orBrowse: 'o consulta las',
				faqLink: 'FAQ',
				reviewsLink: 'reseñas de clientes',
			},
			homeGuides: {
				title: 'Guías de Warframe',
				intro: 'Guías de Steel Path, mundo abierto, facciones y parches — enlaces a recursos oficiales de Warframe.',
				browseAll: 'Ver todas las guías',
			},
			footer: { guides: 'Guías', support: 'Soporte', privacy: 'Privacidad', terms: 'Términos', refund: 'Reembolso' },
			pricing: { easyToUse: 'Fácil de usar', undetected: 'Indetectable', support24: 'Soporte 24/7' },
			gallery: { subtitle: 'Capturas de ESP, aimbot y radar en el juego. Haz clic en una imagen para abrir esa página.' },
			navbar: { openMenu: 'Abrir menú', closeMenu: 'Cerrar menú' },
			exploreLinks: explore({
				guide: 'Guía Warframe Cheats', esp: 'Warframe ESP', aimbot: 'Warframe Aimbot', wallhack: 'Warframe wallhack',
				radar: 'Warframe radar', features: 'Funciones', pricing: 'Precios', setup: 'Instalación', updates: 'Actualizaciones',
				faq: 'FAQ', reviews: 'Reseñas', blog: 'Blog',
			}),
		},
	},
	de: {
		navExtras: { cheats: 'Cheats', reviews: 'Bewertungen', guides: 'Guides' },
		sections: {
			homeFaq: {
				title: 'Häufig gestellte Fragen',
				intro: 'Kurze Antworten zu Setup, Features, Steel Path, Open World, Patch-Updates und Support.',
				seeAll: 'Alle FAQ-Fragen ansehen',
				readGuides: 'Warframe-Guides lesen',
			},
			homeExplore: {
				title: 'Warframe Cheats entdecken',
				intro: 'Vergleiche Guides, Features, Preise, Setup, Bewertungen und Blog vor dem Kauf.',
				stillDeciding: 'Noch unsicher? Lies die vollständige',
				orBrowse: 'oder lies',
				faqLink: 'FAQ',
				reviewsLink: 'Kundenbewertungen',
			},
			homeGuides: {
				title: 'Warframe-Guides',
				intro: 'Guides zu Steel Path, Open World, Fraktionen und Patch Notes — mit offiziellen Warframe-Ressourcen.',
				browseAll: 'Alle Guides ansehen',
			},
			footer: { guides: 'Guides', support: 'Support', privacy: 'Datenschutz', terms: 'AGB', refund: 'Rückerstattung' },
			pricing: { easyToUse: 'Einfach zu bedienen', undetected: 'Unentdeckt', support24: '24/7 Support' },
			gallery: { subtitle: 'ESP-, Aimbot- und Radar-Screenshots im Spiel. Klicke auf ein Bild, um die Seite zu öffnen.' },
			navbar: { openMenu: 'Menü öffnen', closeMenu: 'Menü schließen' },
			exploreLinks: explore({
				guide: 'Warframe Cheats Guide', esp: 'Warframe ESP', aimbot: 'Warframe Aimbot', wallhack: 'Warframe Wallhack',
				radar: 'Warframe Radar', features: 'Features', pricing: 'Preise', setup: 'Setup', updates: 'Updates',
				faq: 'FAQ', reviews: 'Bewertungen', blog: 'Blog',
			}),
		},
	},
};

const OFFICIAL_NOTE = {
	en: 'Choose your language — the whole site updates instantly.',
	uk: 'Оберіть мову — весь сайт перемикається миттєво.',
	fr: 'Choisissez votre langue — tout le site change immédiatement.',
	es: 'Elige tu idioma: todo el sitio cambia al instante.',
	de: 'Wähle deine Sprache — die gesamte Website wechselt sofort.',
	pt: 'Escolha seu idioma — todo o site muda na hora.',
	it: 'Scegli la lingua — tutto il sito si aggiorna subito.',
	pl: 'Wybierz język — cała strona zmienia się natychmiast.',
	ru: 'Выберите язык — весь сайт переключается мгновенно.',
};

/** Resolve full site sections for any locale (hand-written or fallback). */
export function getSiteSections(locale) {
	if (siteSections[locale]) return siteSections[locale];
	// Romance/Germanic clusters reuse closest hand translation
	const cluster = { pt: 'es', it: 'es', nl: 'de', pl: 'de', cs: 'de', sv: 'de', ro: 'es', ru: 'uk', tr: 'de' }[locale];
	if (cluster && siteSections[cluster]) return siteSections[cluster];
	return siteSections.en;
}

/** Merge site sections into a locale UI object. */
export function mergeSiteSectionsIntoUi(locale, ui) {
	const extra = getSiteSections(locale);
	return {
		...ui,
		nav: { ...ui.nav, ...extra.navExtras },
		sections: extra.sections,
		common: {
			...ui.common,
			officialLanguageNote: OFFICIAL_NOTE[locale] ?? OFFICIAL_NOTE.en,
		},
	};
}
