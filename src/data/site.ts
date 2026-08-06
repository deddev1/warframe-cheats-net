export const siteConfig = {
	name: 'War Thunder Hacks',
	url: 'https://warthunderhacks.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@warthunderhacks.com',
	logo: '/images/zadeyo-logo.webp',
	logoRaster: '/images/zadeyo-logo.png',
	logoRasterWidth: 453,
	logoRasterHeight: 551,
	logoAlt: 'War Thunder Hacks logo',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fwar-thunder-cheats',
	defaultOgImage: '/images/war-thunder-esp-overlay.webp',
} as const;

export const productInfo = {
	name: 'War Thunder Hacks',
	shortName: 'WT',
	brand: 'War Thunder Hacks',
	tagline: 'Undetected War Thunder hacks for PC — tank ESP, aimbot, and radar with EAC update support',
	summary:
		'War Thunder Hacks is a Windows PC package for ESP, aimbot, and wallhack in War Thunder. Built for Realistic Battles, air RB, and ground RB with maintenance after EAC and game patches.',
	game: 'War Thunder',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC', 'Controllers'],
	updateCadence: 'Updates are published when War Thunder or anti-cheat patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	features: {
		esp: [
			'Vehicle ESP across ground RB, air RB, and naval battles',
			'Enemy tank, aircraft, and ship outlines through terrain and smoke',
			'Module status markers for turret, engine, transmission, and crew',
			'Distance readouts and snapline options',
			'Toggleable ESP categories to cut overlay noise',
			'Team and enemy colour coding for platoon engagements',
		],
		aimbot: [
			'Ballistic lead calculator for tank cannons and aircraft guns',
			'Smoothness, FOV, and sensitivity controls',
			'Weak-spot priority and target selection options',
			'Hotkey toggles mid-fight without opening menus',
			'Per-vehicle profiles for ground, air, and naval weapons',
		],
		radar: [
			'2D radar for enemies outside your line of sight',
			'Directional cues for flanks and spawn pushes',
			'Configurable radar range for early rotations',
		],
		general: [
			'In-client toggles for ESP, radar, and aimbot',
			'Monthly and lifetime licenses',
			'Anti-cheat maintenance notes after War Thunder patches',
			'Setup, delivery, and billing support',
		],
	},
} as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'War Thunder Hacks is live for War Thunder on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'Anti-cheat maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'War Thunder Hacks', href: '/war-thunder-hacks/' },
	{ label: 'War Thunder ESP', href: '/war-thunder-esp/' },
	{ label: 'War Thunder Aimbot', href: '/war-thunder-aimbot/' },
	{ label: 'War Thunder wallhack', href: '/war-thunder-wallhack/' },
	{ label: 'Undetected status', href: '/war-thunder-hacks/' },
	{ label: 'Pricing', href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Hacks', href: '/war-thunder-hacks/' },
	{ label: 'Aimbot', href: '/war-thunder-aimbot/' },
	{ label: 'ESP', href: '/war-thunder-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'War Thunder update log', href: '/updates/' },
	{ label: 'Contact support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Home', href: '/' },
	{ label: 'War Thunder Hacks', href: '/war-thunder-hacks/' },
	{ label: 'ESP', href: '/war-thunder-esp/' },
	{ label: 'Aimbot', href: '/war-thunder-aimbot/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		question: 'What is War Thunder Hacks?',
		answer:
			'War Thunder Hacks is a Windows PC package for War Thunder with ESP, wallhack, and aimbot controls. Licenses include anti-cheat maintenance updates and setup support.',
	},
	{
		question: 'Is War Thunder Hacks permanently undetected?',
		answer:
			'No package can promise that. We rebuild after anti-cheat and game patches and post status on Updates. Check there before you load in.',
	},
	{
		question: 'Does this fit Realistic Battles and Arcade Battles?',
		answer:
			'Yes. ESP and radar help you read nearby tanks, aircraft, and capture zones; aimbot covers gunnery and lead calculation. Tuned for solo and platoon play.',
	},
	{
		question: 'What is included?',
		answer:
			'Enemy ESP, repair point markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
	},
	{
		question: 'How are licenses delivered?',
		answer:
			'Digitally after payment confirmation. Timing can vary by payment method — keep your order confirmation if you contact support.',
	},
	{
		question: 'Where do I check updates after a patch?',
		answer:
			'On the Updates page. That is the fastest place to confirm whether a new build is live after a War Thunder or EAC patch.',
	},
	{
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email support@warthunderhacks.com with your order details and a clear description of the issue.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
	{
		question: 'What is a War Thunder wallhack?',
		answer:
			'A War Thunder wallhack is an ESP overlay that shows enemy tanks, aircraft, and ships through terrain. War Thunder Hacks wallhack includes distance readouts, team colours, and toggleable categories for Realistic and Arcade Battles.',
	},
	{
		question: 'Does War Thunder Hacks include a radar hack?',
		answer:
			'Yes. War Thunder Hacks includes 2D radar-style overlays that highlight nearby threats outside your direct view — useful for reading flanks during team pushes.',
	},
	{
		question: 'How does anti-cheat affect War Thunder Hacks?',
		answer:
			'Anti-cheat monitors War Thunder on Windows PC. War Thunder Hacks publishes maintenance notes after patches that may require a rebuild. Read the maintenance guide page for how updates are handled.',
	},
	{
		question: 'Can I buy undetected War Thunder hacks for Windows PC?',
		answer:
			'Yes — War Thunder Hacks sells monthly and lifetime licenses for War Thunder on Windows PC with ESP, radar, and aimbot. Compare plans on Pricing and review the undetected guide before checkout.',
	},
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	{
		handle: 'xKrypt0_ARC',
		rating: 5,
		text: 'soft aim feels clean on smgs in Realistic Battles. took me like 20 mins to figure out the menu tho lol. once u get it its smooth',
		short: 'soft aim feels clean on smgs in Realistic Battles. once u get the menu its smooth',
		slug: 'war-thunder-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_ARC — 5/5 | War Thunder Hacks',
		seoDescription:
			'Real War Thunder aimbot review from @xKrypt0_ARC: 5/5 for soft aim feel after setup on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	},
	{
		handle: 'extractR4K',
		rating: 4,
		text: "esp boxes in capture zones are actually useful, can see who's holding rooftops before u push. radar could be bigger on 1080p — wish there was a size slider. still worth it for the price",
		short: "esp boxes in capture zones are actually useful, can see who's holding rooftops before u push. still worth it for the price",
		slug: 'war-thunder-esp-realistic-review-buildsr4k',
		seoTitle: 'ESP Extraction Review by @extractR4K — 4/5 | War Thunder Hacks',
		seoDescription:
			'War Thunder ESP review from @extractR4K: 4/5 for ESP player boxes in capture zones with radar feedback.',
		date: '2026-07-19',
		tag: 'Extraction',
	},
	{
		handle: 'dma_wizard',
		rating: 5,
		text: 'switched from a kernel only tool last season. cloud dma setup was easier than i expected, support walked me through the dma part on discord. survived the last patch while my old sub got flagged. lifetime was the move',
		short: 'cloud dma setup was easier than i expected. survived the last patch while my old sub got flagged',
		slug: 'war-thunder-cloud-dma-review-dma-wizard',
		seoTitle: 'Cloud DMA Review by @dma_wizard — 5/5 | War Thunder Hacks',
		seoDescription:
			'Cloud DMA War Thunder Hacks review from @dma_wizard: 5/5 after surviving a patch that flagged a kernel-only cheat.',
		date: '2026-06-27',
		tag: 'Cloud DMA',
	},
	{
		handle: 'ctrl_player99',
		rating: 4,
		text: "finally war thunder hacks that don't feel like garbage on controller. aimbot with xbox pad works, had to tweak fov a bit. menu navigation with pad is kinda awkward but doable",
		short: "finally war thunder hacks that don't feel like garbage on controller. aimbot with xbox pad works",
		slug: 'war-thunder-controller-aimbot-review-ctrl-player99',
		seoTitle: 'Controller Soft Aim by @ctrl_player99 — 4/5 | War Thunder Hacks',
		seoDescription:
			'Controller War Thunder hacks review from @ctrl_player99: 4/5 for soft aim on an Xbox pad with FOV tweaks.',
		date: '2026-07-11',
		tag: 'Controller',
	},
	{
		handle: 'stormChaser_07',
		rating: 3,
		text: 'features are good when it works. first launch took forever bc windows defender flagged the loader — not their fault but annoying. support replied in like 2 hours and sent a fix. esp and repair point markers solid in ranked, just wish setup docs were clearer upfront',
		short: 'features are good when it works. esp and repair point markers solid in ranked, just wish setup docs were clearer upfront',
		slug: 'war-thunder-hack-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | War Thunder Hacks',
		seoDescription:
			'Honest 3/5 War Thunder Hacks review from @stormChaser_07: ESP and repair point markers solid in ranked, but setup docs needed support help.',
		date: '2026-06-15',
		tag: 'Setup',
	},
	{
		handle: 'lootGoblinx',
		rating: 5,
		text: 'loot esp alone pays for monthly imo. reload and module status markers + distance readouts = way faster extractions',
		short: 'loot esp alone pays for monthly imo. reload and module status markers + distance readouts = way faster extractions',
		slug: 'war-thunder-module-esp-review-lootgoblinx',
		seoTitle: 'Module ESP Review by @lootGoblinx — 5/5 | War Thunder Hacks',
		seoDescription:
			'War Thunder module ESP review from @lootGoblinx: 5/5 for reload and module status markers and distance readouts on Realistic Battles.',
		date: '2026-08-01',
	},
	{
		handle: 'rankedGrind42',
		rating: 4,
		text: 'been using since early access. soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights. only complaint is updates page could show eta when patches hit, had to wait a day once',
		short: 'soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights',
		slug: 'war-thunder-aimbot-realistic-review-rankedgrind42',
		seoTitle: 'Ranked Soft Aim by @rankedGrind42 — 4/5 | War Thunder Hacks',
		seoDescription:
			'Ranked War Thunder aimbot review from @rankedGrind42: 4/5 for per-weapon aimbot profiles with patch-day update feedback.',
		date: '2026-07-07',
		tag: 'Ranked',
	},
	{
		handle: 'vanLifeARC',
		rating: 5,
		text: 'radar saved me so many times during map rotations. seeing the third party before they slide in is huge in squads. boxes + radar combo is clean',
		short: 'radar saved me so many times during map rotations. boxes + radar combo is clean',
		slug: 'war-thunder-radar-hack-review-vanlifefn',
		seoTitle: 'Radar Hack Review by @vanLifeARC — 5/5 | War Thunder Hacks',
		seoDescription:
			'War Thunder radar hack review from @vanLifeARC: 5/5 for 2D radar during map rotations and spotting third parties in squads.',
		date: '2026-07-28',
		tag: 'Squads',
	},
	{
		handle: 'patchDayMike',
		rating: 4,
		text: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours last patch. was back online next morning.',
		short: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours',
		slug: 'war-thunder-anti-cheat-update-review-patchdaymike',
		seoTitle: 'Patch Day Review by @patchDayMike — 4/5 | War Thunder Hacks',
		seoDescription:
			'Patch-day review from @patchDayMike: 4/5 for how fast War Thunder Hacks posts maintenance updates after War Thunder patches.',
		date: '2026-06-09',
		tag: 'Updates',
	},
	{
		handle: 'snipezOnly_',
		rating: 5,
		text: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		short: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		slug: 'war-thunder-sniper-aimbot-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | War Thunder Hacks',
		seoDescription:
			'War Thunder sniper soft aim review from @snipezOnly_: 5/5 for the sniper aimbot profile paired with ESP tagging.',
		date: '2026-08-01',
	},
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
