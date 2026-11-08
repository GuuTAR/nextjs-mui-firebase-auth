import { utilService } from '@/services/utilService'

import { useUserData } from '@/providers/UserDataProvider'

import * as Styles from './style'

type Props = {
  width: number
  height: number
}

export default function ProfileAvatar({ width, height }: Props) {
  const { user } = useUserData()

  const userInitials: string = user?.displayName ? utilService.getDisplayNameInitials(user.displayName) : 'U'

  return (
    <Styles.ProfileAvatarContainer width={width} height={height}>
      {user?.photoUrl ? (
        <Styles.RoundImage src={user.photoUrl} alt="Profile" width={width} height={height} loading="eager" />
      ) : (
        userInitials
      )}
    </Styles.ProfileAvatarContainer>
  )
}
