export const SESSION_COOKIE_NAME: string = '__session'

export const LOGIN_PATH: string = '/login'
export const HOME_PATH: string = '/'

export const PUBLIC_PATHS: string[] = [LOGIN_PATH]

// Firebase only allows minting a session cookie from a recent sign-in
export const MAX_SIGN_IN_AGE_SECONDS: number = 5 * 60
