'use client'

import { useAppData } from '@/providers/AppDataProvider'

import PageContainer from '@/views/components/core/PageContainer'
import PageHeader from '@/views/components/core/PageHeader'

import * as Language from './lang'
import * as Sections from './section'
import * as Styles from './style'

export default function ProfilePage() {
  const { language } = useAppData()

  return (
    <PageContainer isShowAppMenu>
      <Styles.Content>
        <PageHeader title={Language.PROFILE[language]} subtitle={Language.PROFILE_SUBTITLE[language]} />
        <Sections.AvatarCard />
        <Sections.AccountSection />
        <Sections.PreferencesSection />
        <Sections.LogoutSection />
      </Styles.Content>
    </PageContainer>
  )
}
