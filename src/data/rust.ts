import { siteConfig } from './site';

/** Seven unique War Thunder hack screenshots — each used once per gallery, product grid, and sitemap. */

export const rustHeroVideo = {
	src: '/images/war-thunder-hacks-hero.webp',
	poster: '/images/war-thunder-hacks-hero.webp',
	title: 'War Thunder hacks hero preview',
	ariaLabel: 'War Thunder hacks gameplay preview — undetected ESP and aimbot on PC',
} as const;

export const rustVideo = {
	src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/ef/fafa.mp4',
	poster: '/images/war-thunder-hacks-video-poster.webp',
	title: 'War Thunder hacks Realistic Battle preview',
	ariaLabel: 'War Thunder hacks preview — ground battle with ESP and aimbot',
	caption: 'War Thunder hacks gameplay with ESP wallhack and aimbot overlays',
} as const;

/** Homepage product card — click-to-play preview (poster = 5th video frame). */
export const productPreviewVideo = rustVideo;

const wt1 = '/images/war-thunder-hacks-hero.webp';
const wt2 = '/images/war-thunder-esp-overlay.webp';
const wt3 = '/images/war-thunder-esp-tanks.webp';
const wt4 = '/images/war-thunder-esp-modules.webp';
const wt5 = '/images/war-thunder-aimbot-menu.webp';
const wt6 = '/images/war-thunder-radar-hack.webp';
const wt7 = '/images/war-thunder-battle.webp';

export const rustImages = {
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
	battleRoyaleIsland: wt5,
	/** Product thumbs — five unique stills; main media is the hero still. */
	product: [
		{ src: wt2, alt: 'War Thunder ESP overlay with enemy tank boxes and module health bars' },
		{ src: wt3, alt: 'War Thunder wallhack ESP module boxes on enemy vehicles in Realistic Battles' },
		{ src: wt4, alt: 'War Thunder aimbot lead calculator lock on enemy tank turret during ground battle' },
		{ src: wt5, alt: 'War Thunder hacks cheat menu with aimbot, ballistic prediction, and FOV controls' },
		{ src: wt6, alt: 'War Thunder radar hack 2D overlay showing flank vectors and enemy aircraft' },
	],
	/** Gallery grid — seven unique War Thunder hack stills, no duplicates. */
	gallery: [
		{ src: wt1, alt: 'War Thunder hacks main menu with ESP, wallhack, and aimbot toggles' },
		{ src: wt2, alt: 'War Thunder ESP overlay showing enemy tanks and aircraft through terrain' },
		{ src: wt3, alt: 'War Thunder wallhack ESP with vehicle module boxes in Realistic Battles' },
		{ src: wt4, alt: 'War Thunder aimbot ballistic prediction targeting enemy tank weak spots' },
		{ src: wt5, alt: 'War Thunder hacks settings menu with aimbot profiles and hotkeys' },
		{ src: wt6, alt: 'War Thunder radar hack 2D overlay for reading flanks outside FOV' },
		{ src: wt7, alt: 'War Thunder hacks capture zone fight with ESP and aimbot active' },
	],
	sitemap: [
		{ src: wt1, title: 'War Thunder Hacks | Undetected ESP & Aimbot', caption: 'War Thunder hacks main menu with ESP and aimbot toggles' },
		{ src: wt2, title: 'War Thunder ESP overlay', caption: 'War Thunder ESP wallhack showing enemy tank positions and module health' },
		{ src: wt3, title: 'War Thunder wallhack ESP', caption: 'War Thunder wallhack module boxes on enemy vehicles in Realistic Battles' },
		{ src: wt4, title: 'War Thunder aimbot lead calculator', caption: 'War Thunder aimbot lock on enemy tank turret during ground battle' },
		{ src: wt5, title: 'War Thunder hacks menu', caption: 'War Thunder hacks cheat menu with aimbot and ballistic prediction settings' },
		{ src: wt6, title: 'War Thunder radar hack', caption: 'War Thunder radar hack overlay for flank and aircraft detection' },
		{ src: wt7, title: 'War Thunder Realistic Battle hacks', caption: 'War Thunder hacks capture zone fight with ESP and aimbot' },
	],
} as const;
