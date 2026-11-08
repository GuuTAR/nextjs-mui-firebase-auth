import 'server-only'

import { cookies } from 'next/headers'

import { DecodedIdToken } from 'firebase-admin/auth'

import { firebaseAdmin } from '@/libs/firebaseAdmin'

import { SessionUser } from '@/types/SessionUser'

import { MAX_SIGN_IN_AGE_SECONDS, SESSION_COOKIE_NAME } from '@/data/auth'

import { configService } from '@/services/configService'

class SessionService {
  private sessionLifetimeMs: number

  constructor() {
    const userSessionLifetimeDays = configService.getServerConfig().userSessionLifetimeDays
    this.sessionLifetimeMs = userSessionLifetimeDays * 24 * 60 * 60 * 1000
  }

  public getSessionLifetimeMs = (): number => this.sessionLifetimeMs

  /**
   * Exchanges a Firebase ID token from a fresh client sign-in for a session cookie.
   * Throws if the token is invalid, revoked, or the sign-in is older than MAX_SIGN_IN_AGE_SECONDS.
   */
  public createSessionCookie = async (idToken: string): Promise<{ user: SessionUser }> => {
    const auth = firebaseAdmin.getAuth()
    const decodedToken: DecodedIdToken = await auth.verifyIdToken(idToken, true)

    if (Date.now() / 1000 - decodedToken.auth_time > MAX_SIGN_IN_AGE_SECONDS) {
      throw new Error('Sign-in is too old, please sign in again')
    }

    const sessionCookie: string = await auth.createSessionCookie(idToken, { expiresIn: this.getSessionLifetimeMs() })
    const cookieStore = await cookies()
    cookieStore.set(SESSION_COOKIE_NAME, sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: sessionService.getSessionLifetimeMs() / 1000,
    })

    return { user: this.toSessionUser(decodedToken) }
  }

  /**
   * Verifies a session cookie, including revocation, and returns the user it belongs to.
   * Returns null instead of throwing when the cookie is missing, expired, revoked or invalid.
   */
  public verifySessionCookie = async (sessionCookie: string | undefined): Promise<SessionUser | null> => {
    if (!sessionCookie) return null

    try {
      const decodedToken: DecodedIdToken = await firebaseAdmin.getAuth().verifySessionCookie(sessionCookie, true)
      return this.toSessionUser(decodedToken)
    } catch {
      return null
    }
  }

  public revokeSession = async (sessionCookie: string | undefined): Promise<boolean> => {
    const user: SessionUser | null = await this.verifySessionCookie(sessionCookie)
    if (user) {
      await firebaseAdmin.getAuth().revokeRefreshTokens(user.uid)
      return true
    }
    return false
  }

  private toSessionUser = (decodedToken: DecodedIdToken): SessionUser => {
    return {
      uid: decodedToken.uid,
      email: decodedToken.email ?? '',
      displayName: (decodedToken.name as string | undefined) ?? '',
      photoUrl: decodedToken.picture ?? '',
    }
  }
}

export const sessionService = new SessionService()
