import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const handleI18n = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Berita and lokasi sections are outside the locale system — pass through directly
  if (pathname.startsWith('/berita') || pathname.startsWith('/lokasi') || pathname === '/lokasi') {
    return NextResponse.next();
  }

  return handleI18n(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|images|favicon|seo|.*\\..*).*)']
};
