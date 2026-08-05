/**
 * Site-wide SEO keyword cluster — optimized for overwatchhacks.com
 */
export const primaryKeyword = 'Overwatch Hacks';

export const siteBrand = 'Overwatch Hacks';
export const siteDomain = 'overwatchhacks.com';
export const siteOrigin = `https://${siteDomain}`;

/** Core keyword targets (title, meta, schema). */
export const metaKeywords = [
	'Overwatch Hacks',
	'overwatch cheats',
	'overwatch esp',
	'overwatch aimbot',
	'overwatch wallhack',
	'undetected overwatch hacks',
	'overwatch hacks 2026',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'Overwatch Hacks 2026 | Undetected ESP & Aimbot';
export const defaultDescription =
	'Overwatch hacks for PC — undetected ESP, aimbot, and wallhack at overwatchhacks.com. Monthly and lifetime plans, setup guides, and anti-cheat update status.';

/** Append brand + domain to page titles when under the SEO limit. */
export function buildPageTitle(topic: string): string {
	const withBrand = `${topic} | Overwatch Hacks`;
	if (withBrand.length <= 60) return withBrand;
	const short = `${topic} | overwatchhacks.com`;
	return short.length <= 60 ? short : topic.slice(0, 60);
}

/** Clamp meta description with primary keyword near the front. */
export function buildPageDescription(body: string): string {
	const lead = body.trim();
	if (lead.toLowerCase().includes('overwatch')) return lead.slice(0, 160);
	return `Overwatch hacks — ${lead}`.slice(0, 160);
}
