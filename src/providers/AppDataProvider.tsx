import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'

import { ClientAppConfig } from '@/types/AppConfig'
import { NotificationDetail } from '@/types/Notification'
import { LANGUAGE } from '@/enum/global'

import { DEFAULT_LANGUAGE } from '@/data/user'

import { configService } from '@/services/configService'
import { localStorageService } from '@/services/localStorageService'

export type AppDataContextType = {
  clientAppConfig: ClientAppConfig | undefined

  displayName: string
  setDisplayName: (displayName: string) => void

  language: LANGUAGE
  setLanguage: (language: LANGUAGE) => void
  isNotificationVisible: boolean
  setIsNotificationVisible: (isVisible: boolean) => void
  notificationDetail: NotificationDetail
  handleShowNotification: (notificationDetail: NotificationDetail) => void

  isAppInitialized: boolean
}

const AppDataContext = createContext<AppDataContextType>({} as AppDataContextType)

type Props = {
  children: ReactNode
}

export const AppDataProvider = ({ children }: Props) => {
  const [clientAppConfig, setClientAppConfig] = useState<ClientAppConfig | undefined>(undefined)

  const [displayName, _setDisplayName] = useState<string>('')

  const [language, _setLanguage] = useState<LANGUAGE>(DEFAULT_LANGUAGE)
  const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false)
  const [notificationDetail, setNotificationDetail] = useState<NotificationDetail>({
    message: '',
    anchorOrigin: { vertical: 'top', horizontal: 'right' },
    autoHideDuration: 3000,
    severity: 'info',
  })

  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false)

  // Initialization
  useEffect(() => {
    const initializeApp = async () => {
      const [backend, demo, firebaseConfig] = await Promise.all([
        configService.getBeckendConfig(),
        configService.getDemoConfig(),
        configService.getFirebaseClientConfig(),
      ])

      setClientAppConfig({ backend, demo, firebaseConfig })

      _setDisplayName(localStorageService.getValue('displayName') ?? '')
      const savedLanguage = localStorageService.getValue('language') as LANGUAGE | null
      if (savedLanguage) _setLanguage(savedLanguage)
      setIsAppInitialized(true)
    }

    initializeApp()
  }, [])

  const setDisplayName = useCallback((displayName: string) => {
    _setDisplayName(displayName)
    localStorageService.setValue('displayName', displayName)
  }, [])

  const setLanguage = useCallback((language: LANGUAGE) => {
    _setLanguage(language)
    localStorageService.setValue('language', language)
  }, [])

  const handleShowNotification = useCallback((_notificationDetail: NotificationDetail) => {
    setNotificationDetail({
      message: _notificationDetail.message,
      anchorOrigin: _notificationDetail.anchorOrigin ?? { vertical: 'top', horizontal: 'right' },
      autoHideDuration: _notificationDetail.autoHideDuration ?? 3000,
      severity: _notificationDetail.severity ?? 'info',
    })
    setIsNotificationVisible(true)
  }, [])

  return (
    <AppDataContext.Provider
      value={{
        isAppInitialized,
        clientAppConfig,
        displayName,
        setDisplayName,
        language,
        setLanguage,
        isNotificationVisible,
        setIsNotificationVisible,
        notificationDetail,
        handleShowNotification,
      }}
    >
      {children}
    </AppDataContext.Provider>
  )
}

export const useAppData = () => useContext(AppDataContext)
