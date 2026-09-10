import { localizedPath } from './localized-paths.mjs';

/** Build localized homepage FAQ items for a locale. */
export function buildHomeFaqs(locale) {
	const p = (pageId) => localizedPath(locale, pageId);

	const copy = {
		en: {
			catStart: 'Getting started',
			catFeatures: 'Features & gameplay',
			catUpdates: 'Updates & support',
			q1: 'What is Warframe Cheats?',
			a1: `Warframe Cheats is a maintained Windows PC package with <a href="${p('warframe-esp')}">ESP</a>, <a href="${p('wallhack')}">wallhack</a>, <a href="${p('radar')}">radar</a>, and <a href="${p('warframe-aimbot')}">aimbot</a>. One license covers the full feature set plus <a href="${p('setup')}">setup</a> help.`,
			q2: 'What is included in one license?',
			a2: `Enemy ESP boxes, health markers, 2D radar overlays, and configurable aim assist. See <a href="${p('features')}">Features</a> and <a href="${p('pricing')}">Pricing</a>.`,
			q3: 'Does this work for Steel Path, Sorties, and open world?',
			a3: `Yes. ESP and radar help you read enemy positions in Steel Path, Sorties, and open world tilesets. Aim assist covers rifle, shotgun, and sniper profiles.`,
			q4: 'Is Warframe Cheats permanently undetected?',
			a4: `No tool can promise permanent undetected status. We rebuild after anti-cheat updates — check <a href="${p('updates')}">Updates</a> before you load in.`,
			q5: 'How do I contact support?',
			a5: `Use the <a href="${p('support')}">Support page</a> or email support@warframecheats.net with your order ID. Refund questions: <a href="${p('refund')}">refund policy</a>.`,
		},
		uk: {
			catStart: 'Початок роботи',
			catFeatures: 'Функції та геймплей',
			catUpdates: 'Оновлення та підтримка',
			q1: 'Що таке Warframe Cheats?',
			a1: `Warframe Cheats — це пакет для Windows PC з <a href="${p('warframe-esp')}">ESP</a>, <a href="${p('wallhack')}">wallhack</a>, <a href="${p('radar')}">radar</a> та <a href="${p('warframe-aimbot')}">aimbot</a>. Одна ліцензія включає всі функції та <a href="${p('setup')}">допомогу з налаштуванням</a>.`,
			q2: 'Що входить у ліцензію?',
			a2: `Бокси ESP ворогів, маркери здоровʼя, 2D radar та налаштовуваний aim assist. Дивіться <a href="${p('features')}">Функції</a> та <a href="${p('pricing')}">Ціни</a>.`,
			q3: 'Чи працює для Steel Path, Sorties та відкритого світу?',
			a3: `Так. ESP і radar допомагають бачити ворогів у Steel Path, Sorties та відкритому світі. Aim assist підтримує гвинтівки, дробовики та снайперські зброї.`,
			q4: 'Чи є Warframe Cheats назавжди невиявленим?',
			a4: `Жоден інструмент не гарантує постійний невиявлений статус. Ми оновлюємо після патчів anti-cheat — перевіряйте <a href="${p('updates')}">Оновлення</a> перед грою.`,
			q5: 'Як звʼязатися з підтримкою?',
			a5: `Сторінка <a href="${p('support')}">Підтримка</a> або email support@warframecheats.net з номером замовлення. Повернення: <a href="${p('refund')}">політика повернення</a>.`,
		},
		fr: {
			catStart: 'Premiers pas',
			catFeatures: 'Fonctions et gameplay',
			catUpdates: 'Mises à jour et support',
			q1: 'Qu\'est-ce que Warframe Cheats ?',
			a1: `Warframe Cheats est un pack Windows PC avec <a href="${p('warframe-esp')}">ESP</a>, <a href="${p('wallhack')}">wallhack</a>, <a href="${p('radar')}">radar</a> et <a href="${p('warframe-aimbot')}">aimbot</a>. Une licence couvre tout, plus l\'<a href="${p('setup')}">aide à l\'installation</a>.`,
			q2: 'Que comprend une licence ?',
			a2: `Boîtes ESP ennemies, marqueurs de santé, radar 2D et assist de visée. Voir <a href="${p('features')}">Fonctions</a> et <a href="${p('pricing')}">Tarifs</a>.`,
			q3: 'Fonctionne-t-il pour Steel Path, Sorties et monde ouvert ?',
			a3: `Oui. ESP et radar lisent les positions ennemies en Steel Path, Sorties et zones ouvertes. L'assist couvre fusils, fusils à pompe et snipers.`,
			q4: 'Est-ce indétectable à vie ?',
			a4: `Aucun outil ne garantit un statut indétectable permanent. Nous reconstruisons après les patchs anti-cheat — consultez <a href="${p('updates')}">Mises à jour</a>.`,
			q5: 'Comment contacter le support ?',
			a5: `Page <a href="${p('support')}">Support</a> ou email support@warframecheats.net avec votre numéro de commande. Remboursements : <a href="${p('refund')}">politique de remboursement</a>.`,
		},
		es: {
			catStart: 'Primeros pasos',
			catFeatures: 'Funciones y juego',
			catUpdates: 'Actualizaciones y soporte',
			q1: '¿Qué es Warframe Cheats?',
			a1: `Warframe Cheats es un paquete para Windows PC con <a href="${p('warframe-esp')}">ESP</a>, <a href="${p('wallhack')}">wallhack</a>, <a href="${p('radar')}">radar</a> y <a href="${p('warframe-aimbot')}">aimbot</a>. Una licencia incluye todo más <a href="${p('setup')}">ayuda de instalación</a>.`,
			q2: '¿Qué incluye una licencia?',
			a2: `Cajas ESP de enemigos, marcadores de salud, radar 2D y asistencia de puntería. Ver <a href="${p('features')}">Funciones</a> y <a href="${p('pricing')}">Precios</a>.`,
			q3: '¿Funciona en Steel Path, Sorties y mundo abierto?',
			a3: `Sí. ESP y radar leen posiciones enemigas en Steel Path, Sorties y zonas abiertas. La asistencia cubre rifles, escopetas y francotiradores.`,
			q4: '¿Es indetectable para siempre?',
			a4: `Ninguna herramienta garantiza indetectabilidad permanente. Reconstruimos tras parches anti-cheat — revisa <a href="${p('updates')}">Actualizaciones</a>.`,
			q5: '¿Cómo contactar soporte?',
			a5: `Página de <a href="${p('support')}">Soporte</a> o email support@warframecheats.net con tu ID de pedido. Reembolsos: <a href="${p('refund')}">política de reembolso</a>.`,
		},
		de: {
			catStart: 'Erste Schritte',
			catFeatures: 'Features & Gameplay',
			catUpdates: 'Updates & Support',
			q1: 'Was ist Warframe Cheats?',
			a1: `Warframe Cheats ist ein Windows-PC-Paket mit <a href="${p('warframe-esp')}">ESP</a>, <a href="${p('wallhack')}">Wallhack</a>, <a href="${p('radar')}">Radar</a> und <a href="${p('warframe-aimbot')}">Aimbot</a>. Eine Lizenz deckt alles plus <a href="${p('setup')}">Setup-Hilfe</a> ab.`,
			q2: 'Was ist in einer Lizenz enthalten?',
			a2: `ESP-Boxen, Gesundheitsmarker, 2D-Radar und konfigurierbarer Aim-Assist. Siehe <a href="${p('features')}">Features</a> und <a href="${p('pricing')}">Preise</a>.`,
			q3: 'Funktioniert es für Steel Path, Sorties und Open World?',
			a3: `Ja. ESP und Radar zeigen Gegnerpositionen in Steel Path, Sorties und Open-World-Zonen. Aim-Assist für Gewehre, Schrotflinten und Sniper.`,
			q4: 'Ist es dauerhaft unentdeckt?',
			a4: `Kein Tool garantiert dauerhaft undetected Status. Wir bauen nach Anti-Cheat-Patches neu — prüfe <a href="${p('updates')}">Updates</a>.`,
			q5: 'Wie kontaktiere ich den Support?',
			a5: `<a href="${p('support')}">Support-Seite</a> oder E-Mail an support@warframecheats.net mit Bestell-ID. Rückerstattung: <a href="${p('refund')}">Rückerstattungsrichtlinie</a>.`,
		},
	};

	const cluster = { pt: 'es', it: 'es', nl: 'de', pl: 'de', cs: 'de', sv: 'de', ro: 'es', ru: 'uk', tr: 'de', ar: 'en', ja: 'en', ko: 'en', zh: 'en', hi: 'en', id: 'en', th: 'en', vi: 'en' }[locale];
	const c = copy[locale] ?? copy[cluster] ?? copy.en;

	return [
		{ category: c.catStart, question: c.q1, answer: c.a1 },
		{ category: c.catStart, question: c.q2, answer: c.a2 },
		{ category: c.catFeatures, question: c.q3, answer: c.a3 },
		{ category: c.catUpdates, question: c.q4, answer: c.a4 },
		{ category: c.catUpdates, question: c.q5, answer: c.a5 },
	];
}
