export const siteConfig = {
	name: 'Warframe Cheats',
	url: 'https://warframecheats.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@warframecheats.net',
	logo: '/images/zadeyo-logo.webp',
	logoRaster: '/images/zadeyo-logo.png',
	logoRasterWidth: 453,
	logoRasterHeight: 551,
	logoAlt: 'Warframe Cheats logo',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fwarframe-cheats',
	defaultOgImage: '/images/warframe-esp-overlay.webp',
} as const;

export const productInfo = {
	name: 'Warframe Cheats',
	shortName: 'WF',
	brand: 'Warframe Cheats',
	tagline: 'Warframe cheats for PC — ESP, aimbot, and wallhack with updates after anti-cheat patches',
	summary:
		'Warframe Cheats is a Windows PC package with ESP, aimbot, and wallhack for Warframe. It works in Steel Path, Sorties, and open world missions, and we update it after anti-cheat and game patches.',
	game: 'Warframe',
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: ['Windows PC', 'Controllers'],
	updateCadence: 'Updates are published when Warframe or anti-cheat patches require maintenance',
	supportHours: 'Support requests are reviewed daily',
	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	],
	currency: 'USD',
	planSummaries: {
		monthly: [
			'ESP, aimbot, wallhack, and radar',
			'30 days access — $35',
			'anti-cheat updates while your license is active',
			'Instant digital delivery on Windows PC',
		],
		lifetime: [
			'ESP, aimbot, wallhack, and radar',
			'One-time $150 — no renewals',
			'anti-cheat updates for as long as you play',
			'Instant digital delivery on Windows PC',
		],
	},
	features: {
		esp: [
			'Frame ESP across Steel Path, Sorties, and open world missions',
			'Enemy Warframe, Sentient, and heavy unit outlines through terrain and obstacles',
			'Ability cooldown and health markers for frames and bosses',
			'Distance readouts and snapline options',
			'Toggleable ESP categories to cut overlay noise',
			'Team and enemy colour coding for squad fights',
		],
		aimbot: [
			'Smooth aim targeting for primaries, secondaries, and melee',
			'Smoothness, FOV, and sensitivity controls',
			'Weak-spot priority and target selection options',
			'Hotkey toggles mid-fight without opening menus',
			'Per-weapon profiles for rifles, shotguns, and snipers',
		],
		radar: [
			'2D radar for enemies outside your line of sight',
			'Directional cues for flanks and spawn pushes',
			'Configurable radar range for early rotations',
		],
		general: [
			'In-client toggles for ESP, radar, and aimbot',
			'Monthly and lifetime licenses',
			'Anti-cheat maintenance notes after Warframe patches',
			'Setup, delivery, and billing support',
		],
	},
} as const;

/** Quick-scan feature list for pricing page — full explanations live on /features/. */
export const productFeatureCategories = [
	{
		title: 'Aimbot Options',
		columns: 1 as const,
		items: [
			'Visibility check',
			'Custom FOV',
			'Draw FOV circle',
			'Draw target line',
			'Custom aim key',
			'Aim mode selection',
			'Aim speed control',
			'Target filter',
			'Weak-spot priority',
			'Smoothness slider',
		],
	},
	{
		title: 'Visual Options',
		columns: 1 as const,
		items: [
			'Warframe ESP',
			'Enemy outline ESP',
			'Skeleton boxes',
			'Head circle marker',
			'View direction line',
			'Name tags',
			'Distance readout',
			'Max distance filter',
			'Health pickup ESP',
			'Sentient & boss ESP',
		],
	},
	{
		title: 'Misc Options',
		columns: 2 as const,
		items: [
			'2D radar overlay',
			'Spawn route cues',
			'In-client toggles',
			'Hotkey profiles',
			'Controller support',
			'Anti-cheat update notes',
			'Mod menu access',
			'Loot & resource markers',
			'Ability cooldown ESP',
			'Custom crosshair',
			'Team colour coding',
			'Steel Path presets',
		],
	},
] as const;

/** Detailed feature explanations for the /features/ page. */
export const productFeatureDetails = [
	{
		id: 'aimbot',
		title: 'Aimbot Options',
		summary:
			'Configurable aim assistance for primaries, secondaries, and melee — tuned for Steel Path, Sorties, and open world missions.',
		items: [
			{
				name: 'Visibility check',
				description: 'Only locks onto targets your Warframe can actually hit — reduces obvious snaps through walls.',
			},
			{
				name: 'Custom FOV',
				description: 'Set how wide the aimbot scans for targets so close fights and sniper lanes both feel natural.',
			},
			{
				name: 'Draw FOV circle',
				description: 'Optional on-screen ring showing the active aimbot radius for quick tuning.',
			},
			{
				name: 'Draw target line',
				description: 'Snapline from crosshair to the current lock target — useful for verifying weak-spot priority.',
			},
			{
				name: 'Custom aim key',
				description: 'Hold or toggle aimbot with a key you choose — works alongside controller bindings.',
			},
			{
				name: 'Aim mode selection',
				description: 'Switch between hold-to-aim, toggle, and always-on profiles per weapon class.',
			},
			{
				name: 'Aim speed control',
				description: 'Control how fast the reticle moves to the target — higher smoothness looks more human.',
			},
			{
				name: 'Target filter',
				description: 'Prioritise closest enemy, lowest health, or heavy units like Sentients and bosses.',
			},
			{
				name: 'Weak-spot priority',
				description: 'Bias locks toward head and weak-point hitboxes on Grineer, Corpus, and Infested units.',
			},
			{
				name: 'Smoothness slider',
				description: 'Fine-tune aim glide so flicks and tracking match your sensitivity and playstyle.',
			},
		],
	},
	{
		id: 'visual',
		title: 'Visual Options',
		summary:
			'ESP and wallhack overlays that surface enemies, loot, and mission threats through terrain and ability effects.',
		items: [
			{
				name: 'Warframe ESP',
				description: 'Highlights friendly and enemy Warframes with boxes, health bars, and distance readouts.',
			},
			{
				name: 'Enemy outline ESP',
				description: 'Clean outlines on Grineer, Corpus, Infested, and Sentient units — even through smoke and cover.',
			},
			{
				name: 'Skeleton boxes',
				description: 'Bone-structure boxes for precise weak-spot reads during fast movement and parkour.',
			},
			{
				name: 'Head circle marker',
				description: 'Circle the head hitbox for melee finishers and precision rifle shots.',
			},
			{
				name: 'View direction line',
				description: 'See which way an enemy is facing before you push a corridor or capture point.',
			},
			{
				name: 'Name tags',
				description: 'Display player and NPC names above ESP boxes during squad and public missions.',
			},
			{
				name: 'Distance readout',
				description: 'Meters-to-target on every box so you know when to swap weapons or abilities.',
			},
			{
				name: 'Max distance filter',
				description: 'Hide far-away clutter — keep overlays readable in open worlds and defense waves.',
			},
			{
				name: 'Health pickup ESP',
				description: 'Mark health orbs and pickups so you can sustain during long Steel Path runs.',
			},
			{
				name: 'Sentient & boss ESP',
				description: 'Dedicated styling for liches, sisters, archons, and Sentient fragments in endgame content.',
			},
		],
	},
	{
		id: 'misc',
		title: 'Misc Options',
		summary:
			'Radar, menu toggles, controller support, and quality-of-life tools bundled with every license.',
		items: [
			{
				name: '2D radar overlay',
				description: 'Minimap-style blips for enemies outside your camera — great for defense and survival.',
			},
			{
				name: 'Spawn route cues',
				description: 'Directional hints when new waves or enemies rotate toward your position.',
			},
			{
				name: 'In-client toggles',
				description: 'Flip ESP, radar, and aimbot on or off mid-mission without alt-tabbing.',
			},
			{
				name: 'Hotkey profiles',
				description: 'Save different bind layouts for mouse/keyboard and controller loadouts.',
			},
			{
				name: 'Controller support',
				description: 'Aimbot and menu navigation tested with Xbox and PlayStation pads on Windows.',
			},
			{
				name: 'Anti-cheat update notes',
				description: 'Maintenance status published on Updates after Digital Extremes patches.',
			},
			{
				name: 'Mod menu access',
				description: 'Full in-game menu for colours, categories, and per-module enable/disable.',
			},
			{
				name: 'Loot & resource markers',
				description: 'Highlight resources, mods, and containers during farm and relic runs.',
			},
			{
				name: 'Ability cooldown ESP',
				description: 'Track enemy ability timers and your own cooldowns during complex boss fights.',
			},
			{
				name: 'Custom crosshair',
				description: 'Replace the default reticle with sizes and colours that match your ESP theme.',
			},
			{
				name: 'Team colour coding',
				description: 'Separate colours for squad, allies, and enemies to avoid friendly fire confusion.',
			},
			{
				name: 'Steel Path presets',
				description: 'One-click ESP/radar profiles tuned for Steel Path enemy density and level scaling.',
			},
		],
	},
] as const;

export const paymentMethods = [
	'Visa',
	'Mastercard',
	'Amex',
	'Discover',
	'PayPal',
	'Google Pay',
	'Apple Pay',
	'Crypto',
] as const;

export const trustSignals = {
	status: 'Online',
	statusNote: 'Warframe Cheats is live for Warframe on Windows PC.',
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: 'Anti-cheat maintenance supported',
} as const;

export const seoLandingPages = [
	{ label: 'Warframe Cheats', href: '/warframe-cheats/' },
	{ label: 'Warframe ESP', href: '/warframe-esp/' },
	{ label: 'Warframe Aimbot', href: '/warframe-aimbot/' },
	{ label: 'Warframe wallhack', href: '/warframe-wallhack/' },
	{ label: 'Undetected status', href: '/warframe-cheats/' },
	{ label: 'Pricing', href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/warframe-cheats/' },
	{ label: 'Aimbot', href: '/warframe-aimbot/' },
	{ label: 'ESP', href: '/warframe-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: 'Warframe update log', href: '/updates/' },
	{ label: 'Contact support', href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: 'Home', href: '/' },
	{ label: 'Warframe Cheats', href: '/warframe-cheats/' },
	{ label: 'ESP', href: '/warframe-esp/' },
	{ label: 'Aimbot', href: '/warframe-aimbot/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const homeFaqs = [
	{
		question: 'What is Warframe Cheats?',
		answer:
			'Warframe Cheats is a Windows PC package for Warframe with ESP, wallhack, and aimbot controls. Licenses include anti-cheat maintenance updates and setup support.',
	},
	{
		question: 'Is Warframe Cheats permanently undetected?',
		answer:
			'No package can promise that. We rebuild after anti-cheat and game patches and post status on Updates. Check there before you load in.',
	},
	{
		question: 'Does this fit Steel Path missions and open world missions?',
		answer:
			'Yes. ESP and radar help you read nearby Warframes, Sentients, and mission objectives; aimbot covers targeting and weak-spot priority. Tuned for solo and squad play.',
	},
	{
		question: 'What is included?',
		answer:
			'Enemy ESP, health pickup markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
	},
	{
		question: 'How are licenses delivered?',
		answer:
			'Digitally after payment confirmation. Timing can vary by payment method — keep your order confirmation if you contact support.',
	},
	{
		question: 'Where do I check updates after a patch?',
		answer:
			'On the Updates page. That is the fastest place to confirm whether a new build is live after a Warframe or EAC patch.',
	},
	{
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email support@warframecheats.net with your order details and a clear description of the issue.',
	},
] as const;

export const seoFaqs = [
	...homeFaqs,
	{
		question: 'What is a Warframe wallhack?',
		answer:
			'A Warframe wallhack is an ESP overlay that shows enemy Warframes and heavy units through terrain. Warframe Cheats wallhack includes distance readouts, team colours, and toggleable categories for Steel Path and open world missions.',
	},
	{
		question: 'Does Warframe Cheats include a radar hack?',
		answer:
			'Yes. Warframe Cheats includes 2D radar-style overlays that highlight nearby threats outside your direct view — useful for reading flanks during team pushes.',
	},
	{
		question: 'How does anti-cheat affect Warframe Cheats?',
		answer:
			'Anti-cheat monitors Warframe on Windows PC. Warframe Cheats publishes maintenance notes after patches that may require a rebuild. Read the maintenance guide page for how updates are handled.',
	},
	{
		question: 'Can I buy undetected Warframe cheats for Windows PC?',
		answer:
			'Yes — Warframe Cheats sells monthly and lifetime licenses for Warframe on Windows PC with ESP, radar, and aimbot. Compare plans on Pricing and review the undetected guide before checkout.',
	},
] as const;

export type CustomerReview = {
	handle: string;
	title: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerStats = [
	{ value: '98%', label: 'Were satisfied with their cheat.' },
	{ value: '92%', label: 'Said the setting up process was easy.' },
	{ value: '86%', label: 'Bought another key after their first purchase.' },
] as const;

export const customerReviews = [
	{
		handle: 'xKrypt0_ARC',
		title: 'soft aim feels clean',
		rating: 5,
		text: 'soft aim feels clean on smgs in Steel Path missions. took me like 20 mins to figure out the menu tho lol. once u get it its smooth',
		short: 'soft aim feels clean on smgs in Steel Path missions. once u get the menu its smooth',
		slug: 'warframe-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_ARC — 5/5 | Warframe Cheats',
		seoDescription:
			'Real Warframe aimbot review from @xKrypt0_ARC: 5/5 for soft aim feel after setup on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	},
	{
		handle: 'extractR4K',
		title: 'esp boxes are actually useful',
		rating: 4,
		text: "esp boxes in mission objectives are actually useful, can see who's holding rooftops before u push. radar could be bigger on 1080p — wish there was a size slider. still worth it for the price",
		short: "esp boxes in mission objectives are actually useful, can see who's holding rooftops before u push. still worth it for the price",
		slug: 'warframe-esp-realistic-review-buildsr4k',
		seoTitle: 'ESP Extraction Review by @extractR4K — 4/5 | Warframe Cheats',
		seoDescription:
			'Warframe ESP review from @extractR4K: 4/5 for ESP player boxes in mission objectives with radar feedback.',
		date: '2026-07-19',
		tag: 'Extraction',
	},
	{
		handle: 'dma_wizard',
		title: 'cloud dma setup was easy',
		rating: 5,
		text: 'switched from a kernel only tool last season. cloud dma setup was easier than i expected, support walked me through the dma part on discord. survived the last patch while my old sub got flagged. lifetime was the move',
		short: 'cloud dma setup was easier than i expected. survived the last patch while my old sub got flagged',
		slug: 'warframe-cloud-dma-review-dma-wizard',
		seoTitle: 'Cloud DMA Review by @dma_wizard — 5/5 | Warframe Cheats',
		seoDescription:
			'Cloud DMA Warframe Cheats review from @dma_wizard: 5/5 after surviving a patch that flagged a kernel-only cheat.',
		date: '2026-06-27',
		tag: 'Cloud DMA',
	},
	{
		handle: 'ctrl_player99',
		title: 'works great on controller',
		rating: 4,
		text: "finally warframe cheats that don't feel like garbage on controller. aimbot with xbox pad works, had to tweak fov a bit. menu navigation with pad is kinda awkward but doable",
		short: "finally warframe cheats that don't feel like garbage on controller. aimbot with xbox pad works",
		slug: 'warframe-controller-aimbot-review-ctrl-player99',
		seoTitle: 'Controller Soft Aim by @ctrl_player99 — 4/5 | Warframe Cheats',
		seoDescription:
			'Controller Warframe cheats review from @ctrl_player99: 4/5 for soft aim on an Xbox pad with FOV tweaks.',
		date: '2026-07-11',
		tag: 'Controller',
	},
	{
		handle: 'stormChaser_07',
		title: 'solid esp when it works',
		rating: 3,
		text: 'features are good when it works. first launch took forever bc windows defender flagged the loader — not their fault but annoying. support replied in like 2 hours and sent a fix. esp and health pickup markers solid in ranked, just wish setup docs were clearer upfront',
		short: 'features are good when it works. esp and health pickup markers solid in ranked, just wish setup docs were clearer upfront',
		slug: 'warframe-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | Warframe Cheats',
		seoDescription:
			'Honest 3/5 Warframe Cheats review from @stormChaser_07: ESP and health pickup markers solid in ranked, but setup docs needed support help.',
		date: '2026-06-15',
		tag: 'Setup',
	},
	{
		handle: 'lootGoblinx',
		title: 'loot esp pays for itself',
		rating: 5,
		text: 'loot esp alone pays for monthly imo. ability cooldown and health markers + distance readouts = way faster extractions',
		short: 'loot esp alone pays for monthly imo. ability cooldown and health markers + distance readouts = way faster extractions',
		slug: 'warframe-ability-esp-review-lootgoblinx',
		seoTitle: 'Ability ESP Review by @lootGoblinx — 5/5 | Warframe Cheats',
		seoDescription:
			'Warframe ability ESP review from @lootGoblinx: 5/5 for ability cooldown and health markers and distance readouts on Steel Path missions.',
		date: '2026-08-01',
	},
	{
		handle: 'rankedGrind42',
		title: 'per-weapon aim profiles',
		rating: 4,
		text: 'been using since early access. soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights. only complaint is updates page could show eta when patches hit, had to wait a day once',
		short: 'soft aim profiles per weapon is nice — smg profile vs ar profile actually makes a diff in close fights',
		slug: 'warframe-aimbot-realistic-review-rankedgrind42',
		seoTitle: 'Ranked Soft Aim by @rankedGrind42 — 4/5 | Warframe Cheats',
		seoDescription:
			'Ranked Warframe aimbot review from @rankedGrind42: 4/5 for per-weapon aimbot profiles with patch-day update feedback.',
		date: '2026-07-07',
		tag: 'Ranked',
	},
	{
		handle: 'vanLifeARC',
		title: 'radar saved me so many times',
		rating: 5,
		text: 'radar saved me so many times during map rotations. seeing the third party before they slide in is huge in squads. boxes + radar combo is clean',
		short: 'radar saved me so many times during map rotations. boxes + radar combo is clean',
		slug: 'warframe-radar-hack-review-vanlifefn',
		seoTitle: 'Radar Hack Review by @vanLifeARC — 5/5 | Warframe Cheats',
		seoDescription:
			'Warframe radar hack review from @vanLifeARC: 5/5 for 2D radar during map rotations and spotting third parties in squads.',
		date: '2026-07-28',
		tag: 'Squads',
	},
	{
		handle: 'patchDayMike',
		title: 'fast updates after patches',
		rating: 4,
		text: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours last patch. was back online next morning.',
		short: 'every cheat goes down on patch day, thats life. difference here is they actually posted on updates within a few hours',
		slug: 'warframe-anti-cheat-update-review-patchdaymike',
		seoTitle: 'Patch Day Review by @patchDayMike — 4/5 | Warframe Cheats',
		seoDescription:
			'Patch-day review from @patchDayMike: 4/5 for how fast Warframe Cheats posts maintenance updates after Warframe patches.',
		date: '2026-06-09',
		tag: 'Updates',
	},
	{
		handle: 'snipezOnly_',
		title: 'sniper profile is chef kiss',
		rating: 5,
		text: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		short: 'sniper soft aim profile + esp for tag = chef kiss. dont @ me',
		slug: 'warframe-sniper-aimbot-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | Warframe Cheats',
		seoDescription:
			'Warframe sniper soft aim review from @snipezOnly_: 5/5 for the sniper aimbot profile paired with ESP tagging.',
		date: '2026-08-01',
	},
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
	displayCount: '3,000+',
} as const;
