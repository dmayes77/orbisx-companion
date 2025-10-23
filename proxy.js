import { NextResponse } from 'next/server';

// Proxy-compatible handler that mirrors the old middleware behavior.
export function proxy(request) {
  const url = new URL(request.url);
  const hostname = request.headers.get('host');

  // Skip proxy on static files and api routes
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/static')
  ) {
    return NextResponse.next();
  }

  const isLocalhost = hostname?.includes('localhost') || hostname?.includes('127.0.0.1');
  const PRODUCTION_DOMAIN = 'orbisx-companion.app';
  const isProduction = hostname?.includes(PRODUCTION_DOMAIN);

  // Only apply tenant routing on valid hostnames
  if (!isLocalhost && !isProduction) {
    return NextResponse.next();
  }

  // Derive subdomain
  const subdomain = isProduction
    ? hostname.replace(`.${PRODUCTION_DOMAIN}`, '')
    : hostname.split(':')[0].replace('localhost', '').replace('127.0.0.1', '');

  // Skip apex domains and special subdomains
  if (!subdomain || subdomain === 'www' || subdomain === 'dev') {
    return NextResponse.next();
  }

  // Rewrite to tenant route
  const newUrl = new URL(`/tenant/${subdomain}${url.pathname}`, request.url);
  return NextResponse.rewrite(newUrl);
}

export const config = {
  // Keep the same matcher as before
  matcher: ['/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)'],
};
