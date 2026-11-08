'use client'

import { useAppData } from '@/providers/AppDataProvider'

import PageContainer from '@/views/components/core/PageContainer'
import PageHeader from '@/views/components/core/PageHeader'

import * as Languages from './lang'
import * as Styles from './style'

export default function HomePage() {
  const { language } = useAppData()

  return (
    <PageContainer isShowAppMenu>
      <Styles.Content>
        <Styles.HeaderSlot>
          <PageHeader title={`${Languages.WELCOME_BACK[language]}`} subtitle={Languages.SUBTITLE[language]} />
        </Styles.HeaderSlot>
      </Styles.Content>
    </PageContainer>
  )
}
