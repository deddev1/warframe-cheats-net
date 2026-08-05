import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'War Thunder Hacks 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos War Thunder indetectables para War Thunder en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Gaijin Easy Anti-Cheat (EAC). Entrega digital instantánea.', h1: 'War Thunder Hacks — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para War Thunder en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Gaijin Easy Anti-Cheat (EAC) tras cada parche.', imageAlt: 'Hero war-thunder-hacks con ESP wallhack y Aimbot indetectables', gallery: 'Galería War Thunder Hacks — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen War Thunder Hacks en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y capture zones.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'War Thunder Hacks 2026 | ESP, Wallhack et Aimbot', desc: 'Triches War Thunder indétectables pour War Thunder sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Gaijin Easy Anti-Cheat (EAC). Livraison numérique instantanée.', h1: 'War Thunder Hacks — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour War Thunder sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Gaijin Easy Anti-Cheat (EAC) après chaque patch.', imageAlt: 'Hero war-thunder-hacks avec ESP wallhack et Aimbot indétectables', gallery: 'Galerie War Thunder Hacks — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir War Thunder Hacks en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et capture zones.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'War Thunder Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected War Thunder Hacks für War Thunder auf PC. ESP Wallhack, Radar Hack und Aimbot mit Gaijin Easy Anti-Cheat (EAC)-Wartung. Sofortige digitale Lieferung.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für War Thunder: ESP Wallhack, Radar und Aimbot mit Gaijin Easy Anti-Cheat (EAC)-Wartung nach jedem Patch.', imageAlt: 'Rust-cheats Hero mit ESP Wallhack und Aimbot undetected', gallery: 'War Thunder Hacks Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum War Thunder Hacks 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und capture zones zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'War Thunder Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats War Thunder indetectáveis para War Thunder no PC. ESP wallhack, radar hack e Aimbot com manutenção Gaijin Easy Anti-Cheat (EAC). Entrega digital instantánea.', h1: 'War Thunder Hacks — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para War Thunder no Windows PC: ESP wallhack, radar e Aimbot com manutenção Gaijin Easy Anti-Cheat (EAC) após cada patch.', imageAlt: 'Hero war-thunder-hacks com ESP wallhack e Aimbot indetectáveis', gallery: 'Galeria War Thunder Hacks — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher War Thunder Hacks em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e capture zones.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'War Thunder Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat War Thunder indetectable per War Thunder su PC. ESP wallhack, radar hack e Aimbot con manutenzione Gaijin Easy Anti-Cheat (EAC). Consegna digitale istantanea.', h1: 'War Thunder Hacks — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per War Thunder su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Gaijin Easy Anti-Cheat (EAC) dopo ogni patch.', imageAlt: 'Hero war-thunder-hacks con ESP wallhack e Aimbot indetectable', gallery: 'Galleria War Thunder Hacks — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere War Thunder Hacks nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e capture zones.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'War Thunder Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected War Thunder hacks voor War Thunder op PC. ESP wallhack, radar hack en Aimbot met Gaijin Easy Anti-Cheat (EAC)-onderhoud. Directe digitale levering.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor War Thunder: ESP wallhack, radar en Aimbot met Gaijin Easy Anti-Cheat (EAC)-onderhoud na elke patch.', imageAlt: 'Rust-cheats hero met ESP wallhack en Aimbot undetected', gallery: 'War Thunder Hacks galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom War Thunder Hacks in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en capture zones.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'War Thunder Hacks 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty War Thunder dla War Thunder na PC. ESP wallhack, radar hack i Aimbot z konserwacją Gaijin Easy Anti-Cheat (EAC). Natychmiastowa dostawa cyfrowa.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla War Thunder na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Gaijin Easy Anti-Cheat (EAC) po każdym patchu.', imageAlt: 'Hero war-thunder-hacks z ESP wallhack i Aimbot undetected', gallery: 'Galeria War Thunder Hacks — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego War Thunder Hacks w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i capture zones.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'War Thunder Hacks 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы War Thunder для War Thunder на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Gaijin Easy Anti-Cheat (EAC). Мгновенная цифровая доставка.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для War Thunder на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Gaijin Easy Anti-Cheat (EAC) после патчей.', imageAlt: 'Hero war-thunder-hacks с ESP wallhack и Aimbot undetected', gallery: 'Галерея War Thunder Hacks — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают War Thunder Hacks в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и capture zones.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'War Thunder Hacks 2026 | ESP, Wallhack ve Aimbot', desc: 'War Thunder için undetected hileler. ESP wallhack, radar hack ve Aimbot — Gaijin Easy Anti-Cheat (EAC) bakımı. Anında dijital teslimat.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack ve Aimbot', intro: 'War Thunder Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Gaijin Easy Anti-Cheat (EAC) bakımı dahil.', imageAlt: 'Rust-cheats vehicle ESP wallhack ve Aimbot undetected', gallery: 'War Thunder Hacks galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden War Thunder Hacks', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve capture zones\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'War Thunder Hacks 2026 | ESP وWallhack وAimbot', desc: 'غش War Thunder undetected لـ War Thunder على PC. ESP wallhack ورadar hack وAimbot مع صيانة Gaijin Easy Anti-Cheat (EAC). تسليم رقمي فوري.', h1: 'War Thunder Hacks — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ War Thunder على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Gaijin Easy Anti-Cheat (EAC).', imageAlt: 'Hero war-thunder-hacks مع ESP wallhack وAimbot undetected', gallery: 'معرض War Thunder Hacks — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا War Thunder Hacks في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وcapture zones.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'War Thunder Hacks 2026 | ESP・Wallhack・Aimbot', desc: 'War Thunder向けundetectedチート。ESP wallhack、radar hack、Aimbot、Gaijin Easy Anti-Cheat (EAC)メンテナンス。即時デジタル配信。', h1: 'War Thunder Hacks — Undetected ESP・Wallhack・Aimbot', intro: 'War Thunder Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Gaijin Easy Anti-Cheat (EAC)メンテナンス付き。', imageAlt: 'war-thunder-hacks vehicle ESP wallhackとAimbot undetected', gallery: 'War Thunder Hacksギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にWar Thunder Hacksを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとcapture zonesで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'War Thunder Hacks 2026 | ESP, Wallhack, Aimbot', desc: 'War Thunder undetected 치트. ESP wallhack, radar hack, Aimbot, Gaijin Easy Anti-Cheat (EAC) 유지보수. 즉시 디지털 배송.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack, Aimbot', intro: 'War Thunder Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Gaijin Easy Anti-Cheat (EAC) 유지보수 포함.', imageAlt: 'war-thunder-hacks vehicle ESP wallhack 및 Aimbot undetected', gallery: 'War Thunder Hacks 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 War Thunder Hacks를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 capture zones에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'War Thunder Hacks 2026 | ESP、Wallhack、Aimbot', desc: 'War Thunder undetected作弊。ESP wallhack、radar hack、Aimbot、Gaijin Easy Anti-Cheat (EAC)维护。即时数字交付。', h1: 'War Thunder Hacks — Undetected ESP、Wallhack、Aimbot', intro: 'War Thunder Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Gaijin Easy Anti-Cheat (EAC)维护。', imageAlt: 'war-thunder-hacks vehicle ESP wallhack与Aimbot undetected', gallery: 'War Thunder Hacks图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择War Thunder Hacks的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和capture zones中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'War Thunder Hacks 2026 | ESP, Wallhack और Aimbot', desc: 'War Thunder undetected cheats. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. Instant digital delivery.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack और Aimbot', intro: 'War Thunder Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, anti-cheat maintenance सहित.', imageAlt: 'war-thunder-hacks vehicle ESP wallhack और Aimbot undetected', gallery: 'War Thunder Hacks gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में War Thunder Hacks क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और capture zones में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'War Thunder Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat War Thunder undetected untuk War Thunder di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Gaijin Easy Anti-Cheat (EAC). Pengiriman digital instan.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected War Thunder di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Gaijin Easy Anti-Cheat (EAC).', imageAlt: 'Hero war-thunder-hacks ESP wallhack dan Aimbot undetected', gallery: 'Galeri War Thunder Hacks — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa War Thunder Hacks di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan capture zones.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'War Thunder Hacks 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat War Thunder undetected สำหรับ War Thunder บน PC. ESP wallhack, radar hack, Aimbot, anti-cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ War Thunder บน Windows PC: ESP wallhack, radar, Aimbot พร้อม anti-cheat maintenance', imageAlt: 'Hero war-thunder-hacks ESP wallhack และ Aimbot undetected', gallery: 'แกลเลอรี War Thunder Hacks — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก War Thunder Hacks ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ capture zones', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'War Thunder Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat War Thunder undetected cho War Thunder trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Gaijin Easy Anti-Cheat (EAC). Giao hàng kỹ thuật số tức thì.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected War Thunder trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Gaijin Easy Anti-Cheat (EAC).', imageAlt: 'Hero war-thunder-hacks ESP wallhack và Aimbot undetected', gallery: 'Thư viện War Thunder Hacks — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn War Thunder Hacks 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và capture zones.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'War Thunder Hacks 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти War Thunder для War Thunder на PC. ESP wallhack, radar hack, Aimbot, обслуговування Gaijin Easy Anti-Cheat (EAC). Мгновенная цифровая доставка.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для War Thunder на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Gaijin Easy Anti-Cheat (EAC).', imageAlt: 'Hero war-thunder-hacks з ESP wallhack і Aimbot undetected', gallery: 'Галерея War Thunder Hacks — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому War Thunder Hacks у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і capture zones.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'War Thunder Hacks 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected War Thunder cheaty pro War Thunder na PC. ESP wallhack, radar hack, Aimbot, údržba Gaijin Easy Anti-Cheat (EAC). Okamžité digitální doručení.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro War Thunder na Windows PC: ESP wallhack, radar, Aimbot s údržbou Gaijin Easy Anti-Cheat (EAC).', imageAlt: 'Hero war-thunder-hacks s ESP wallhack a Aimbot undetected', gallery: 'Galerie War Thunder Hacks — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč War Thunder Hacks v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a capture zones.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'War Thunder Hacks 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats War Thunder undetected pentru War Thunder pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Gaijin Easy Anti-Cheat (EAC). Livrare digitală instantă.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected War Thunder pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Gaijin Easy Anti-Cheat (EAC).', imageAlt: 'Hero war-thunder-hacks cu ESP wallhack și Aimbot undetected', gallery: 'Galerie War Thunder Hacks — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce War Thunder Hacks în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și capture zones.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'War Thunder Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected War Thunder hacks för War Thunder på PC. ESP wallhack, radar hack, Aimbot, Gaijin Easy Anti-Cheat (EAC)-underhåll. Omedelbar digital leverans.', h1: 'War Thunder Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för War Thunder på Windows PC: ESP wallhack, radar, Aimbot med Gaijin Easy Anti-Cheat (EAC)-underhåll.', imageAlt: 'Rust-cheats hero med ESP wallhack och Aimbot undetected', gallery: 'War Thunder Hacks galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför War Thunder Hacks 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och capture zones.', topicB: 'En licens istället för separata verktyg.' },
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
	'war-thunder-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, repair point markers, and wallhack overlays' },
	'war-thunder-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar, and cloud DMA controls' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup' },
	updates: { suffix: 'EAC Maintenance Log', focus: 'EAC patch status and rebuild notes' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and EAC questions' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact' },
	undetected: { suffix: 'EAC Safe Status', focus: 'undetected maintenance after Gaijin Easy Anti-Cheat patches' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations' },
	'eac-bypass': { suffix: 'Patch Maintenance', focus: 'how EAC updates are handled for War Thunder Hacks' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 War Thunder hacks checklist before checkout' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the War Thunder Hacks pillar for ESP and Aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for PC and controllers' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying War Thunder hacks' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for War Thunder' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools' },
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'War Thunder Hacks', focus: 'ESP wallhack, radar, and Aimbot' };
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${meta.suffix}`
		: `${topicName} 2026 | ${meta.suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | War Thunder Hacks ${meta.suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for War Thunder. ${p.delivery}. anti-cheat maintenance included.`,
			),
		),
		h1: `${topicName} — ${meta.suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: `war-thunder-hacks ${pageKey} ${meta.focus} preview`,
		galleryTitle: `War Thunder Hacks ${topicName} gallery`,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read enemy squads with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for Arcade Battles and Realistic Battles.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'war-thunder-esp': { en: 'War Thunder ESP', es: 'War Thunder ESP', fr: 'War Thunder ESP', de: 'War Thunder ESP', pt: 'War Thunder ESP', it: 'War Thunder ESP', nl: 'War Thunder ESP', pl: 'War Thunder ESP', ru: 'War Thunder ESP', tr: 'War Thunder ESP', ar: 'War Thunder ESP', ja: 'War Thunder ESP', ko: 'War Thunder ESP', zh: 'War Thunder ESP', hi: 'War Thunder ESP', id: 'War Thunder ESP', th: 'War Thunder ESP', vi: 'War Thunder ESP', uk: 'War Thunder ESP', cs: 'War Thunder ESP', ro: 'War Thunder ESP', sv: 'War Thunder ESP' },
	'war-thunder-aimbot': { en: 'War Thunder Aimbot', es: 'War Thunder Aimbot', fr: 'War Thunder Aimbot', de: 'War Thunder Aimbot', pt: 'War Thunder Aimbot', it: 'War Thunder Aimbot', nl: 'War Thunder Aimbot', pl: 'War Thunder Aimbot', ru: 'War Thunder Aimbot', tr: 'War Thunder Aimbot', ar: 'War Thunder Aimbot', ja: 'War Thunder Aimbot', ko: 'War Thunder Aimbot', zh: 'War Thunder Aimbot', hi: 'War Thunder Aimbot', id: 'War Thunder Aimbot', th: 'War Thunder Aimbot', vi: 'War Thunder Aimbot', uk: 'War Thunder Aimbot', cs: 'War Thunder Aimbot', ro: 'War Thunder Aimbot', sv: 'War Thunder Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'War Thunder Wallhack', es: 'War Thunder Wallhack', fr: 'War Thunder Wallhack', de: 'War Thunder Wallhack', pt: 'War Thunder Wallhack', it: 'War Thunder Wallhack', nl: 'War Thunder Wallhack', pl: 'War Thunder Wallhack', ru: 'War Thunder Wallhack', tr: 'War Thunder Wallhack', ar: 'War Thunder Wallhack', ja: 'War Thunder Wallhack', ko: 'War Thunder Wallhack', zh: 'War Thunder Wallhack', hi: 'War Thunder Wallhack', id: 'War Thunder Wallhack', th: 'War Thunder Wallhack', vi: 'War Thunder Wallhack', uk: 'War Thunder Wallhack', cs: 'War Thunder Wallhack', ro: 'War Thunder Wallhack', sv: 'War Thunder Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'eac-bypass': { en: 'EAC Bypass', es: 'Bypass Gaijin Easy Anti-Cheat (EAC)', fr: 'Bypass Gaijin Easy Anti-Cheat (EAC)', de: 'EAC Bypass', pt: 'Bypass Gaijin Easy Anti-Cheat (EAC)', it: 'Bypass Gaijin Easy Anti-Cheat (EAC)', nl: 'EAC Bypass', pl: 'Bypass Gaijin Easy Anti-Cheat (EAC)', ru: 'Bypass Gaijin Easy Anti-Cheat (EAC)', tr: 'EAC bypass', ar: 'Bypass Gaijin Easy Anti-Cheat (EAC)', ja: 'EAC Bypass', ko: 'EAC Bypass', zh: 'EAC Bypass', hi: 'EAC Bypass', id: 'Bypass Gaijin Easy Anti-Cheat (EAC)', th: 'EAC Bypass', vi: 'Bypass Gaijin Easy Anti-Cheat (EAC)', uk: 'Bypass Gaijin Easy Anti-Cheat (EAC)', cs: 'EAC Bypass', ro: 'Bypass Gaijin Easy Anti-Cheat (EAC)', sv: 'EAC Bypass' },
	'cheats-2026': { en: 'War Thunder Hacks 2026', es: 'War Thunder Hacks 2026', fr: 'War Thunder Hacks 2026', de: 'War Thunder Hacks 2026', pt: 'War Thunder Hacks 2026', it: 'War Thunder Hacks 2026', nl: 'War Thunder Hacks 2026', pl: 'War Thunder Hacks 2026', ru: 'War Thunder Hacks 2026', tr: 'War Thunder Hacks 2026', ar: 'War Thunder Hacks 2026', ja: 'War Thunder Hacks 2026', ko: 'War Thunder Hacks 2026', zh: 'War Thunder Hacks 2026', hi: 'War Thunder Hacks 2026', id: 'War Thunder Hacks 2026', th: 'War Thunder Hacks 2026', vi: 'War Thunder Hacks 2026', uk: 'War Thunder Hacks 2026', cs: 'War Thunder Hacks 2026', ro: 'War Thunder Hacks 2026', sv: 'War Thunder Hacks 2026' },
	hacks: { en: 'War Thunder Hacks', es: 'War Thunder Hacks', fr: 'War Thunder Hacks', de: 'War Thunder Hacks', pt: 'War Thunder Hacks', it: 'War Thunder Hacks', nl: 'War Thunder Hacks', pl: 'War Thunder Hacks', ru: 'War Thunder Hacks', tr: 'War Thunder Hacks', ar: 'War Thunder Hacks', ja: 'War Thunder Hacks', ko: 'War Thunder Hacks', zh: 'War Thunder Hacks', hi: 'War Thunder Hacks', id: 'War Thunder Hacks', th: 'War Thunder Hacks', vi: 'War Thunder Hacks', uk: 'War Thunder Hacks', cs: 'War Thunder Hacks', ro: 'War Thunder Hacks', sv: 'War Thunder Hacks' },
	'cheat-download': { en: 'War Thunder Hacks Download', es: 'Descarga War Thunder Hacks', fr: 'Téléchargement War Thunder Hacks', de: 'War Thunder Hacks Download', pt: 'Download War Thunder Hacks', it: 'Download War Thunder Hacks', nl: 'War Thunder Hacks Download', pl: 'Pobieranie War Thunder Hacks', ru: 'Скачать War Thunder Hacks', tr: 'War Thunder Hile İndir', ar: 'War Thunder Hacks Download', ja: 'War Thunder Hacks Download', ko: 'War Thunder Hacks Download', zh: 'War Thunder Hacks Download', hi: 'War Thunder Hacks Download', id: 'War Thunder Hacks Download', th: 'War Thunder Hacks Download', vi: 'War Thunder Hacks Download', uk: 'Завантаження War Thunder Hacks', cs: 'War Thunder Hacks Download', ro: 'Descărcare War Thunder Hacks', sv: 'War Thunder Hacks Download' },
	'mod-menu': { en: 'War Thunder Mod Menu', es: 'War Thunder Mod Menu', fr: 'War Thunder Mod Menu', de: 'War Thunder Mod Menu', pt: 'War Thunder Mod Menu', it: 'War Thunder Mod Menu', nl: 'War Thunder Mod Menu', pl: 'War Thunder Mod Menu', ru: 'War Thunder Mod Menu', tr: 'War Thunder Mod Menu', ar: 'War Thunder Mod Menu', ja: 'War Thunder Mod Menu', ko: 'War Thunder Mod Menu', zh: 'War Thunder Mod Menu', hi: 'War Thunder Mod Menu', id: 'War Thunder Mod Menu', th: 'War Thunder Mod Menu', vi: 'War Thunder Mod Menu', uk: 'War Thunder Mod Menu', cs: 'War Thunder Mod Menu', ro: 'War Thunder Mod Menu', sv: 'War Thunder Mod Menu' },
	'soft-aim': { en: 'War Thunder Soft Aim', es: 'War Thunder Soft Aim', fr: 'War Thunder Soft Aim', de: 'War Thunder Soft Aim', pt: 'War Thunder Soft Aim', it: 'War Thunder Soft Aim', nl: 'War Thunder Soft Aim', pl: 'War Thunder Soft Aim', ru: 'War Thunder Soft Aim', tr: 'War Thunder Soft Aim', ar: 'War Thunder Soft Aim', ja: 'War Thunder Soft Aim', ko: 'War Thunder Soft Aim', zh: 'War Thunder Soft Aim', hi: 'War Thunder Soft Aim', id: 'War Thunder Soft Aim', th: 'War Thunder Soft Aim', vi: 'War Thunder Soft Aim', uk: 'War Thunder Soft Aim', cs: 'War Thunder Soft Aim', ro: 'War Thunder Soft Aim', sv: 'War Thunder Soft Aim' },
	'best-cheats': { en: 'Best War Thunder Hacks', es: 'Mejores War Thunder Hacks', fr: 'Meilleures War Thunder Hacks', de: 'Beste War Thunder Hacks', pt: 'Melhores War Thunder Hacks', it: 'Migliori War Thunder Hacks', nl: 'Beste War Thunder Hacks', pl: 'Najlepsze War Thunder Hacks', ru: 'Лучшие War Thunder Hacks', tr: 'En İyi War Thunder Hileleri', ar: 'Best War Thunder Hacks', ja: 'Best War Thunder Hacks', ko: 'Best War Thunder Hacks', zh: 'Best War Thunder Hacks', hi: 'Best War Thunder Hacks', id: 'Best War Thunder Hacks', th: 'Best War Thunder Hacks', vi: 'Best War Thunder Hacks', uk: 'Найкращі War Thunder Hacks', cs: 'Nejlepší War Thunder Hacks', ro: 'Cele mai bune War Thunder Hacks', sv: 'Bästa War Thunder Hacks' },
	'aimbot-hack': { en: 'War Thunder Aimbot Hack', es: 'War Thunder Aimbot Hack', fr: 'War Thunder Aimbot Hack', de: 'War Thunder Aimbot Hack', pt: 'War Thunder Aimbot Hack', it: 'War Thunder Aimbot Hack', nl: 'War Thunder Aimbot Hack', pl: 'War Thunder Aimbot Hack', ru: 'War Thunder Aimbot Hack', tr: 'War Thunder Aimbot Hack', ar: 'War Thunder Aimbot Hack', ja: 'War Thunder Aimbot Hack', ko: 'War Thunder Aimbot Hack', zh: 'War Thunder Aimbot Hack', hi: 'War Thunder Aimbot Hack', id: 'War Thunder Aimbot Hack', th: 'War Thunder Aimbot Hack', vi: 'War Thunder Aimbot Hack', uk: 'War Thunder Aimbot Hack', cs: 'War Thunder Aimbot Hack', ro: 'War Thunder Aimbot Hack', sv: 'War Thunder Aimbot Hack' },
	'esp-hack': { en: 'War Thunder ESP Hack', es: 'War Thunder ESP Hack', fr: 'War Thunder ESP Hack', de: 'War Thunder ESP Hack', pt: 'War Thunder ESP Hack', it: 'War Thunder ESP Hack', nl: 'War Thunder ESP Hack', pl: 'War Thunder ESP Hack', ru: 'War Thunder ESP Hack', tr: 'War Thunder ESP Hack', ar: 'War Thunder ESP Hack', ja: 'War Thunder ESP Hack', ko: 'War Thunder ESP Hack', zh: 'War Thunder ESP Hack', hi: 'War Thunder ESP Hack', id: 'War Thunder ESP Hack', th: 'War Thunder ESP Hack', vi: 'War Thunder ESP Hack', uk: 'War Thunder ESP Hack', cs: 'War Thunder ESP Hack', ro: 'War Thunder ESP Hack', sv: 'War Thunder ESP Hack' },
	'unlock-all': { en: 'War Thunder Unlock All', es: 'War Thunder Unlock All', fr: 'War Thunder Unlock All', de: 'War Thunder Unlock All', pt: 'War Thunder Unlock All', it: 'War Thunder Unlock All', nl: 'War Thunder Unlock All', pl: 'War Thunder Unlock All', ru: 'War Thunder Unlock All', tr: 'War Thunder Unlock All', ar: 'War Thunder Unlock All', ja: 'War Thunder Unlock All', ko: 'War Thunder Unlock All', zh: 'War Thunder Unlock All', hi: 'War Thunder Unlock All', id: 'War Thunder Unlock All', th: 'War Thunder Unlock All', vi: 'War Thunder Unlock All', uk: 'War Thunder Unlock All', cs: 'War Thunder Unlock All', ro: 'War Thunder Unlock All', sv: 'War Thunder Unlock All' },
};

const CTA2_HREF = {
	'war-thunder-esp': '/war-thunder-wallhack/',
	'war-thunder-aimbot': '/war-thunder-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/war-thunder-hacks/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/war-thunder-hacks/',
	wallhack: '/war-thunder-esp/',
	radar: '/war-thunder-esp/',
	'eac-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/war-thunder-hacks/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/war-thunder-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/war-thunder-aimbot/',
	'esp-hack': '/war-thunder-esp/',
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
		title: clampTitle(stripZadeyoFromMeta(`${h1} | War Thunder Hacks`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for War Thunder Hacks — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for warthunderhacks.net and War Thunder licenses.`),
		imageAlt: `war-thunder-hacks ${kind} ESP wallhack Aimbot legal page`,
		galleryTitle: `War Thunder Hacks ${kind} resources`,
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
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on warthunderhacks.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate War Thunder terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@warthunderhacks.net',
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
