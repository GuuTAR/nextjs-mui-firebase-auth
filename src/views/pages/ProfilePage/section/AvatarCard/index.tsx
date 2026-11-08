import { useUserData } from '@/providers/UserDataProvider'

import ProfileAvatar from '@/views/components/core/ProfileAvatar'

import * as Styles from './style'

export default function AvatarCard() {
  const { user } = useUserData()

  return (
    <Styles.AvatarCard elevation={0}>
      <ProfileAvatar width={80} height={80} />
      <Styles.ProfileName variant="h5">{user?.displayName}</Styles.ProfileName>
      <Styles.ProfileEmail variant="body2">{user?.email}</Styles.ProfileEmail>
    </Styles.AvatarCard>
  )
}
