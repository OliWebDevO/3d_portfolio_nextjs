import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, isLocale } from '@/i18n';

const PUBLIC_FILE = /\.[^/]+$/;

function preferredLocale(request: NextRequest): Language {
  const cookie = request.cookies.get('lang')?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const accept = request.headers.get('accept-language')?.toLowerCase();
  if (accept) return accept.startsWith('fr') ? 'fr' : 'en';

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const first = pathname.split('/')[1];
  if (isLocale(first)) return;

  // Homepage: send visitors to their language (temporary redirect, depends on the visitor)
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${preferredLocale(request)}${search}`, request.url), 307);
  }

  // Old unprefixed URLs: permanent redirect to the French version (keeps the pages already indexed)
  if (pathname === '/resume' || pathname.startsWith('/projects/')) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}${search}`, request.url), 301);
  }
}
