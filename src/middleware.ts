import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fn'],

  // Used when no locale matches
  defaultLocale: 'en',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fn|en)/:path*'],
};
