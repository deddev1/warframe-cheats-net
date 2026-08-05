/** Page-specific FAQ clusters for FAQ rich results on pillar landing pages. */
export const pageFaqClusters: Partial<
	Record<import('./i18n/routing').PageId, ReadonlyArray<{ question: string; answer: string }>>
> = {
	hacks: [
		{
			question: 'What are War Thunder hacks?',
			answer:
				'War Thunder hacks are Windows PC tools for War Thunder with ESP, wallhack, and aimbot controls. War Thunder Hacks licenses include anti-cheat maintenance updates and setup support.',
		},
		{
			question: 'Are War Thunder hacks permanently undetected?',
			answer:
				'No package can promise that. We rebuild after anti-cheat and game patches and post status on Updates. Check there before you load in.',
		},
		{
			question: 'What is included in the War Thunder Hacks package?',
			answer:
				'Enemy ESP, repair point markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
		},
	],
	'war-thunder-esp': [
		{
			question: 'What is an War Thunder wallhack?',
			answer:
				'An War Thunder wallhack is an ESP overlay that shows enemy tanks and aircraft, artillery strikes, and loot through cover. War Thunder Hacks wallhack includes distance readouts, team colours, and toggleable categories for realistic battles and Arcade Battles.',
		},
		{
			question: 'Does War Thunder Hacks include a radar hack?',
			answer:
				'Yes. War Thunder Hacks includes 2D radar-style overlays that highlight nearby threats outside your direct view — useful for reading flanks during team pushes.',
		},
		{
			question: 'Does this fit realistic battles and Arcade Battles runs?',
			answer:
				'Yes. ESP and radar help you read nearby enemies and loot; aimbot covers the firefight. Tuned for solo and team push play.',
		},
	],
	'war-thunder-aimbot': [
		{
			question: 'What is War Thunder aimbot?',
			answer:
				'War Thunder aimbot is configurable aim assist with smoothness, FOV, and bone priority controls. It ships bundled with ESP and radar in the War Thunder Hacks license for Windows PC.',
		},
		{
			question: 'Can I use War Thunder aimbot with a controller?',
			answer:
				'Yes. War Thunder Hacks supports controller play on Windows PC. Tune FOV and smoothness per weapon profile after setup.',
		},
		{
			question: 'Are War Thunder hacks permanently undetected?',
			answer:
				'No package can promise that. We rebuild after anti-cheat and game patches and post status on Updates. Check there before you load in.',
		},
	],
	pricing: [
		{
			question: 'How are War Thunder Hacks licenses delivered?',
			answer:
				'Digitally after payment confirmation. Timing can vary by payment method — keep your order confirmation if you contact support.',
		},
		{
			question: 'What does the $35/month plan include?',
			answer:
				'The monthly license includes ESP, wallhack overlays, radar, and aimbot controls with anti-cheat maintenance updates for War Thunder on Windows PC.',
		},
		{
			question: 'Is the $150 lifetime license worth it?',
			answer:
				'Lifetime pays off if you play War Thunder across multiple seasons. It includes the same feature stack as monthly with long-term maintenance after patches.',
		},
	],
	features: [
		{
			question: 'What is included in War Thunder Hacks?',
			answer:
				'Enemy ESP, repair point markers, radar cues, and configurable aimbot in one license. See Features, ESP, and Aimbot for control detail.',
		},
		{
			question: 'Does War Thunder Hacks work on Windows PC?',
			answer:
				'Yes — War Thunder Hacks is built for War Thunder on Windows 10 and 11 with in-client toggles for ESP, radar, and aimbot.',
		},
		{
			question: 'How does anti-cheat affect War Thunder Hacks?',
			answer:
				'Anti-cheat monitors War Thunder on Windows PC. War Thunder Hacks publishes maintenance notes after patches that may require a rebuild. Read the maintenance guide page for how updates are handled.',
		},
	],
};

import { productInfo, siteConfig } from './site';
import type { PageId } from './i18n/routing';

const priceValidUntil = '2027-12-31';

export function buildAggregateOffer(canonicalURL: string) {
	return {
		'@type': 'AggregateOffer',
		lowPrice: Math.min(...productInfo.plans.map((p) => p.price)).toFixed(2),
		highPrice: Math.max(...productInfo.plans.map((p) => p.price)).toFixed(2),
		priceCurrency: productInfo.currency,
		offerCount: productInfo.plans.length,
		url: canonicalURL,
		offers: productInfo.plans.map((plan) => ({
			'@type': 'Offer',
			name: `${productInfo.name} ${plan.label}`,
			price: plan.price.toFixed(2),
			priceCurrency: productInfo.currency,
			priceValidUntil,
			availability: 'https://schema.org/InStock',
			url: siteConfig.checkoutUrl,
			seller: { '@id': `${siteConfig.url}/#organization` },
		})),
	};
}

export function buildSoftwareApplicationSchema(canonicalURL: string, heroImage: string) {
	return {
		'@type': 'SoftwareApplication',
		'@id': `${canonicalURL}#software`,
		name: productInfo.name,
		applicationCategory: 'GameApplication',
		operatingSystem: 'Windows',
		description: productInfo.summary,
		url: canonicalURL,
		image: heroImage,
		brand: { '@type': 'Brand', name: productInfo.brand },
		offers: buildAggregateOffer(canonicalURL),
	};
}

export function buildFaqSchemaNode(
	canonicalURL: string,
	faqs: ReadonlyArray<{ question: string; answer: string }>,
) {
	return {
		'@type': 'FAQPage',
		'@id': `${canonicalURL}#faq`,
		mainEntity: faqs.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: { '@type': 'Answer', text: item.answer },
		})),
	};
}

const schemaRichPages = new Set<PageId>([
	'hacks',
	'war-thunder-esp',
	'war-thunder-aimbot',
	'pricing',
	'features',
	'faq',
]);

export function buildPageExtraGraph(
	pageId: PageId,
	canonicalURL: string,
	heroImage: string,
	allFaqs: ReadonlyArray<{ question: string; answer: string }>,
): Record<string, unknown>[] {
	if (!schemaRichPages.has(pageId)) return [];

	const nodes: Record<string, unknown>[] = [];

	if (pageId !== 'faq') {
		nodes.push(buildSoftwareApplicationSchema(canonicalURL, heroImage));
	}

	const faqs = pageId === 'faq' ? allFaqs : (pageFaqClusters[pageId] ?? []);
	if (faqs.length > 0) {
		nodes.push(buildFaqSchemaNode(canonicalURL, faqs));
	}

	return nodes;
}
