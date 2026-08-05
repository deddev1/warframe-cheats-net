import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Overwatch Hacks 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Overwatch indetectables para Overwatch en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Blizzard anti-cheat (EAC). Entrega digital instantánea.', h1: 'Overwatch Hacks — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Overwatch en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Blizzard anti-cheat (EAC) tras cada parche.', imageAlt: 'Hero overwatch-hacks con ESP wallhack y Aimbot indetectables', gallery: 'Galería Overwatch Hacks — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Overwatch Hacks en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y control points.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Overwatch Hacks 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Overwatch indétectables pour Overwatch sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Blizzard anti-cheat (EAC). Livraison numérique instantanée.', h1: 'Overwatch Hacks — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Overwatch sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Blizzard anti-cheat (EAC) après chaque patch.', imageAlt: 'Hero overwatch-hacks avec ESP wallhack et Aimbot indétectables', gallery: 'Galerie Overwatch Hacks — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Overwatch Hacks en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et control points.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Overwatch Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Overwatch Hacks für Overwatch auf PC. ESP Wallhack, Radar Hack und Aimbot mit Blizzard anti-cheat (EAC)-Wartung. Sofortige digitale Lieferung.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Overwatch: ESP Wallhack, Radar und Aimbot mit Blizzard anti-cheat (EAC)-Wartung nach jedem Patch.', imageAlt: 'Rust-cheats Hero mit ESP Wallhack und Aimbot undetected', gallery: 'Overwatch Hacks Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Overwatch Hacks 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und control points zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Overwatch Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Overwatch indetectáveis para Overwatch no PC. ESP wallhack, radar hack e Aimbot com manutenção Blizzard anti-cheat (EAC). Entrega digital instantánea.', h1: 'Overwatch Hacks — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Overwatch no Windows PC: ESP wallhack, radar e Aimbot com manutenção Blizzard anti-cheat (EAC) após cada patch.', imageAlt: 'Hero overwatch-hacks com ESP wallhack e Aimbot indetectáveis', gallery: 'Galeria Overwatch Hacks — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Overwatch Hacks em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e control points.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Overwatch Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Overwatch indetectable per Overwatch su PC. ESP wallhack, radar hack e Aimbot con manutenzione Blizzard anti-cheat (EAC). Consegna digitale istantanea.', h1: 'Overwatch Hacks — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Overwatch su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Blizzard anti-cheat (EAC) dopo ogni patch.', imageAlt: 'Hero overwatch-hacks con ESP wallhack e Aimbot indetectable', gallery: 'Galleria Overwatch Hacks — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Overwatch Hacks nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e control points.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Overwatch Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Overwatch hacks voor Overwatch op PC. ESP wallhack, radar hack en Aimbot met Blizzard anti-cheat (EAC)-onderhoud. Directe digitale levering.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Overwatch: ESP wallhack, radar en Aimbot met Blizzard anti-cheat (EAC)-onderhoud na elke patch.', imageAlt: 'Rust-cheats hero met ESP wallhack en Aimbot undetected', gallery: 'Overwatch Hacks galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Overwatch Hacks in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en control points.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Overwatch Hacks 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Overwatch dla Overwatch na PC. ESP wallhack, radar hack i Aimbot z konserwacją Blizzard anti-cheat (EAC). Natychmiastowa dostawa cyfrowa.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Overwatch na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Blizzard anti-cheat (EAC) po każdym patchu.', imageAlt: 'Hero overwatch-hacks z ESP wallhack i Aimbot undetected', gallery: 'Galeria Overwatch Hacks — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Overwatch Hacks w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i control points.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Overwatch Hacks 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Overwatch для Overwatch на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Blizzard anti-cheat (EAC). Мгновенная цифровая доставка.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Overwatch на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Blizzard anti-cheat (EAC) после патчей.', imageAlt: 'Hero overwatch-hacks с ESP wallhack и Aimbot undetected', gallery: 'Галерея Overwatch Hacks — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Overwatch Hacks в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и control points.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Overwatch Hacks 2026 | ESP, Wallhack ve Aimbot', desc: 'Overwatch için undetected hileler. ESP wallhack, radar hack ve Aimbot — Blizzard anti-cheat (EAC) bakımı. Anında dijital teslimat.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack ve Aimbot', intro: 'Overwatch Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Blizzard anti-cheat (EAC) bakımı dahil.', imageAlt: 'Rust-cheats hero ESP wallhack ve Aimbot undetected', gallery: 'Overwatch Hacks galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Overwatch Hacks', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve control points\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Overwatch Hacks 2026 | ESP وWallhack وAimbot', desc: 'غش Overwatch undetected لـ Overwatch على PC. ESP wallhack ورadar hack وAimbot مع صيانة Blizzard anti-cheat (EAC). تسليم رقمي فوري.', h1: 'Overwatch Hacks — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Overwatch على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Blizzard anti-cheat (EAC).', imageAlt: 'Hero overwatch-hacks مع ESP wallhack وAimbot undetected', gallery: 'معرض Overwatch Hacks — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Overwatch Hacks في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وcontrol points.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Overwatch Hacks 2026 | ESP・Wallhack・Aimbot', desc: 'Overwatch向けundetectedチート。ESP wallhack、radar hack、Aimbot、Blizzard anti-cheat (EAC)メンテナンス。即時デジタル配信。', h1: 'Overwatch Hacks — Undetected ESP・Wallhack・Aimbot', intro: 'Overwatch Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Blizzard anti-cheat (EAC)メンテナンス付き。', imageAlt: 'overwatch-hacks hero ESP wallhackとAimbot undetected', gallery: 'Overwatch Hacksギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にOverwatch Hacksを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとcontrol pointsで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Overwatch Hacks 2026 | ESP, Wallhack, Aimbot', desc: 'Overwatch undetected 치트. ESP wallhack, radar hack, Aimbot, Blizzard anti-cheat (EAC) 유지보수. 즉시 디지털 배송.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack, Aimbot', intro: 'Overwatch Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Blizzard anti-cheat (EAC) 유지보수 포함.', imageAlt: 'overwatch-hacks hero ESP wallhack 및 Aimbot undetected', gallery: 'Overwatch Hacks 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Overwatch Hacks를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 control points에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Overwatch Hacks 2026 | ESP、Wallhack、Aimbot', desc: 'Overwatch undetected作弊。ESP wallhack、radar hack、Aimbot、Blizzard anti-cheat (EAC)维护。即时数字交付。', h1: 'Overwatch Hacks — Undetected ESP、Wallhack、Aimbot', intro: 'Overwatch Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Blizzard anti-cheat (EAC)维护。', imageAlt: 'overwatch-hacks hero ESP wallhack与Aimbot undetected', gallery: 'Overwatch Hacks图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Overwatch Hacks的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和control points中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Overwatch Hacks 2026 | ESP, Wallhack और Aimbot', desc: 'Overwatch undetected cheats. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. Instant digital delivery.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack और Aimbot', intro: 'Overwatch Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, anti-cheat maintenance सहित.', imageAlt: 'overwatch-hacks hero ESP wallhack और Aimbot undetected', gallery: 'Overwatch Hacks gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Overwatch Hacks क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और control points में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Overwatch Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Overwatch undetected untuk Overwatch di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Blizzard anti-cheat (EAC). Pengiriman digital instan.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Overwatch di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Blizzard anti-cheat (EAC).', imageAlt: 'Hero overwatch-hacks ESP wallhack dan Aimbot undetected', gallery: 'Galeri Overwatch Hacks — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Overwatch Hacks di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan control points.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Overwatch Hacks 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Overwatch undetected สำหรับ Overwatch บน PC. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Overwatch บน Windows PC: ESP wallhack, radar, Aimbot พร้อม anti-cheat maintenance', imageAlt: 'Hero overwatch-hacks ESP wallhack และ Aimbot undetected', gallery: 'แกลเลอรี Overwatch Hacks — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Overwatch Hacks ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ control points', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Overwatch Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Overwatch undetected cho Overwatch trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Blizzard anti-cheat (EAC). Giao hàng kỹ thuật số tức thì.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Overwatch trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Blizzard anti-cheat (EAC).', imageAlt: 'Hero overwatch-hacks ESP wallhack và Aimbot undetected', gallery: 'Thư viện Overwatch Hacks — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Overwatch Hacks 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và control points.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Overwatch Hacks 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Overwatch для Overwatch на PC. ESP wallhack, radar hack, Aimbot, обслуговування Blizzard anti-cheat (EAC). Мгновенная цифровая доставка.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Overwatch на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Blizzard anti-cheat (EAC).', imageAlt: 'Hero overwatch-hacks з ESP wallhack і Aimbot undetected', gallery: 'Галерея Overwatch Hacks — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Overwatch Hacks у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і control points.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Overwatch Hacks 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Overwatch cheaty pro Overwatch na PC. ESP wallhack, radar hack, Aimbot, údržba Blizzard anti-cheat (EAC). Okamžité digitální doručení.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Overwatch na Windows PC: ESP wallhack, radar, Aimbot s údržbou Blizzard anti-cheat (EAC).', imageAlt: 'Hero overwatch-hacks s ESP wallhack a Aimbot undetected', gallery: 'Galerie Overwatch Hacks — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Overwatch Hacks v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a control points.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Overwatch Hacks 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Overwatch undetected pentru Overwatch pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Blizzard anti-cheat (EAC). Livrare digitală instantă.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Overwatch pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Blizzard anti-cheat (EAC).', imageAlt: 'Hero overwatch-hacks cu ESP wallhack și Aimbot undetected', gallery: 'Galerie Overwatch Hacks — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Overwatch Hacks în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și control points.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Overwatch Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Overwatch hacks för Overwatch på PC. ESP wallhack, radar hack, Aimbot, Blizzard anti-cheat (EAC)-underhåll. Omedelbar digital leverans.', h1: 'Overwatch Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Overwatch på Windows PC: ESP wallhack, radar, Aimbot med Blizzard anti-cheat (EAC)-underhåll.', imageAlt: 'Rust-cheats hero med ESP wallhack och Aimbot undetected', gallery: 'Overwatch Hacks galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Overwatch Hacks 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och control points.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique English title/desc tails per page — avoids identical "| ESP wallhack & Aimbot" across locales. */
const PAGE_META_TAILS = {
	'overwatch-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, health pack markers, and wallhack overlays' },
	'overwatch-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar, and cloud DMA controls' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup' },
	updates: { suffix: 'EAC Maintenance Log', focus: 'EAC patch status and rebuild notes' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and EAC questions' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact' },
	undetected: { suffix: 'EAC Safe Status', focus: 'undetected maintenance after Blizzard anti-cheat patches' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations' },
	'eac-bypass': { suffix: 'Patch Maintenance', focus: 'how EAC updates are handled for Overwatch Hacks' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Overwatch hacks checklist before checkout' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Overwatch Hacks pillar for ESP and Aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Overwatch hacks' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Overwatch' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Overwatch Hacks', focus: 'ESP wallhack, radar, and Aimbot' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Overwatch Hacks ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Overwatch. ${p.delivery}. anti-cheat maintenance included.`,
			),
		),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: `overwatch-hacks ${pageKey} ${meta.focus} preview`,
		galleryTitle: `Overwatch Hacks ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read enemy squads with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for Quick Play and Competitive.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'overwatch-esp': { en: 'Overwatch ESP', es: 'Overwatch ESP', fr: 'Overwatch ESP', de: 'Overwatch ESP', pt: 'Overwatch ESP', it: 'Overwatch ESP', nl: 'Overwatch ESP', pl: 'Overwatch ESP', ru: 'Overwatch ESP', tr: 'Overwatch ESP', ar: 'Overwatch ESP', ja: 'Overwatch ESP', ko: 'Overwatch ESP', zh: 'Overwatch ESP', hi: 'Overwatch ESP', id: 'Overwatch ESP', th: 'Overwatch ESP', vi: 'Overwatch ESP', uk: 'Overwatch ESP', cs: 'Overwatch ESP', ro: 'Overwatch ESP', sv: 'Overwatch ESP' },
	'overwatch-aimbot': { en: 'Overwatch Aimbot', es: 'Overwatch Aimbot', fr: 'Overwatch Aimbot', de: 'Overwatch Aimbot', pt: 'Overwatch Aimbot', it: 'Overwatch Aimbot', nl: 'Overwatch Aimbot', pl: 'Overwatch Aimbot', ru: 'Overwatch Aimbot', tr: 'Overwatch Aimbot', ar: 'Overwatch Aimbot', ja: 'Overwatch Aimbot', ko: 'Overwatch Aimbot', zh: 'Overwatch Aimbot', hi: 'Overwatch Aimbot', id: 'Overwatch Aimbot', th: 'Overwatch Aimbot', vi: 'Overwatch Aimbot', uk: 'Overwatch Aimbot', cs: 'Overwatch Aimbot', ro: 'Overwatch Aimbot', sv: 'Overwatch Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Overwatch Wallhack', es: 'Overwatch Wallhack', fr: 'Overwatch Wallhack', de: 'Overwatch Wallhack', pt: 'Overwatch Wallhack', it: 'Overwatch Wallhack', nl: 'Overwatch Wallhack', pl: 'Overwatch Wallhack', ru: 'Overwatch Wallhack', tr: 'Overwatch Wallhack', ar: 'Overwatch Wallhack', ja: 'Overwatch Wallhack', ko: 'Overwatch Wallhack', zh: 'Overwatch Wallhack', hi: 'Overwatch Wallhack', id: 'Overwatch Wallhack', th: 'Overwatch Wallhack', vi: 'Overwatch Wallhack', uk: 'Overwatch Wallhack', cs: 'Overwatch Wallhack', ro: 'Overwatch Wallhack', sv: 'Overwatch Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'eac-bypass': { en: 'EAC Bypass', es: 'Bypass Blizzard anti-cheat (EAC)', fr: 'Bypass Blizzard anti-cheat (EAC)', de: 'EAC Bypass', pt: 'Bypass Blizzard anti-cheat (EAC)', it: 'Bypass Blizzard anti-cheat (EAC)', nl: 'EAC Bypass', pl: 'Bypass Blizzard anti-cheat (EAC)', ru: 'Bypass Blizzard anti-cheat (EAC)', tr: 'anti-cheat bypass', ar: 'Bypass Blizzard anti-cheat (EAC)', ja: 'EAC Bypass', ko: 'EAC Bypass', zh: 'EAC Bypass', hi: 'EAC Bypass', id: 'Bypass Blizzard anti-cheat (EAC)', th: 'EAC Bypass', vi: 'Bypass Blizzard anti-cheat (EAC)', uk: 'Bypass Blizzard anti-cheat (EAC)', cs: 'EAC Bypass', ro: 'Bypass Blizzard anti-cheat (EAC)', sv: 'EAC Bypass' },
	'cheats-2026': { en: 'Overwatch Hacks 2026', es: 'Overwatch Hacks 2026', fr: 'Overwatch Hacks 2026', de: 'Overwatch Hacks 2026', pt: 'Overwatch Hacks 2026', it: 'Overwatch Hacks 2026', nl: 'Overwatch Hacks 2026', pl: 'Overwatch Hacks 2026', ru: 'Overwatch Hacks 2026', tr: 'Overwatch Hacks 2026', ar: 'Overwatch Hacks 2026', ja: 'Overwatch Hacks 2026', ko: 'Overwatch Hacks 2026', zh: 'Overwatch Hacks 2026', hi: 'Overwatch Hacks 2026', id: 'Overwatch Hacks 2026', th: 'Overwatch Hacks 2026', vi: 'Overwatch Hacks 2026', uk: 'Overwatch Hacks 2026', cs: 'Overwatch Hacks 2026', ro: 'Overwatch Hacks 2026', sv: 'Overwatch Hacks 2026' },
	hacks: { en: 'Overwatch Hacks', es: 'Overwatch Hacks', fr: 'Overwatch Hacks', de: 'Overwatch Hacks', pt: 'Overwatch Hacks', it: 'Overwatch Hacks', nl: 'Overwatch Hacks', pl: 'Overwatch Hacks', ru: 'Overwatch Hacks', tr: 'Overwatch Hacks', ar: 'Overwatch Hacks', ja: 'Overwatch Hacks', ko: 'Overwatch Hacks', zh: 'Overwatch Hacks', hi: 'Overwatch Hacks', id: 'Overwatch Hacks', th: 'Overwatch Hacks', vi: 'Overwatch Hacks', uk: 'Overwatch Hacks', cs: 'Overwatch Hacks', ro: 'Overwatch Hacks', sv: 'Overwatch Hacks' },
	'cheat-download': { en: 'Overwatch Hacks Download', es: 'Descarga Overwatch Hacks', fr: 'Téléchargement Overwatch Hacks', de: 'Overwatch Hacks Download', pt: 'Download Overwatch Hacks', it: 'Download Overwatch Hacks', nl: 'Overwatch Hacks Download', pl: 'Pobieranie Overwatch Hacks', ru: 'Скачать Overwatch Hacks', tr: 'Overwatch Hile İndir', ar: 'Overwatch Hacks Download', ja: 'Overwatch Hacks Download', ko: 'Overwatch Hacks Download', zh: 'Overwatch Hacks Download', hi: 'Overwatch Hacks Download', id: 'Overwatch Hacks Download', th: 'Overwatch Hacks Download', vi: 'Overwatch Hacks Download', uk: 'Завантаження Overwatch Hacks', cs: 'Overwatch Hacks Download', ro: 'Descărcare Overwatch Hacks', sv: 'Overwatch Hacks Download' },
	'mod-menu': { en: 'Overwatch Mod Menu', es: 'Overwatch Mod Menu', fr: 'Overwatch Mod Menu', de: 'Overwatch Mod Menu', pt: 'Overwatch Mod Menu', it: 'Overwatch Mod Menu', nl: 'Overwatch Mod Menu', pl: 'Overwatch Mod Menu', ru: 'Overwatch Mod Menu', tr: 'Overwatch Mod Menu', ar: 'Overwatch Mod Menu', ja: 'Overwatch Mod Menu', ko: 'Overwatch Mod Menu', zh: 'Overwatch Mod Menu', hi: 'Overwatch Mod Menu', id: 'Overwatch Mod Menu', th: 'Overwatch Mod Menu', vi: 'Overwatch Mod Menu', uk: 'Overwatch Mod Menu', cs: 'Overwatch Mod Menu', ro: 'Overwatch Mod Menu', sv: 'Overwatch Mod Menu' },
	'soft-aim': { en: 'Overwatch Soft Aim', es: 'Overwatch Soft Aim', fr: 'Overwatch Soft Aim', de: 'Overwatch Soft Aim', pt: 'Overwatch Soft Aim', it: 'Overwatch Soft Aim', nl: 'Overwatch Soft Aim', pl: 'Overwatch Soft Aim', ru: 'Overwatch Soft Aim', tr: 'Overwatch Soft Aim', ar: 'Overwatch Soft Aim', ja: 'Overwatch Soft Aim', ko: 'Overwatch Soft Aim', zh: 'Overwatch Soft Aim', hi: 'Overwatch Soft Aim', id: 'Overwatch Soft Aim', th: 'Overwatch Soft Aim', vi: 'Overwatch Soft Aim', uk: 'Overwatch Soft Aim', cs: 'Overwatch Soft Aim', ro: 'Overwatch Soft Aim', sv: 'Overwatch Soft Aim' },
	'best-cheats': { en: 'Best Overwatch Hacks', es: 'Mejores Overwatch Hacks', fr: 'Meilleures Overwatch Hacks', de: 'Beste Overwatch Hacks', pt: 'Melhores Overwatch Hacks', it: 'Migliori Overwatch Hacks', nl: 'Beste Overwatch Hacks', pl: 'Najlepsze Overwatch Hacks', ru: 'Лучшие Overwatch Hacks', tr: 'En İyi Overwatch Hileleri', ar: 'Best Overwatch Hacks', ja: 'Best Overwatch Hacks', ko: 'Best Overwatch Hacks', zh: 'Best Overwatch Hacks', hi: 'Best Overwatch Hacks', id: 'Best Overwatch Hacks', th: 'Best Overwatch Hacks', vi: 'Best Overwatch Hacks', uk: 'Найкращі Overwatch Hacks', cs: 'Nejlepší Overwatch Hacks', ro: 'Cele mai bune Overwatch Hacks', sv: 'Bästa Overwatch Hacks' },
	'aimbot-hack': { en: 'Overwatch Aimbot Hack', es: 'Overwatch Aimbot Hack', fr: 'Overwatch Aimbot Hack', de: 'Overwatch Aimbot Hack', pt: 'Overwatch Aimbot Hack', it: 'Overwatch Aimbot Hack', nl: 'Overwatch Aimbot Hack', pl: 'Overwatch Aimbot Hack', ru: 'Overwatch Aimbot Hack', tr: 'Overwatch Aimbot Hack', ar: 'Overwatch Aimbot Hack', ja: 'Overwatch Aimbot Hack', ko: 'Overwatch Aimbot Hack', zh: 'Overwatch Aimbot Hack', hi: 'Overwatch Aimbot Hack', id: 'Overwatch Aimbot Hack', th: 'Overwatch Aimbot Hack', vi: 'Overwatch Aimbot Hack', uk: 'Overwatch Aimbot Hack', cs: 'Overwatch Aimbot Hack', ro: 'Overwatch Aimbot Hack', sv: 'Overwatch Aimbot Hack' },
	'esp-hack': { en: 'Overwatch ESP Hack', es: 'Overwatch ESP Hack', fr: 'Overwatch ESP Hack', de: 'Overwatch ESP Hack', pt: 'Overwatch ESP Hack', it: 'Overwatch ESP Hack', nl: 'Overwatch ESP Hack', pl: 'Overwatch ESP Hack', ru: 'Overwatch ESP Hack', tr: 'Overwatch ESP Hack', ar: 'Overwatch ESP Hack', ja: 'Overwatch ESP Hack', ko: 'Overwatch ESP Hack', zh: 'Overwatch ESP Hack', hi: 'Overwatch ESP Hack', id: 'Overwatch ESP Hack', th: 'Overwatch ESP Hack', vi: 'Overwatch ESP Hack', uk: 'Overwatch ESP Hack', cs: 'Overwatch ESP Hack', ro: 'Overwatch ESP Hack', sv: 'Overwatch ESP Hack' },
	'unlock-all': { en: 'Overwatch Unlock All', es: 'Overwatch Unlock All', fr: 'Overwatch Unlock All', de: 'Overwatch Unlock All', pt: 'Overwatch Unlock All', it: 'Overwatch Unlock All', nl: 'Overwatch Unlock All', pl: 'Overwatch Unlock All', ru: 'Overwatch Unlock All', tr: 'Overwatch Unlock All', ar: 'Overwatch Unlock All', ja: 'Overwatch Unlock All', ko: 'Overwatch Unlock All', zh: 'Overwatch Unlock All', hi: 'Overwatch Unlock All', id: 'Overwatch Unlock All', th: 'Overwatch Unlock All', vi: 'Overwatch Unlock All', uk: 'Overwatch Unlock All', cs: 'Overwatch Unlock All', ro: 'Overwatch Unlock All', sv: 'Overwatch Unlock All' },
};

const CTA2_HREF = {
	'overwatch-esp': '/overwatch-wallhack/',
	'overwatch-aimbot': '/overwatch-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/overwatch-hacks/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/overwatch-hacks/',
	wallhack: '/overwatch-esp/',
	radar: '/overwatch-esp/',
	'eac-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/overwatch-hacks/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/overwatch-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/overwatch-aimbot/',
	'esp-hack': '/overwatch-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Overwatch Hacks`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Overwatch Hacks — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for overwatchhacks.com and Overwatch licenses.`),
		imageAlt: `overwatch-hacks ${kind} ESP wallhack Aimbot legal page`,
		galleryTitle: `Overwatch Hacks ${kind} resources`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on overwatchhacks.com.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Overwatch terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@overwatchhacks.com',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
