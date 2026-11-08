import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'

import { useAppData } from '@/providers/AppDataProvider'
import { useUserData } from '@/providers/UserDataProvider'

import * as Language from './lang'
import * as Styles from './style'

export default function AccountSection() {
  const { language } = useAppData()
  const { user } = useUserData()

  return (
    <>
      <Styles.SectionLabel variant="overline">{Language.SECTION_ACCOUNT[language]}</Styles.SectionLabel>
      <Styles.SectionCard elevation={0}>
        <Styles.InfoRow>
          <Styles.RowIconWrapper>
            <PersonOutlinedIcon fontSize="small" />
          </Styles.RowIconWrapper>
          <Styles.RowContent>
            <Styles.RowFieldLabel variant="caption">{Language.DISPLAY_NAME[language]}</Styles.RowFieldLabel>
            <Styles.RowFieldValue variant="body1">{user?.displayName}</Styles.RowFieldValue>
          </Styles.RowContent>
          <Styles.RowBadge variant="caption">{Language.GOOGLE[language]}</Styles.RowBadge>
        </Styles.InfoRow>
        <Styles.RowDivider />
        <Styles.InfoRow>
          <Styles.RowIconWrapper>
            <EmailOutlinedIcon fontSize="small" />
          </Styles.RowIconWrapper>
          <Styles.RowContent>
            <Styles.RowFieldLabel variant="caption">{Language.EMAIL[language]}</Styles.RowFieldLabel>
            <Styles.RowFieldValue variant="body1">{user?.email}</Styles.RowFieldValue>
          </Styles.RowContent>
          <Styles.RowBadge variant="caption">{Language.GOOGLE[language]}</Styles.RowBadge>
        </Styles.InfoRow>
      </Styles.SectionCard>
    </>
  )
}
