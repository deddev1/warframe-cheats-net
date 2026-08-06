import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'War Thunder Hacks 2026 | Undetected ESP & Aimbot',
		description:
			'War Thunder hacks for PC — undetected ESP, aimbot, and wallhack at warthunderhacks.com. Compare monthly and lifetime plans, setup, and anti-cheat updates.',
		h1: 'War Thunder Hacks — ESP, Aimbot & Wallhack for PC',
		intro:
			'A focused Windows PC package for War Thunder: player ESP, aimbot controls, and wallhack overlays with anti-cheat maintenance after major patches.',
		imageAlt: 'War Thunder hacks main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'War Thunder Hacks visuals',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Built for ranked pressure',
				'War Thunder punishes incomplete information. War Thunder Hacks puts ESP, wallhack, and aimbot in one license so you can read capture zones, flank pushes, and team pushes before you commit.',
				`Client and anti-cheat updates come from ${EXT.epic} and ${EXT.eac}. When a patch needs a rebuild, we post status on the <a href="/updates/">Updates page</a> — no permanent “undetected forever” promises.`,
				'Monthly ($35) and lifetime ($150) licenses ship digitally after payment confirmation, with maintenance rebuilds when anti-cheat or game updates require them.',
				'Compare the <a href="/war-thunder-hacks/">War Thunder Hacks guide</a>, <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, and <a href="/war-thunder-hacks/">undetected status</a> pages before checkout.',
			),
			section(
				'One license, clear controls',
				'Instead of stacking separate tools, you get player ESP, repair point markers, radar cues, and aimbot profiles in a single package aimed at Arcade Battles and Realistic Battles play.',
				'Details live on the <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, <a href="/war-thunder-wallhack/">wallhack</a>, and <a href="/features/">features</a> pages — or jump to <a href="/pricing/">Pricing</a> for plans.',
				`On patch mornings, check ${EXT.status}, then confirm our maintenance notes so you are not loading an outdated build.`,
				'Ready? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> handy.',
			),
		],
	},
	'war-thunder-esp': {
		title: 'War Thunder ESP 2026 | Player Boxes & Wallhack',
		description:
			'War Thunder ESP for PC and controllers — player boxes, repair point markers, and distance readouts. Part of our undetected War Thunder Hacks with cloud DMA support.',
		h1: 'War Thunder ESP — Player Boxes & Wallhack',
		intro:
			'Visibility tools for War Thunder. Read enemy squads, vehicles, loot, chests, and distance before you commit to a fight — with toggleable ESP wallhack overlays for Arcade Battles and Realistic Battles.',
		imageAlt: 'War Thunder ESP overlay with vehicle module boxes, health bars, and distance readouts',
		galleryTitle: 'War Thunder ESP overlay visuals',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'War Thunder wallhack guide',
		ctaSecondaryHref: '/war-thunder-wallhack/',
		sections: [
			section(
				'What War Thunder ESP solves in realistic battles',
				'War Thunder maps punish incomplete information. War Thunder Hacks ESP wallhack helps you spot enemy squads early, notice vehicles before they push your position, and mark chests worth the detour.',
				'On realistic battles, capture zones, and realistic battles lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`War Thunder’ live seasons and map updates are published by ${EXT.epic}. When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, vehicle, and module ESP wallhack categories',
				'Toggle enemy player outlines, vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only ranked-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports capture zones and ranked lobbies alike.',
				'Compare category detail on the <a href="/war-thunder-wallhack/">wallhack page</a> and pair visibility with the <a href="/war-thunder-radar/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and chest markers for faster rotations',
					'Vehicle and supply-drop threat cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with anti-cheat maintenance',
				'War Thunder Hacks ESP wallhack is maintained for War Thunder with rebuilds after Gaijin Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/war-thunder-hacks/">EAC bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first ranked block.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/war-thunder-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/war-thunder-hacks/">best War Thunder hacks guide</a> and <a href="/war-thunder-hacks/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'war-thunder-aimbot': {
		title: 'War Thunder Aimbot 2026 | Soft Aim for PC & Controllers',
		description:
			'War Thunder aimbot with soft aim tuning for PC and controllers. FOV, bone priority, and hotkeys bundled with ESP boxes in our War Thunder Hacks package.',
		h1: 'War Thunder Aimbot — Soft Aim for PC & Controllers',
		intro:
			'Configurable Aimbot tools for War Thunder firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'War Thunder hacks cheat menu with soft aim, FOV slider, and bone priority settings',
		galleryTitle: 'War Thunder Aimbot combat previews',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/war-thunder-esp/',
		sections: [
			section(
				'Aimbot tuned for War Thunder combat pace',
				'War Thunder mixes long-range AR fights with close-quarters SMG pushes. War Thunder Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during platoon engagements and overtime rounds.',
				`Weapon balance and season rules change via ${EXT.rust}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for assault rifles, SMGs, and snipers. Switch between long-range AR beams and close-quarters room clears without reopening menus every spawn.',
				'Prefer softer tracking? Read the <a href="/war-thunder-aimbot/">soft aim guide</a>. Want the search term most players use? See <a href="/war-thunder-aimbot/">aimbot hack</a>.',
				'Aimbot ships alongside <a href="/war-thunder-esp/">ESP wallhack</a> and <a href="/war-thunder-radar/">2D radar</a> in the same War Thunder Hacks license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / sniper',
				],
			),
			section(
				'anti-cheat maintenance for undetected Aimbot',
				'War Thunder Hacks rebuilds Aimbot behavior when Gaijin Easy Anti-Cheat or major War Thunder patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/war-thunder-hacks/">anti-cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'War Thunder Hacks Features | ESP, Soft Aim, Cloud DMA',
		description:
			'Full War Thunder Hacks feature list: ESP boxes, soft aim, radar, cloud DMA, and toggles for PC and controllers. Review controls before checkout.',
		h1: 'War Thunder Hacks Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the War Thunder Hacks package for War Thunder on Windows PC — with anti-cheat maintenance after major patches.',
		imageAlt: 'War Thunder ESP overlay with hero boxes and health bars',
		galleryTitle: 'War Thunder Hacks feature gallery',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, vehicle and supply-drop threat cues, loot and chest markers, distance readouts, snaplines, and toggleable ESP categories for ranked-critical overlays only.',
				'Team and enemy colour coding supports capture zones and ranked. Deep-dive the <a href="/war-thunder-esp/">ESP page</a> and <a href="/war-thunder-wallhack/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.epic} season updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and final circles, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live War Thunder sessions. See <a href="/war-thunder-radar/">radar</a> and <a href="/war-thunder-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/features/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and anti-cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. anti-cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@warthunderhacks.com.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/war-thunder-hacks/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'War Thunder Hacks Pricing | $35/mo or $150 Life',
		description:
			'War Thunder Hacks pricing: $35/month or $150 lifetime for ESP, soft aim, boxes, and cloud DMA on PC and controllers. Instant delivery — pick a plan.',
		h1: 'War Thunder Hacks Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected War Thunder Hacks — ESP wallhack, radar hack, and Aimbot for War Thunder on Windows PC. Instant digital delivery after payment.',
		imageAlt: 'War Thunder wallhack ESP showing enemy tanks and aircraft through payload corners',
		galleryTitle: 'War Thunder Hacks package visuals',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime War Thunder Hacks plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with anti-cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected War Thunder Hacks package — ideal if you play War Thunder regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, repair point markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Gaijin Easy Anti-Cheat or major War Thunder patches.',
				`Season calendars and client updates come from ${EXT.rust}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/war-thunder-hacks/">best War Thunder hacks</a>, <a href="/war-thunder-hacks/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'War Thunder Hacks Setup | PC & Controller Guide',
		description:
			'Set up War Thunder Hacks on PC and controllers — activate ESP boxes, soft aim profiles, and cloud DMA. Check EAC updates before your first queue.',
		h1: 'War Thunder Hacks Setup — PC & Controller Guide',
		intro:
			'Install and configure War Thunder Hacks for War Thunder on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify anti-cheat maintenance status before queueing.',
		imageAlt: 'War Thunder aimbot hitbox lock on enemy tank during ranked ground battle',
		galleryTitle: 'War Thunder Hacks setup visuals',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install War Thunder Hacks',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest anti-cheat maintenance build before launching War Thunder.',
				`Also glance at ${EXT.status} if Epic services look unstable on patch day — a platform outage is not a license fault.`,
				'War Thunder Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, loot, and vehicles — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for each module live on <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, and <a href="/features/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/war-thunder-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After War Thunder or Gaijin Easy Anti-Cheat patches',
				'When Embark ships a major War Thunder update or Gaijin Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/war-thunder-hacks/">EAC bypass page</a> and <a href="/war-thunder-hacks/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'War Thunder Hacks Updates | EAC Maintenance Log',
		description:
			'War Thunder Hacks update log: EAC rebuilds for ESP boxes, soft aim, and cloud DMA on PC and controllers. Check status before queueing after patches.',
		h1: 'War Thunder Hacks Updates — Maintenance Log',
		intro:
			'Track anti-cheat maintenance and War Thunder patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: 'War Thunder wallhack ESP skeleton on enemy SPAA hero in realistic battles',
		galleryTitle: 'War Thunder patch and maintenance visuals',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/war-thunder-hacks/',
		sections: [
			section(
				'Why the Updates page matters',
				'War Thunder and Gaijin Easy Anti-Cheat receive frequent patches. War Thunder Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Epic platform health and this page for War Thunder Hacks build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on realistic battles and capture zones.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Gaijin Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/war-thunder-hacks/">EAC bypass guide</a> and <a href="/war-thunder-hacks/">undetected War Thunder hacks</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.rust}, then confirm our rebuild is live before ranked.`,
				'For urgent status questions after an EAC update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'War Thunder Hacks FAQ | ESP, Soft Aim & EAC Answers',
		description:
			'War Thunder Hacks FAQ: ESP boxes, soft aim, cloud DMA, controller support, anti-cheat maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'War Thunder Hacks FAQ — Common Questions',
		intro:
			'Answers about undetected War Thunder Hacks — ESP wallhack, radar hack, Aimbot, anti-cheat maintenance, checkout, and War Thunder compatibility on Windows PC.',
		imageAlt: 'War Thunder radar hack 2D minimap overlay showing flank vectors and enemy tanks and aircraft',
		galleryTitle: 'War Thunder Hacks FAQ visuals',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is War Thunder Hacks?',
				'War Thunder Hacks is an undetected cheat package for War Thunder on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with anti-cheat maintenance updates.',
				'Packages cover realistic battles and capture zones. Explore <a href="/features/">Features</a> for the full control list and <a href="/war-thunder-esp/">ESP</a> / <a href="/war-thunder-aimbot/">Aimbot</a> for module detail.',
				`War Thunder itself is published by ${EXT.epic}. Cheats are third-party tools and may violate Epic’s rules — use is at your own risk.`,
			),
			section(
				'Are War Thunder Hacks undetected in 2026?',
				'War Thunder Hacks is maintained with rebuilds after Gaijin Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/war-thunder-hacks/">undetected War Thunder hacks</a> and the <a href="/war-thunder-hacks/">EAC guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@warthunderhacks.com or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'War Thunder Hacks Support | Help & Contact',
		description:
			'Contact War Thunder Hacks support for licenses, ESP setup, soft aim profiles, and cloud DMA on PC and controllers. Include your order ID for faster help.',
		h1: 'War Thunder Hacks Support — Contact Us',
		intro:
			'Get help with War Thunder Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and anti-cheat maintenance for War Thunder on Windows PC.',
		imageAlt: 'War Thunder hacks ranked capture zone fight with ESP boxes and aimbot active',
		galleryTitle: 'War Thunder Hacks support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after anti-cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. War Thunder Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Embark bans.',
				`Account and game policy questions belong with ${EXT.epic}. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. EAC bypass notes live on the dedicated <a href="/war-thunder-hacks/">Gaijin Easy Anti-Cheat page</a>.',
				'Email: support@warthunderhacks.com',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected War Thunder Hacks 2026 | EAC Safe',
		description:
			'Undetected War Thunder Hacks with anti-cheat maintenance for ESP boxes, soft aim, and cloud DMA on PC and controllers. Check status before you queue.',
		h1: 'Undetected War Thunder Hacks — EAC Maintenance',
		intro:
			'How War Thunder Hacks stays maintained for War Thunder after Gaijin Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: 'War Thunder wallhack ESP skeleton boxes on enemy tanks and aircraft through map geometry',
		galleryTitle: 'Undetected War Thunder Hacks visuals',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'EAC bypass guide',
		ctaSecondaryHref: '/war-thunder-hacks/',
		sections: [
			section(
				'What undetected means for War Thunder Hacks',
				'Undetected War Thunder Hacks means the package is actively maintained against Gaijin Easy Anti-Cheat and major War Thunder patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Embark anti-cheat updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; War Thunder client updates ship through ${EXT.epic}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'anti-cheat maintenance workflow',
				'When Gaijin Easy Anti-Cheat or War Thunder updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for War Thunder outages that can look like product failures.`,
				'Deep technical workflow: <a href="/war-thunder-hacks/">EAC bypass War Thunder guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/war-thunder-hacks/">War Thunder hacks 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'War Thunder Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'War Thunder wallhack ESP with player boxes and repair point markers for PC and controllers. Undetected War Thunder hacks with cloud DMA — learn overlays and buy.',
		h1: 'War Thunder Wallhack — ESP Boxes & Visibility',
		intro:
			'War Thunder wallhack ESP for War Thunder — see players, loot, vehicles, and chests through toggleable wallhack overlays built for Arcade Battles and Realistic Battles.',
		imageAlt: 'War Thunder wallhack ESP skeleton boxes on enemy tank hero in ranked',
		galleryTitle: 'War Thunder wallhack ESP gallery',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'War Thunder ESP page',
		ctaSecondaryHref: '/war-thunder-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A War Thunder wallhack focuses on information — player outlines, loot pins, vehicle threat cues — rather than automatic aiming. War Thunder Hacks bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and endgame circles.',
				'For the broader ESP keyword page see <a href="/war-thunder-esp/">War Thunder ESP</a>; for combat assist see <a href="/war-thunder-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support realistic battles, capture zones, and realistic battles lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.rust}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/war-thunder-radar/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Gaijin Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/war-thunder-hacks/">undetected War Thunder hacks</a> and <a href="/war-thunder-hacks/">EAC bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/war-thunder-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'War Thunder Radar Hack 2026 | 2D Threat Overlay',
		description:
			'War Thunder radar hack for flank awareness on PC and controllers. Bundled with ESP boxes, soft aim, and cloud DMA in our War Thunder Hacks package.',
		h1: 'War Thunder Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for War Thunder — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: 'War Thunder ESP distance markers and hero health readouts in ranked',
		galleryTitle: 'War Thunder radar hack visuals',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/war-thunder-esp/',
		sections: [
			section(
				'Why radar hack matters in War Thunder',
				'Battle royale fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'War Thunder Hacks radar complements <a href="/war-thunder-esp/">ESP wallhack</a> markers during platoon pushes and final-circle scrims.',
				`Mode rules and seasonal changes come from ${EXT.epic}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight endgame circles. Directional cues highlight flanks during building clears and vehicle pushes across realistic battles and capture zones.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/features/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/war-thunder-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive anti-cheat maintenance rebuilds with the full War Thunder Hacks package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major War Thunder patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/war-thunder-hacks/">undetected status</a>.',
			),
		],
	},
	'eac-bypass': {
		title: 'EAC Bypass War Thunder | Hack Maintenance Guide',
		description:
			'How War Thunder Hacks rebuild after anti-cheat patches — ESP boxes, soft aim, and cloud DMA maintenance for PC and controllers. Read before queueing.',
		h1: 'EAC Bypass — War Thunder Hacks Maintenance',
		intro:
			'Understand Gaijin Easy Anti-Cheat maintenance for War Thunder Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after War Thunder security updates.',
		imageAlt: 'War Thunder undetected hacks status with ESP overlay on enemy tanks and aircraft',
		galleryTitle: 'anti-cheat maintenance visuals',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Gaijin Easy Anti-Cheat overview',
				`Gaijin Easy Anti-Cheat is Embark’ anti-cheat for War Thunder on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`War Thunder Hacks monitors EAC patch notes and War Thunder seasonal updates from ${EXT.epic} to schedule module reviews.`,
				'“EAC bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after an EAC patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm War Thunder service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/war-thunder-hacks/">undetected War Thunder hacks</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'EAC bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'War Thunder Hacks 2026 | Hacks with ESP & Cloud DMA',
		description:
			'Best War Thunder hacks 2026: ESP boxes, soft aim, and cloud DMA for PC and controllers. Undetected War Thunder Hacks with anti-cheat maintenance — compare and buy.',
		h1: 'War Thunder Hacks 2026 — ESP, Soft Aim & Cloud DMA',
		intro:
			'The 2026 War Thunder Hacks package for War Thunder — undetected ESP wallhack, radar hack, and Aimbot with anti-cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: 'War Thunder hacks main menu with ESP wallhack and soft aim toggles on PC',
		galleryTitle: 'War Thunder Hacks 2026 gallery',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why War Thunder Hacks leads in 2026',
				'2026 seasons bring new maps, weapons, and Gaijin Easy Anti-Cheat updates. War Thunder Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.rust}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover realistic battles and capture zones loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, repair point markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/war-thunder-hacks/">War Thunder Hacks pillar</a>, <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, <a href="/war-thunder-wallhack/">wallhack</a>, <a href="/war-thunder-radar/">radar</a>, <a href="/war-thunder-hacks/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/war-thunder-hacks/">War Thunder Hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/war-thunder-hacks/">best War Thunder hacks</a> checklist, <a href="/blog/war-thunder-hacks-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@warthunderhacks.com via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'War Thunder Hacks 2026 | Undetected ESP Aimbot Guide',
		description:
			'War Thunder Hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with anti-cheat maintenance. Compare War Thunder hacks options and buy the full package.',
		h1: 'War Thunder Hacks — Undetected ESP, Aimbot & Wallhack',
		intro:
			'War Thunder Hacks for realistic battles and capture zones combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Gaijin Easy Anti-Cheat patches. This is the pillar guide for War Thunder Hacks in 2026.',
		imageAlt: 'War Thunder hacks ranked capture zone fight with ESP boxes and aimbot active',
		galleryTitle: 'War Thunder Hacks gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/war-thunder-hacks/',
		sections: [
			section(
				'What War Thunder Hacks include in 2026',
				'Players searching for War Thunder Hacks usually want visibility and combat tools without stacking separate downloads. War Thunder Hacks bundles player ESP wallhack, repair point markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called War Thunder hacks.',
				'Coverage spans realistic battles and capture zones with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.epic}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'War Thunder Hacks vs War Thunder hacks — same stack, clear pages',
				'Searchers use War Thunder Hacks and War Thunder hacks interchangeably. This pillar focuses on hacks language; the <a href="/war-thunder-hacks/">War Thunder hacks 2026</a> and <a href="/war-thunder-hacks/">best War Thunder hacks</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/war-thunder-esp/">War Thunder ESP</a>, <a href="/war-thunder-aimbot/">War Thunder Aimbot</a>, <a href="/war-thunder-wallhack/">wallhack</a>, <a href="/war-thunder-radar/">radar hack</a>, and <a href="/war-thunder-aimbot/">soft aim</a>.',
				'Blog guides expand each keyword: <a href="/blog/war-thunder-hacks-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/war-thunder-hacks-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-war-thunder-hacks-eac/">undetected EAC notes</a>.',
			),
			section(
				'War Thunder Hacks vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. War Thunder Hacks maps the full extraction loop: read enemy squads, track vehicles and chests, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/pricing/">cheat download</a>, <a href="/features/">mod menu</a>, <a href="/war-thunder-aimbot/">aimbot hack</a>, <a href="/war-thunder-esp/">ESP hack</a>.',
			),
			section(
				'Undetected War Thunder Hacks with anti-cheat maintenance',
				'Undetected War Thunder Hacks require rebuilds after Gaijin Easy Anti-Cheat and major War Thunder patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/war-thunder-hacks/">EAC bypass guide</a> for the practical workflow. Pair with <a href="/war-thunder-hacks/">undetected War Thunder hacks</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'War Thunder Hack Download 2026 | Instant Access',
		description:
			'War Thunder hack download with instant license delivery — ESP boxes, soft aim, and cloud DMA for PC and controllers. Buy, activate, and play.',
		h1: 'War Thunder Hack Download — Instant License Delivery',
		intro:
			'How War Thunder cheat download works for War Thunder — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: 'War Thunder wallhack ESP showing enemy tanks and aircraft through payload corners',
		galleryTitle: 'War Thunder cheat download visuals',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How War Thunder cheat download delivery works',
				'After checkout confirms payment, War Thunder Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Epic services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every War Thunder cheat download includes player ESP wallhack, loot and chest markers, 2D radar overlays, Aimbot profiles, and in-client toggles for Arcade Battles and Realistic Battles.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When War Thunder or Gaijin Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/war-thunder-hacks/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'War Thunder Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'War Thunder mod menu for in-match toggles — ESP boxes, soft aim, radar, and cloud DMA on PC and controllers. Undetected War Thunder Hacks package.',
		h1: 'War Thunder Mod Menu — In-Client Control Panel',
		intro:
			'War Thunder mod menu controls for War Thunder — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your War Thunder session on Windows PC.',
		imageAlt: 'War Thunder hacks mod menu with soft aim profiles and ESP toggles',
		galleryTitle: 'War Thunder mod menu gallery',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a War Thunder mod menu controls',
				'A War Thunder mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. War Thunder Hacks keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, repair point markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of War Thunder.',
				'Control deep-dives: <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, <a href="/war-thunder-radar/">radar</a>.',
			),
			section(
				'Mod menu categories for Arcade Battles and Realistic Battles',
				'Separate ESP wallhack categories for players, loot, chests, and vehicles let you reduce overlay noise during rotations and endgame circles.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.rust} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/war-thunder-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after anti-cheat patches',
				'War Thunder mod menu behavior is rebuilt when Gaijin Easy Anti-Cheat or major War Thunder updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/war-thunder-hacks/">EAC bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'War Thunder Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'War Thunder aimbot settings for natural tracking on PC and controllers. Smoothness, FOV, and bone priority — included in our War Thunder Hacks with ESP boxes.',
		h1: 'War Thunder Soft Aim — Smooth Aimbot Controls',
		intro:
			'War Thunder aimbot settings for War Thunder — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'War Thunder aimbot ESP boxes and FOV circle on enemy tanks and aircraft in Arcade Battles',
		galleryTitle: 'War Thunder aimbot gallery',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/war-thunder-aimbot/',
		sections: [
			section(
				'What War Thunder aimbot means',
				'War Thunder aimbot refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. War Thunder Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during platoon engagements.',
				'Full Aimbot documentation: <a href="/war-thunder-aimbot/">War Thunder Aimbot</a>. Alternate wording: <a href="/war-thunder-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for assault rifles, SMGs, and snipers. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.rust} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/war-thunder-esp/">ESP wallhack</a> and <a href="/war-thunder-radar/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with anti-cheat maintenance',
				'Aimbot modules rebuild after Gaijin Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best War Thunder Hacks 2026 | Buyer Guide',
		description:
			'Best War Thunder Hacks for 2026: ESP boxes, soft aim, cloud DMA, and anti-cheat maintenance on PC and controllers. Use this checklist before checkout.',
		h1: 'Best War Thunder Hacks — 2026 Buyer Guide',
		intro:
			'Compare the best War Thunder hacks for War Thunder in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Gaijin Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: 'War Thunder wallhack ESP showing enemy tanks and aircraft through payload corners',
		galleryTitle: 'Best War Thunder hacks gallery',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the best War Thunder hacks in 2026',
				'The best War Thunder hacks combine active anti-cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'War Thunder Hacks covers realistic battles and capture zones with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best War Thunder hacks feature checklist',
				'Look for player ESP wallhack, repair point markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after War Thunder patches.',
				'Review <a href="/features/">Features</a>, <a href="/war-thunder-hacks/">undetected status</a>, and <a href="/war-thunder-hacks/">War Thunder hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/war-thunder-esp/">ESP</a>, <a href="/war-thunder-aimbot/">Aimbot</a>, <a href="/war-thunder-hacks/">hacks</a>.',
			),
			section(
				'Buying the best War Thunder hacks safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate ${EXT.epic} terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'War Thunder Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'War Thunder aimbot hack with soft aim for PC and controllers. FOV, bone priority, and hotkeys — bundled with ESP boxes in our War Thunder Hacks package.',
		h1: 'War Thunder Aimbot Hack — Soft Aim Assist',
		intro:
			'War Thunder aimbot hack tools for War Thunder — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: 'War Thunder aimbot hack menu with silent aim and bone priority toggles',
		galleryTitle: 'War Thunder aimbot hack gallery',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/war-thunder-aimbot/',
		sections: [
			section(
				'War Thunder aimbot hack vs visibility tools',
				'A War Thunder aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. War Thunder Hacks bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for War Thunder combat pace across Arcade Battles and Realistic Battles.',
				'Prefer softer tracking language? See <a href="/war-thunder-aimbot/">soft aim</a>. Full settings: <a href="/war-thunder-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or final circles.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.rust} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Gaijin Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/war-thunder-hacks/">EAC bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/war-thunder-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'War Thunder ESP Hack 2026 | Player Boxes & Loot',
		description:
			'War Thunder ESP hack with player boxes and repair point markers for PC and controllers. Undetected War Thunder hacks with cloud DMA — see overlays and buy.',
		h1: 'War Thunder ESP Hack — Player Boxes Guide',
		intro:
			'War Thunder ESP hack overlays for War Thunder — player outlines, vehicle threat cues, loot and chest markers with distance readouts across realistic battles and capture zones.',
		imageAlt: 'War Thunder ESP hack with hero skeleton, bounding box, and ult tracking labels',
		galleryTitle: 'War Thunder ESP hack gallery',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/war-thunder-esp/',
		sections: [
			section(
				'What a War Thunder ESP hack shows',
				'A War Thunder ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during platoon pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/war-thunder-esp/">War Thunder ESP</a>. Wallhack wording: <a href="/war-thunder-wallhack/">wallhack</a>.',
			),
			section(
				'ESP hack categories for realistic battles',
				'Toggle player ESP hack, repair point markers, chest pins, and vehicle cues independently so only ranked-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports capture zones and ranked.',
				`POI and loot changes publish through ${EXT.epic} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with anti-cheat maintenance',
				'ESP hack modules rebuild after Gaijin Easy Anti-Cheat and War Thunder patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/war-thunder-radar/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/war-thunder-hacks/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'War Thunder Unlock All 2026 | What It Really Means',
		description:
			'War Thunder unlock all explained vs real War Thunder Hacks — ESP boxes, soft aim, and cloud DMA for PC and controllers. Know what you are buying.',
		h1: 'War Thunder Unlock All — What Players Search For',
		intro:
			'War Thunder unlock all is a common search term for War Thunder — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools War Thunder Hacks actually provides on Windows PC.',
		imageAlt: 'War Thunder ESP boxes and distances on enemy tanks and aircraft in Realistic Battle',
		galleryTitle: 'War Thunder unlock all guide visuals',
		ctaPrimary: 'Buy War Thunder Hacks',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What War Thunder unlock all usually means',
				'War Thunder unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'War Thunder Hacks focuses on in-match awareness — player ESP, repair point markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and Battle Pass items are sold through ${EXT.rust}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, vehicles, and loot chests during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and chest markers speed BR rotations — see the <a href="/war-thunder-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/war-thunder-hacks/">War Thunder Hacks</a> and <a href="/war-thunder-hacks/">best War Thunder hacks</a>.',
			),
			section(
				'Buying War Thunder Hacks for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for War Thunder on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Gaijin Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | War Thunder Hacks',
		description:
			'Privacy policy for War Thunder Hacks. How we handle support emails, order data, and checkout for War Thunder hacks licenses on warthunderhacks.com.',
		h1: 'War Thunder Hacks Privacy Policy',
		intro: 'How War Thunder Hacks handles information when you browse warthunderhacks.com or contact support about a War Thunder license.',
		imageAlt: 'War Thunder ESP overlay visual for privacy policy page',
		galleryTitle: 'War Thunder Hacks legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual War Thunder Hacks customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@warthunderhacks.com with your request details.',
				'Policy updates publish on this page. Continued use of warthunderhacks.com after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | War Thunder Hacks',
		description:
			'Refund policy for War Thunder Hacks. Digital delivery terms and eligibility for War Thunder Hacks packages with ESP, soft aim, and cloud DMA.',
		h1: 'War Thunder Hacks Refund Policy',
		intro:
			'Refund terms for War Thunder Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for War Thunder.',
		imageAlt: 'War Thunder ESP overlay visual for refund policy page',
		galleryTitle: 'War Thunder Hacks billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'War Thunder Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@warthunderhacks.com with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | War Thunder Hacks Rules',
		description:
			'Terms of use for warthunderhacks.com and War Thunder Hacks licenses. Usage rules, anti-cheat risk, and liability for PC and controller cheats.',
		h1: 'War Thunder Hacks Terms of Use',
		intro: 'Terms governing use of warthunderhacks.com and War Thunder Hacks licenses for War Thunder on Windows PC.',
		imageAlt: 'War Thunder ESP overlay visual for terms of use page',
		galleryTitle: 'War Thunder Hacks legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using War Thunder Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for War Thunder on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in War Thunder may violate ${EXT.epic} terms and result in account penalties. War Thunder Hacks provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/war-thunder-hacks/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@warthunderhacks.com for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
