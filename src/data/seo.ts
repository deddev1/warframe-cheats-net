/**
 * Site-wide SEO keyword cluster — optimized for warframecheats.net
 */
export const primaryKeyword = 'Warframe Cheats';

export const siteBrand = 'Warframe Cheats';
export const siteDomain = 'warframecheats.net';
export const siteOrigin = `https://${siteDomain}`;

/** Core keyword targets (title, meta, schema). */
export const metaKeywords = [
	'Warframe Cheats',
	'warframe cheats',
	'warframe esp',
	'warframe aimbot',
	'warframe wallhack',
	'undetected warframe cheats',
	'warframe cheats 2026',
] as const;

export const metaKeywordsContent = metaKeywords.join(', ');

export const defaultTitle = 'Warframe Cheats 2026 | Undetected ESP & Aimbot';
export const defaultDescription =
	'Warframe cheats for PC — undetected ESP, aimbot, and wallhack at warframecheats.net. Monthly and lifetime plans, setup guides, and anti-cheat update status.';

/** Append brand + domain to page titles when under the SEO limit. */
export function buildPageTitle(topic: string): string {
	const withBrand = `${topic} | Warframe Cheats`;
	if (withBrand.length <= 60) return withBrand;
	const short = `${topic} | warframecheats.net`;
	return short.length <= 60 ? short : topic.slice(0, 60);
}

/** Clamp meta description with primary keyword near the front. */
export function buildPageDescription(body: string): string {
	const lead = body.trim();
	if (lead.toLowerCase().includes('warframe')) return lead.slice(0, 160);
	return `Warframe cheats — ${lead}`.slice(0, 160);
}
