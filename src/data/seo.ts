/**
 * Site-wide SEO keyword cluster — optimized for warthunderhacks.com
 */
export const primaryKeyword = 'War Thunder Hacks';

export const siteBrand = 'War Thunder Hacks';
export const siteDomain = 'warthunderhacks.com';
export const siteOrigin = `https://${siteDomain}`;

/** Core keyword targets (title, meta, schema). */
export const metaKeywords = [
	'War Thunder Hacks',
	'war thunder cheats',
	'war thunder esp',
	'war thunder aimbot',
	'war thunder wallhack',
	'undetected war thunder hacks',
	'war thunder hacks 2026',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'War Thunder Hacks 2026 | Undetected ESP & Aimbot';
export const defaultDescription =
	'War Thunder hacks for PC — undetected ESP, aimbot, and wallhack at warthunderhacks.com. Monthly and lifetime plans, setup guides, and anti-cheat update status.';

/** Append brand + domain to page titles when under the SEO limit. */
export function buildPageTitle(topic: string): string {
	const withBrand = `${topic} | War Thunder Hacks`;
	if (withBrand.length <= 60) return withBrand;
	const short = `${topic} | warthunderhacks.com`;
	return short.length <= 60 ? short : topic.slice(0, 60);
}

/** Clamp meta description with primary keyword near the front. */
export function buildPageDescription(body: string): string {
	const lead = body.trim();
	if (lead.toLowerCase().includes('war thunder')) return lead.slice(0, 160);
	return `War Thunder hacks — ${lead}`.slice(0, 160);
}
