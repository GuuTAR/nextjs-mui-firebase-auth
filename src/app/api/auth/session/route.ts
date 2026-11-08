import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { ResponseData } from '@/types/ResponseData'
import { SessionUser } from '@/types/SessionUser'
import { STATUS_CODE } from '@/enum/global'

import { SESSION_COOKIE_NAME } from '@/data/auth'

import { sessionService } from '@/services/sessionService'
import { utilService } from '@/services/utilService'

export async function GET(): Promise<NextResponse<ResponseData<SessionUser | null>>> {
  try {
    const cookieStore = await cookies()
    const user: SessionUser | null = await sessionService.verifySessionCookie(
      cookieStore.get(SESSION_COOKIE_NAME)?.value,
    )
    return utilService.responseBody<SessionUser | null>(STATUS_CODE.OK, {
      message: 'Get session successful',
      body: user,
    })
  } catch (error) {
    console.error('Error in Server GET /api/auth/session:', (error as Error).message)
    return utilService.responseBody(STATUS_CODE.INTERNAL_SERVER_ERROR, { message: (error as Error).message })
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get the ID token from the request body
    const { idToken } = await request.json()

    // Validate the ID token
    if (typeof idToken !== 'string' || !idToken) {
      return utilService.responseBody(STATUS_CODE.BAD_REQUEST, { message: 'idToken is required' })
    }

    // Create a user session using the ID token and set the session cookie
    const { user } = await sessionService.createSessionCookie(idToken)

    return utilService.responseBody<SessionUser>(STATUS_CODE.CREATED, {
      message: 'Create session successful',
      body: user,
    })
  } catch (error) {
    console.error('Error in Server POST /api/auth/session:', (error as Error).message)
    return utilService.responseBody(STATUS_CODE.INTERNAL_SERVER_ERROR, { message: (error as Error).message })
  }
}

export async function DELETE(): Promise<NextResponse<ResponseData<undefined>>> {
  try {
    // Get the session cookie from the request
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)

    if (!sessionCookie) {
      return utilService.responseBody<undefined>(STATUS_CODE.BAD_REQUEST, { message: 'No session cookie found' })
    }

    // Revoke the user's session
    const isRevoked: boolean = await sessionService.revokeSession(sessionCookie.value)
    if (!isRevoked) {
      return utilService.responseBody<undefined>(STATUS_CODE.INTERNAL_SERVER_ERROR, {
        message: 'Failed to revoke user session',
      })
    }

    // Clear the session cookie
    cookieStore.delete(SESSION_COOKIE_NAME)

    return utilService.responseBody<undefined>(STATUS_CODE.OK, { message: 'Delete session successful' })
  } catch (error) {
    console.error('Error in Server DELETE /api/auth/session:', (error as Error).message)
    return utilService.responseBody<undefined>(STATUS_CODE.INTERNAL_SERVER_ERROR, { message: (error as Error).message })
  }
}
