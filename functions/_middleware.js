const CANONICAL_ORIGIN = 'https://overwatchhacks.com';
const APEX_HOST = 'overwatchhacks.com';
const WWW_HOST = 'www.overwatchhacks.com';

/** Old hosts → canonical apex (301). Never include the apex host itself. */
const LEGACY_HOSTS = new Set([
	'arcraidershacks.net',
	'www.arcraidershacks.net',
	'arcraidershacks.com',
	'www.arcraidershacks.com',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
]);

// Keep in sync with public/_redirects (which preserves query strings by default).
// All targets are final canonical URLs — no chains/loops.
const PATH_REDIRECTS = {
	'/arc-raiders-radar/': '/overwatch-radar/',
	'/arc-raiders-radar': '/overwatch-radar/',
	'/arc-raiders-wallhack/': '/overwatch-wallhack/',
	'/arc-raiders-wallhack': '/overwatch-wallhack/',
	'/arc-raiders-aimbot/': '/overwatch-aimbot/',
	'/arc-raiders-aimbot': '/overwatch-aimbot/',
	'/arc-raiders-esp/': '/overwatch-esp/',
	'/arc-raiders-esp': '/overwatch-esp/',
	'/arc-raiders-hacks/': '/overwatch-hacks/',
	'/arc-raiders-hacks': '/overwatch-hacks/',
	'/sitemap-0.xml': '/sitemap.xml',
	'/overwatch-cheats': '/',
	'/overwatch-cheats/': '/',
	'/fortnite-cheats': '/',
	'/fortnite-cheats/': '/',
	'/fortnite-hacks': '/overwatch-hacks/',
	'/fortnite-hacks/': '/overwatch-hacks/',
	'/fortnite-aimbot': '/overwatch-aimbot/',
	'/fortnite-aimbot/': '/overwatch-aimbot/',
	'/fortnite-esp': '/overwatch-esp/',
	'/fortnite-esp/': '/overwatch-esp/',
	'/fortnite-wallhack': '/overwatch-wallhack/',
	'/fortnite-wallhack/': '/overwatch-wallhack/',
	'/undetected-fortnite-cheats': '/overwatch-hacks/',
	'/undetected-fortnite-cheats/': '/overwatch-hacks/',
	'/eac-bypass-fortnite': '/overwatch-hacks/',
	'/eac-bypass-fortnite/': '/overwatch-hacks/',
	'/eac-bypass': '/overwatch-hacks/',
	'/eac-bypass/': '/overwatch-hacks/',
	'/warzone-aimbot': '/overwatch-aimbot/',
	'/warzone-aimbot/': '/overwatch-aimbot/',
	'/warzone-esp': '/overwatch-esp/',
	'/warzone-esp/': '/overwatch-esp/',
	'/ricochet-bypass': '/overwatch-hacks/',
	'/ricochet-bypass/': '/overwatch-hacks/',
	// Trailing-slash normalization for canonical overwatch URLs
	'/overwatch-hacks': '/overwatch-hacks/',
	'/overwatch-esp': '/overwatch-esp/',
	'/overwatch-aimbot': '/overwatch-aimbot/',
	'/overwatch-wallhack': '/overwatch-wallhack/',
	'/overwatch-radar': '/overwatch-radar/',
	// Legacy rust-* URLs → overwatch canonical pages
	'/rust-hacks': '/overwatch-hacks/',
	'/rust-hacks/': '/overwatch-hacks/',
	'/rust-esp': '/overwatch-esp/',
	'/rust-esp/': '/overwatch-esp/',
	'/rust-aimbot': '/overwatch-aimbot/',
	'/rust-aimbot/': '/overwatch-aimbot/',
	'/rust-wallhack': '/overwatch-wallhack/',
	'/rust-wallhack/': '/overwatch-wallhack/',
	'/rust-radar-hack': '/overwatch-radar/',
	'/rust-radar-hack/': '/overwatch-radar/',
	'/undetected-rust-cheats': '/overwatch-hacks/',
	'/undetected-rust-cheats/': '/overwatch-hacks/',
	'/eac-bypass-rust': '/overwatch-hacks/',
	'/eac-bypass-rust/': '/overwatch-hacks/',
	'/rust-cheats-2026': '/overwatch-hacks/',
	'/rust-cheats-2026/': '/overwatch-hacks/',
	'/best-rust-cheats': '/overwatch-hacks/',
	'/best-rust-cheats/': '/overwatch-hacks/',
	'/rust-cheat-download': '/pricing/',
	'/rust-cheat-download/': '/pricing/',
	'/rust-mod-menu': '/features/',
	'/rust-mod-menu/': '/features/',
	'/rust-soft-aim': '/overwatch-aimbot/',
	'/rust-soft-aim/': '/overwatch-aimbot/',
	'/rust-aimbot-hack': '/overwatch-aimbot/',
	'/rust-aimbot-hack/': '/overwatch-aimbot/',
	'/rust-esp-hack': '/overwatch-esp/',
	'/rust-esp-hack/': '/overwatch-esp/',
	'/rust-unlock-all': '/features/',
	'/rust-unlock-all/': '/features/',
	// Thin keyword duplicates → canonical pages
	'/undetected-overwatch-cheats': '/overwatch-hacks/',
	'/undetected-overwatch-cheats/': '/overwatch-hacks/',
	'/eac-bypass-overwatch': '/overwatch-hacks/',
	'/eac-bypass-overwatch/': '/overwatch-hacks/',
	'/overwatch-cheats-2026': '/overwatch-hacks/',
	'/overwatch-cheats-2026/': '/overwatch-hacks/',
	'/best-overwatch-cheats': '/overwatch-hacks/',
	'/best-overwatch-cheats/': '/overwatch-hacks/',
	'/overwatch-cheat-download': '/pricing/',
	'/overwatch-cheat-download/': '/pricing/',
	'/overwatch-mod-menu': '/features/',
	'/overwatch-mod-menu/': '/features/',
	'/overwatch-soft-aim': '/overwatch-aimbot/',
	'/overwatch-soft-aim/': '/overwatch-aimbot/',
	'/overwatch-aimbot-hack': '/overwatch-aimbot/',
	'/overwatch-aimbot-hack/': '/overwatch-aimbot/',
	'/overwatch-esp-hack': '/overwatch-esp/',
	'/overwatch-esp-hack/': '/overwatch-esp/',
	'/overwatch-unlock-all': '/features/',
	'/overwatch-unlock-all/': '/features/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'no-store');
		headers.set('Cloudflare-CDN-Cache-Control', 'no-store');
	}
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect = PATH_REDIRECTS[url.pathname];
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
