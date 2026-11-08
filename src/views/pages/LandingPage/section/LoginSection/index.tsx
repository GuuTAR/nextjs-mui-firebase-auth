import Image from 'next/image'

import { useMemo } from 'react'

import { Divider, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

import { DEFAULT_LANGUAGE } from '@/data/user'

import { useAppData } from '@/providers/AppDataProvider'
import { useUserData } from '@/providers/UserDataProvider'

import AppName from '@/views/components/core/AppName'
import BoldText from '@/views/components/core/BoldText'

import * as Languages from './lang'
import * as Styles from './style'

export default function LoginSection() {
  const { isAppInitialized } = useAppData()
  const { isSigningIn, handleLogin, handleDemoLogin } = useUserData()

  const isLoginDisabled: boolean = useMemo(() => !isAppInitialized || isSigningIn, [isAppInitialized, isSigningIn])

  return (
    <Styles.LoginSection>
      <Styles.LoginContainer>
        <AppName />
        <BoldText variant="h4" color="textPrimary">
          {Languages.SIGN_IN[DEFAULT_LANGUAGE]}
        </BoldText>
        <Styles.LoginButton variant="outlined" onClick={handleLogin} disabled={isLoginDisabled}>
          <Image src="/icons/google.svg" alt="Google Icon" width={24} height={24} />
          <Typography variant="body2" color="textPrimary">
            {Languages.CONTINUE_WITH_GOOGLE[DEFAULT_LANGUAGE]}
          </Typography>
        </Styles.LoginButton>
        <Divider>
          <Typography variant="body2" color="textDisabled">
            {Languages.OR[DEFAULT_LANGUAGE]}
          </Typography>
        </Divider>
        <Styles.LoginButton variant="contained" onClick={handleDemoLogin} disabled={isLoginDisabled}>
          <PlayArrowIcon />
          <Typography variant="body2">{Languages.PLAY_AS_DEMO_USER[DEFAULT_LANGUAGE]}</Typography>
        </Styles.LoginButton>
      </Styles.LoginContainer>
    </Styles.LoginSection>
  )
}
