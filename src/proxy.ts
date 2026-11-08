import { NextRequest, NextResponse } from 'next/server'

import { HOME_PATH, LOGIN_PATH, PUBLIC_PATHS, SESSION_COOKIE_NAME } from '@/data/auth'

// Optimistic check on cookie presence only. The session is verified with firebase-admin
// in /api/auth/session; an invalid cookie is cleared by UserDataProvider.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasSession: boolean = request.cookies.has(SESSION_COOKIE_NAME)
  const isPublicPath: boolean = PUBLIC_PATHS.includes(pathname)

  if (!hasSession && !isPublicPath) return NextResponse.redirect(new URL(LOGIN_PATH, request.url))
  if (hasSession && pathname === LOGIN_PATH) return NextResponse.redirect(new URL(HOME_PATH, request.url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
