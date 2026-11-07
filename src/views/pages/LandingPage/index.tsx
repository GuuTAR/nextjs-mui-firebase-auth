'use client'

import Image from 'next/image'

import { Divider, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

import { DEFAULT_LANGUAGE } from '@/data/user'

import AppName from '@/components/core/AppName'
import BoldText from '@/components/core/BoldText'

import * as Languages from './lang'
import * as Styles from './style'

export default function LoginPage() {
  // const { handleLogin, handleDemoLogin } = useUserData()

  const handleLogin = () => {
    // Implement login logic here
  }

  const handleDemoLogin = () => {
    // Implement demo login logic here
  }

  return (
    <Styles.LoginPageStyle>
      <Styles.DescriptionSection>
        <Styles.ShortSummary variant="body1">{Languages.SHORT_SUMMARY[DEFAULT_LANGUAGE]}</Styles.ShortSummary>
        <Styles.ContrastText variant="h1">{Languages.WELCOME_MESSAGE[DEFAULT_LANGUAGE]}</Styles.ContrastText>
        <Styles.ContrastText variant="body1">{Languages.DESCRIPTION[DEFAULT_LANGUAGE]}</Styles.ContrastText>
      </Styles.DescriptionSection>
      <Styles.LoginSection>
        <Styles.LoginContainer>
          <AppName />
          <BoldText variant="h4" color="textPrimary">
            {Languages.SIGN_IN[DEFAULT_LANGUAGE]}
          </BoldText>
          <Styles.LoginButton variant="outlined" onClick={handleLogin}>
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
          <Styles.LoginButton variant="contained" onClick={handleDemoLogin}>
            <PlayArrowIcon />
            <Typography variant="body2">{Languages.PLAY_AS_DEMO_USER[DEFAULT_LANGUAGE]}</Typography>
          </Styles.LoginButton>
        </Styles.LoginContainer>
      </Styles.LoginSection>
    </Styles.LoginPageStyle>
  )
}
