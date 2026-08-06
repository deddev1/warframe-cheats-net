const CANONICAL_ORIGIN = 'https://warthunderhacks.com';
const APEX_HOST = 'warthunderhacks.com';
const WWW_HOST = 'www.warthunderhacks.com';

/** Old hosts → canonical apex (301). Never include the apex host itself. */
const LEGACY_HOSTS = new Set([
	'arcraidershacks.net',
	'www.arcraidershacks.net',
	'arcraidershacks.com',
	'www.arcraidershacks.com',
	'overwatchhacks.com',
	'www.overwatchhacks.com',
	'warthunderhacks.net',
	'www.warthunderhacks.net',
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
	'/sitemap-0.xml': '/sitemap.xml',
	'/war-thunder-cheats': '/',
	'/war-thunder-cheats/': '/',
	'/fortnite-cheats': '/',
	'/fortnite-cheats/': '/',
	'/fortnite-hacks': '/war-thunder-hacks/',
	'/fortnite-hacks/': '/war-thunder-hacks/',
	'/fortnite-aimbot': '/war-thunder-aimbot/',
	'/fortnite-aimbot/': '/war-thunder-aimbot/',
	'/fortnite-esp': '/war-thunder-esp/',
	'/fortnite-esp/': '/war-thunder-esp/',
	'/fortnite-wallhack': '/war-thunder-wallhack/',
	'/fortnite-wallhack/': '/war-thunder-wallhack/',
	'/undetected-fortnite-cheats': '/war-thunder-hacks/',
	'/undetected-fortnite-cheats/': '/war-thunder-hacks/',
	'/eac-bypass-fortnite': '/war-thunder-hacks/',
	'/eac-bypass-fortnite/': '/war-thunder-hacks/',
	'/eac-bypass': '/war-thunder-hacks/',
	'/eac-bypass/': '/war-thunder-hacks/',
	'/warzone-aimbot': '/war-thunder-aimbot/',
	'/warzone-aimbot/': '/war-thunder-aimbot/',
	'/warzone-esp': '/war-thunder-esp/',
	'/warzone-esp/': '/war-thunder-esp/',
	'/ricochet-bypass': '/war-thunder-hacks/',
	'/ricochet-bypass/': '/war-thunder-hacks/',
	'/overwatch-hacks': '/war-thunder-hacks/',
	'/overwatch-hacks/': '/war-thunder-hacks/',
	'/overwatch-esp': '/war-thunder-esp/',
	'/overwatch-esp/': '/war-thunder-esp/',
	'/overwatch-aimbot': '/war-thunder-aimbot/',
	'/overwatch-aimbot/': '/war-thunder-aimbot/',
	'/overwatch-wallhack': '/war-thunder-wallhack/',
	'/overwatch-wallhack/': '/war-thunder-wallhack/',
	'/overwatch-radar': '/war-thunder-radar/',
	'/overwatch-radar/': '/war-thunder-radar/',
	'/arc-raiders-hacks': '/war-thunder-hacks/',
	'/arc-raiders-hacks/': '/war-thunder-hacks/',
	'/arc-raiders-esp': '/war-thunder-esp/',
	'/arc-raiders-esp/': '/war-thunder-esp/',
	'/arc-raiders-aimbot': '/war-thunder-aimbot/',
	'/arc-raiders-aimbot/': '/war-thunder-aimbot/',
	'/arc-raiders-wallhack': '/war-thunder-wallhack/',
	'/arc-raiders-wallhack/': '/war-thunder-wallhack/',
	'/arc-raiders-radar': '/war-thunder-radar/',
	'/arc-raiders-radar/': '/war-thunder-radar/',
	'/war-thunder-hacks': '/war-thunder-hacks/',
	'/war-thunder-esp': '/war-thunder-esp/',
	'/war-thunder-aimbot': '/war-thunder-aimbot/',
	'/war-thunder-wallhack': '/war-thunder-wallhack/',
	'/war-thunder-radar': '/war-thunder-radar/',
	// Legacy rust-* URLs → overwatch canonical pages
	'/rust-hacks': '/war-thunder-hacks/',
	'/rust-hacks/': '/war-thunder-hacks/',
	'/rust-esp': '/war-thunder-esp/',
	'/rust-esp/': '/war-thunder-esp/',
	'/rust-aimbot': '/war-thunder-aimbot/',
	'/rust-aimbot/': '/war-thunder-aimbot/',
	'/rust-wallhack': '/war-thunder-wallhack/',
	'/rust-wallhack/': '/war-thunder-wallhack/',
	'/rust-radar-hack': '/war-thunder-radar/',
	'/rust-radar-hack/': '/war-thunder-radar/',
	'/undetected-rust-cheats': '/war-thunder-hacks/',
	'/undetected-rust-cheats/': '/war-thunder-hacks/',
	'/eac-bypass-rust': '/war-thunder-hacks/',
	'/eac-bypass-rust/': '/war-thunder-hacks/',
	'/rust-cheats-2026': '/war-thunder-hacks/',
	'/rust-cheats-2026/': '/war-thunder-hacks/',
	'/best-rust-cheats': '/war-thunder-hacks/',
	'/best-rust-cheats/': '/war-thunder-hacks/',
	'/rust-cheat-download': '/pricing/',
	'/rust-cheat-download/': '/pricing/',
	'/rust-mod-menu': '/features/',
	'/rust-mod-menu/': '/features/',
	'/rust-soft-aim': '/war-thunder-aimbot/',
	'/rust-soft-aim/': '/war-thunder-aimbot/',
	'/rust-aimbot-hack': '/war-thunder-aimbot/',
	'/rust-aimbot-hack/': '/war-thunder-aimbot/',
	'/rust-esp-hack': '/war-thunder-esp/',
	'/rust-esp-hack/': '/war-thunder-esp/',
	'/rust-unlock-all': '/features/',
	'/rust-unlock-all/': '/features/',
	// Thin keyword duplicates → canonical pages
	'/undetected-war-thunder-cheats': '/war-thunder-hacks/',
	'/undetected-war-thunder-cheats/': '/war-thunder-hacks/',
	'/eac-bypass-war-thunder': '/war-thunder-hacks/',
	'/eac-bypass-war-thunder/': '/war-thunder-hacks/',
	'/war-thunder-cheats-2026': '/war-thunder-hacks/',
	'/war-thunder-cheats-2026/': '/war-thunder-hacks/',
	'/best-war-thunder-cheats': '/war-thunder-hacks/',
	'/best-war-thunder-cheats/': '/war-thunder-hacks/',
	'/war-thunder-cheat-download': '/pricing/',
	'/war-thunder-cheat-download/': '/pricing/',
	'/war-thunder-mod-menu': '/features/',
	'/war-thunder-mod-menu/': '/features/',
	'/war-thunder-soft-aim': '/war-thunder-aimbot/',
	'/war-thunder-soft-aim/': '/war-thunder-aimbot/',
	'/war-thunder-aimbot-hack': '/war-thunder-aimbot/',
	'/war-thunder-aimbot-hack/': '/war-thunder-aimbot/',
	'/war-thunder-esp-hack': '/war-thunder-esp/',
	'/war-thunder-esp-hack/': '/war-thunder-esp/',
	'/war-thunder-unlock-all': '/features/',
	'/war-thunder-unlock-all/': '/features/',
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
