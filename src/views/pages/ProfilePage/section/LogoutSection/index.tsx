import { useAppData } from '@/providers/AppDataProvider'
import { useUserData } from '@/providers/UserDataProvider'

import * as Language from './lang'
import * as Styles from './style'

export default function LogoutSection() {
  const { language } = useAppData()
  const { handleLogout } = useUserData()

  return (
    <Styles.LogoutButton variant="outlined" onClick={handleLogout}>
      <Styles.LogoutIconStyled />
      <Styles.LogoutText variant="body1">{Language.LOGOUT[language]}</Styles.LogoutText>
    </Styles.LogoutButton>
  )
}
