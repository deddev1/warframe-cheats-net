import { customerReviews, siteConfig } from './site';
import { rustImages } from './rust';

export const reviewsBasePath = '/reviews/';

export function getReviewPath(slug: string): string {
	return `${reviewsBasePath}${slug}/`;
}

export function absoluteReviewUrl(slug?: string): string {
	return new URL(slug ? getReviewPath(slug) : reviewsBasePath, siteConfig.url).href;
}

/** Unique War Thunder screenshots for each review sitemap entry. */
const reviewImagePaths = [
	rustImages.espWallhack,
	rustImages.aimbotCombat,
	rustImages.radarHack,
	rustImages.cover,
	rustImages.loadoutBuilder,
	rustImages.playerEsp,
	rustImages.squadFight,
	rustImages.headerArt,
	rustImages.cheatsPackage,
	rustImages.battleRoyaleCombat,
] as const;

const reviewIndexOgImage = {
	url: new URL(siteConfig.defaultOgImage, siteConfig.url).href,
	title: 'War Thunder Hacks customer reviews',
	caption: 'War Thunder Hacks buyer reviews for ESP, aimbot, radar, and cloud DMA',
};

function reviewImageForIndex(index: number) {
	const path = reviewImagePaths[index % reviewImagePaths.length];
	return {
		url: new URL(path, siteConfig.url).href,
		title: 'War Thunder Hacks review screenshot',
		caption: 'War Thunder Hacks ESP, aimbot, and radar preview from buyer reviews',
	};
}

/** English review routes for sitemap.xml — /reviews/ index + one URL per review. */
export function getReviewSitemapEntries() {
	const indexLastmod = customerReviews.reduce(
		(max, review) => (review.date > max ? review.date : max),
		customerReviews[0]?.date ?? new Date().toISOString().slice(0, 10),
	);

	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		changefreq: 'daily' | 'weekly' | 'monthly';
		images: { url: string; title: string; caption: string }[];
	}[] = [
		{
			path: reviewsBasePath,
			lastmod: indexLastmod,
			priority: 0.85,
			changefreq: 'weekly',
			images: [reviewIndexOgImage, reviewImageForIndex(0)],
		},
	];

	customerReviews.forEach((review, index) => {
		const image = reviewImageForIndex(index);
		entries.push({
			path: getReviewPath(review.slug),
			lastmod: review.date,
			priority: 0.75,
			changefreq: 'monthly',
			images: [
				{
					url: image.url,
					title: `War Thunder Hacks review by @${review.handle}`,
					caption: review.seoDescription,
				},
			],
		});
	});

	return entries;
}
