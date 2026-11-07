import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import InsightsIcon from '@mui/icons-material/Insights'
import RedeemIcon from '@mui/icons-material/Redeem'
import TaskAltIcon from '@mui/icons-material/TaskAlt'

import { AppMenu, AppMenuMobile } from '@/types/AppMenu'
import { SupportLang } from '@/types/SupportLang'
import { AppMenuType } from '@/enum/AppMenu'
import { LANGUAGE } from '@/enum/global'

export const APP_MENU_SIZE: number = 250
export const NAVBAR_HEIGHT: number = 64

export const BOTTOM_NAVBAR_HEIGHT: number = 56

export const LANGUAGE_OPTIONS: SupportLang[] = [
  { value: LANGUAGE.ENGLISH, label: 'English' },
  { value: LANGUAGE.THAI, label: 'ไทย' },
]

export const APP_MENU_DATA_DESKTOP: AppMenu[] = [
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Home', [LANGUAGE.THAI]: 'หน้าหลัก' },
    path: '/',
    icon: <HomeIcon />,
  },
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Tasks', [LANGUAGE.THAI]: 'งาน' },
    path: '/tasks',
    icon: <TaskAltIcon />,
  },
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Habits', [LANGUAGE.THAI]: 'นิสัย' },
    path: '/habits',
    icon: <FavoriteIcon />,
  },
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Tracking', [LANGUAGE.THAI]: 'ติดตาม' },
    path: '/tracking',
    icon: <InsightsIcon />,
  },
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Life Shop', [LANGUAGE.THAI]: 'ร้านค้า' },
    path: '/shop',
    icon: <RedeemIcon />,
  },
]

export const APP_MENU_DATA_MOBILE: AppMenuMobile[] = [
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Home', [LANGUAGE.THAI]: 'หน้าหลัก' },
    path: '/',
    icon: <HomeIcon />,
  },
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Tasks', [LANGUAGE.THAI]: 'งาน' },
    path: '/tasks',
    icon: <TaskAltIcon />,
  },
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Habits', [LANGUAGE.THAI]: 'นิสัย' },
    path: '/habits',
    icon: <FavoriteIcon />,
  },
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Tracking', [LANGUAGE.THAI]: 'ติดตาม' },
    path: '/tracking',
    icon: <InsightsIcon />,
  },
  {
    type: AppMenuType.DEFAULT,
    name: { [LANGUAGE.ENGLISH]: 'Life Shop', [LANGUAGE.THAI]: 'ร้านค้า' },
    path: '/shop',
    icon: <RedeemIcon />,
  },
  // TODO: Add ProfileAvatar
  // {
  //   type: AppMenuType.DEFAULT,
  //   name: { [LANGUAGE.ENGLISH]: 'Profile', [LANGUAGE.THAI]: 'โปรไฟล์' },
  //   path: '/profile',
  //   icon: <ProfileAvatar width={24} height={24} />,
  // },
]
