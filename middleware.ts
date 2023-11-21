import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log('middleware', user);

  // if (user && req.nextUrl.pathname === '/') {
  //   return NextResponse.redirect(new URL('/user', req.url))
  // }

  // if (!user && req.nextUrl.pathname !== '/') {
  //   return NextResponse.redirect(new URL('/', req.url))
  // }

  return res;
});

export const config = {
  matcher: ['/api/user/:path*', '/:path*'],
};
