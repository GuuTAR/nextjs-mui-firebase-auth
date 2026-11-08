'use client'

import { usePathname, useRouter } from 'next/navigation'
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { FirebaseError } from 'firebase/app'
import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth'

import { firebaseClient } from '@/libs/firebaseClient'

import { SessionUser } from '@/types/SessionUser'

import { HOME_PATH, LOGIN_PATH, PUBLIC_PATHS } from '@/data/auth'
import { SIGN_IN_FAILED, SIGN_OUT_FAILED } from '@/lang/auth'

import { AuthAPI } from '@/api/authApi'

import { createLocalApiService } from '@/services/apiService'

import { useAppData } from '@/providers/AppDataProvider'

const CANCELLED_SIGN_IN_ERRORS: string[] = ['auth/popup-closed-by-user', 'auth/cancelled-popup-request']

export type UserDataContextType = {
  user: SessionUser | null
  isUserLoaded: boolean
  isSigningIn: boolean
  handleLogin: () => Promise<void>
  handleDemoLogin: () => Promise<void>
  handleLogout: () => Promise<void>
}

const UserDataContext = createContext<UserDataContextType>({} as UserDataContextType)

type Props = {
  children: ReactNode
}

export const UserDataProvider = ({ children }: Props) => {
  const router = useRouter()
  const pathname: string = usePathname()
  const { clientAppConfig, language, handleShowNotification } = useAppData()

  const [user, setUser] = useState<SessionUser | null>(null)
  const [isUserLoaded, setIsUserLoaded] = useState<boolean>(false)
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false)

  const authApi: AuthAPI = useMemo(() => {
    return new AuthAPI(createLocalApiService(clientAppConfig?.backend.apiTimeout ?? 5000))
  }, [clientAppConfig])

  // A cookie the server rejects (expired, revoked) still passes the proxy, so clear it here
  useEffect(() => {
    const loadUser = async () => {
      const sessionUser: SessionUser | undefined = await authApi.getSession()
      if (!sessionUser) {
        if (!PUBLIC_PATHS.includes(pathname)) {
          await authApi.deleteSession()
          router.replace(LOGIN_PATH)
        }
      } else {
        setUser(sessionUser)
      }
      setIsUserLoaded(true)
    }

    loadUser()
  }, [authApi, pathname, router])

  const handleLogin = useCallback(async () => {
    if (!clientAppConfig) return

    setIsSigningIn(true)
    try {
      const auth: Auth = await firebaseClient.getAuth()
      const credential: UserCredential = await signInWithPopup(auth, new GoogleAuthProvider())
      const sessionUser: SessionUser | undefined = await authApi.createSession(await credential.user.getIdToken())
      await signOut(auth)

      if (!sessionUser) {
        handleShowNotification({ message: SIGN_IN_FAILED[language], severity: 'error' })
        return
      }
      setUser(sessionUser)
      router.replace(HOME_PATH)
    } catch (error) {
      if (error instanceof FirebaseError && CANCELLED_SIGN_IN_ERRORS.includes(error.code)) return

      console.error('Sign in failed:', (error as Error).message)
      handleShowNotification({ message: SIGN_IN_FAILED[language], severity: 'error' })
    } finally {
      setIsSigningIn(false)
    }
  }, [authApi, clientAppConfig, language, handleShowNotification, router])

  const handleDemoLogin = useCallback(async () => {
    try {
      if (!clientAppConfig) return

      setIsSigningIn(true)
      const auth: Auth = await firebaseClient.getAuth()
      const credential: UserCredential = await signInWithEmailAndPassword(
        auth,
        clientAppConfig.demo.demoUser ?? '',
        clientAppConfig.demo.demoPassword ?? '',
      )
      const sessionUser: SessionUser | undefined = await authApi.createSession(await credential.user.getIdToken())

      if (!sessionUser) {
        handleShowNotification({ message: SIGN_IN_FAILED[language], severity: 'error' })
        return
      }
      setUser(sessionUser)
      router.replace(HOME_PATH)
    } catch (error) {
      console.error('Sign in failed:', (error as Error).message)
      handleShowNotification({ message: SIGN_IN_FAILED[language], severity: 'error' })
    } finally {
      setIsSigningIn(false)
    }
  }, [authApi, clientAppConfig, language, handleShowNotification, router])

  const handleLogout = useCallback(async () => {
    try {
      await authApi.deleteSession()
      setUser(null)
      router.replace(LOGIN_PATH)
    } catch (error) {
      console.error('Sign out failed:', (error as Error).message)
      handleShowNotification({ message: SIGN_OUT_FAILED[language], severity: 'error' })
    }
  }, [authApi, language, handleShowNotification, router])

  return (
    <UserDataContext.Provider value={{ user, isUserLoaded, isSigningIn, handleLogin, handleDemoLogin, handleLogout }}>
      {children}
    </UserDataContext.Provider>
  )
}

export const useUserData = () => useContext(UserDataContext)
