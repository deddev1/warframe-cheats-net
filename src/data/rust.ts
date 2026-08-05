import { siteConfig } from './site';

/** Seven unique Overwatch 2 hack screenshots — each used once per gallery, product grid, and sitemap. */

export const rustHeroVideo = {
	src: '/images/overwatch-hacks-hero.webp',
	poster: '/images/overwatch-hacks-hero.webp',
	title: 'Overwatch 2 hacks hero preview',
	ariaLabel: 'Overwatch 2 hacks gameplay preview — undetected ESP and aimbot on PC',
} as const;

export const rustVideo = {
	src: '/images/overwatch-ranked-fight.webp',
	poster: '/images/overwatch-ranked-fight.webp',
	title: 'Overwatch 2 hacks ranked combat preview',
	ariaLabel: 'Overwatch 2 hacks preview — ranked team fight with ESP and aimbot',
	caption: 'Overwatch 2 hacks gameplay with ESP wallhack and soft aim overlays',
} as const;

const ow1 = '/images/overwatch-hacks-hero.webp';
const ow2 = '/images/overwatch-esp-overlay.webp';
const ow3 = '/images/overwatch-esp-bots.webp';
const ow4 = '/images/overwatch-esp-hitbox.webp';
const ow5 = '/images/overwatch-aimbot-menu.webp';
const ow6 = '/images/overwatch-radar-hack.webp';
const ow7 = '/images/overwatch-ranked-fight.webp';

export const rustImages = {
	hero: ow1,
	cover: ow2,
	logo: siteConfig.logo,
	loadoutBuilder: ow5,
	aimbotCombat: ow4,
	squadFight: ow7,
	espWallhack: ow3,
	cheatsPackage: ow2,
	headerArt: ow4,
	battleRoyaleCombat: ow7,
	rebootFight: ow6,
	playerEsp: ow3,
	radarHack: ow6,
	zeroBuildCombat: ow1,
	zeroBuildMode: ow3,
	battleRoyaleIsland: ow5,
	/** Product thumbs — five unique stills; main media is the hero still. */
	product: [
		{ src: ow2, alt: 'Overwatch 2 ESP overlay with enemy hero boxes and health bars' },
		{ src: ow3, alt: 'Overwatch wallhack ESP skeleton boxes on enemy heroes in ranked' },
		{ src: ow4, alt: 'Overwatch aimbot hitbox lock on enemy DPS during team fight' },
		{ src: ow5, alt: 'Overwatch hacks cheat menu with soft aim and FOV controls' },
		{ src: ow6, alt: 'Overwatch radar hack minimap showing flank routes and threats' },
	],
	/** Gallery grid — seven unique Overwatch 2 hack stills, no duplicates. */
	gallery: [
		{ src: ow1, alt: 'Overwatch 2 hacks main menu with ESP, wallhack, and aimbot toggles' },
		{ src: ow2, alt: 'Overwatch 2 ESP overlay showing enemy heroes through map geometry' },
		{ src: ow3, alt: 'Overwatch wallhack ESP with hero skeleton boxes in competitive' },
		{ src: ow4, alt: 'Overwatch aimbot hitbox targeting enemy support in ranked match' },
		{ src: ow5, alt: 'Overwatch hacks settings menu with soft aim profiles and hotkeys' },
		{ src: ow6, alt: 'Overwatch radar hack 2D overlay for reading flanks outside FOV' },
		{ src: ow7, alt: 'Overwatch hacks ranked payload fight with ESP and aimbot active' },
	],
	sitemap: [
		{ src: ow1, title: 'Overwatch Hacks | Undetected ESP & Aimbot', caption: 'Overwatch 2 hacks main menu with ESP and aimbot toggles' },
		{ src: ow2, title: 'Overwatch ESP overlay', caption: 'Overwatch 2 ESP wallhack showing enemy hero positions and health' },
		{ src: ow3, title: 'Overwatch wallhack ESP', caption: 'Overwatch wallhack skeleton boxes on enemy heroes in ranked' },
		{ src: ow4, title: 'Overwatch aimbot hitbox', caption: 'Overwatch aimbot lock on enemy DPS during team fight' },
		{ src: ow5, title: 'Overwatch hacks menu', caption: 'Overwatch hacks cheat menu with soft aim and FOV settings' },
		{ src: ow6, title: 'Overwatch radar hack', caption: 'Overwatch radar hack minimap overlay for flank detection' },
		{ src: ow7, title: 'Overwatch ranked hacks', caption: 'Overwatch hacks ranked team fight with ESP and aimbot' },
	],
} as const;
