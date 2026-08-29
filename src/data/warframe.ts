import { siteConfig } from './site';

/** Seven unique Warframe cheat screenshots — each used once per gallery, product grid, and sitemap. */

export const warframeHeroVideo = {
	src: '/images/warframe-cheats-hero.webp',
	poster: '/images/warframe-cheats-hero.webp',
	title: 'Warframe cheats hero preview',
	ariaLabel: 'Warframe cheats gameplay preview — undetected ESP and aimbot on PC',
} as const;

export const warframeVideo = {
	src: '/videos/warframe-cheats-preview.mp4',
	poster: '/images/warframe-cheats-video-poster.webp',
	title: 'Warframe cheats Steel Path mission preview',
	ariaLabel: 'Warframe cheats preview — mission fight with ESP and aimbot',
	caption: 'Warframe cheats gameplay with ESP wallhack and aimbot overlays',
} as const;

/** Homepage product card — click-to-play preview (poster = 5th video frame). */
export const productPreviewVideo = warframeVideo;

const wt1 = '/images/warframe-cheats-hero.webp';
const wt2 = '/images/warframe-esp-overlay.webp';
const wt3 = '/images/warframe-esp-enemies.webp';
const wt4 = '/images/warframe-esp-modules.webp';
const wt5 = '/images/warframe-aimbot-menu.webp';
const wt6 = '/images/warframe-radar-hack.webp';
const wt7 = '/images/warframe-mission.webp';

export const warframeImages = {
	hero: wt1,
	cover: wt2,
	logo: siteConfig.logo,
	loadoutBuilder: wt5,
	aimbotCombat: wt4,
	squadFight: wt7,
	espWallhack: wt3,
	cheatsPackage: wt2,
	headerArt: wt4,
	battleRoyaleCombat: wt7,
	rebootFight: wt6,
	playerEsp: wt3,
	radarHack: wt6,
	zeroBuildCombat: wt1,
	zeroBuildMode: wt3,
	openWorldTileset: wt5,
	/** Product thumbs — five unique stills; main media is the hero still. */
	product: [
		{ src: wt2, alt: 'Warframe ESP overlay with enemy unit boxes and health bars' },
		{ src: wt3, alt: 'Warframe wallhack ESP outline boxes on Grineer and Corpus units in Steel Path missions' },
		{ src: wt4, alt: 'Warframe aimbot lock on enemy weak spots during a mission fight' },
		{ src: wt5, alt: 'Warframe cheats menu with aimbot, targeting, and FOV controls' },
		{ src: wt6, alt: 'Warframe radar hack 2D overlay showing spawn routes and nearby enemies' },
	],
	/** Gallery marquee — seven unique Warframe cheat stills with simple page URLs. */
	gallery: [
		{ src: wt1, alt: 'Warframe cheats main menu with ESP, wallhack, and aimbot toggles', href: '/warframe-cheats/' },
		{ src: wt2, alt: 'Warframe ESP overlay showing Grineer, Corpus, and Sentient units through terrain', href: '/warframe-esp/' },
		{ src: wt3, alt: 'Warframe wallhack ESP with enemy outline boxes in Steel Path missions', href: '/warframe-wallhack/' },
		{ src: wt4, alt: 'Warframe aimbot targeting enemy weak spots', href: '/warframe-aimbot/' },
		{ src: wt5, alt: 'Warframe cheats settings menu with aimbot profiles and hotkeys', href: '/features/' },
		{ src: wt6, alt: 'Warframe radar hack 2D overlay for reading flanks outside FOV', href: '/warframe-radar/' },
		{ src: wt7, alt: 'Warframe cheats objective fight with ESP and aimbot active', href: '/warframe-cheats/' },
	],
	sitemap: [
		{ src: wt1, title: 'Warframe Cheats | Undetected ESP & Aimbot', caption: 'Warframe cheats main menu with ESP and aimbot toggles' },
		{ src: wt2, title: 'Warframe ESP overlay', caption: 'Warframe ESP wallhack showing enemy unit positions and health' },
		{ src: wt3, title: 'Warframe wallhack ESP', caption: 'Warframe wallhack outline boxes on Grineer and Corpus units in Steel Path missions' },
		{ src: wt4, title: 'Warframe aimbot targeting', caption: 'Warframe aimbot lock on enemy weak spots during a mission fight' },
		{ src: wt5, title: 'Warframe cheats menu', caption: 'Warframe cheats menu with aimbot and targeting settings' },
		{ src: wt6, title: 'Warframe radar hack', caption: 'Warframe radar hack overlay for flank and enemy detection' },
		{ src: wt7, title: 'Warframe Steel Path mission cheats', caption: 'Warframe cheats objective fight with ESP and aimbot' },
	],
} as const;
