import { usePathname, useRouter } from 'next/navigation'

import { AppMenuItemDefault, AppMenuMobile as AppMenuMobileType } from '@/types/AppMenu'
import { LANGUAGE } from '@/enum/global'

import { APP_MENU_DATA_MOBILE } from '@/data/global'

import { useAppData } from '@/providers/AppDataProvider'

import AppName from '@/components/core/AppName'

import * as Styles from './style'

export default function AppMenuMobile() {
  const router = useRouter()
  const pathname: string | null = usePathname()
  const { language } = useAppData()

  const visibleMenuItems: AppMenuMobileType[] = APP_MENU_DATA_MOBILE.filter((menu) => !menu.isVisibleInMore)
  const pageIdx: number = visibleMenuItems.findIndex((menu) => (menu as AppMenuItemDefault).path === pathname)

  return (
    <>
      <Styles.Navbar>
        <AppName />
      </Styles.Navbar>
      <Styles.MobileMenuContainer>
        <Styles.StyledPaper elevation={1}>
          <Styles.StyledBottomNavigation
            showLabels
            value={pageIdx}
            onChange={(_, idx) => {
              if (idx < APP_MENU_DATA_MOBILE.length) router.push((APP_MENU_DATA_MOBILE[idx] as AppMenuItemDefault).path)
            }}
          >
            {visibleMenuItems.map((menu) => (
              <Styles.MenuItems
                key={menu.name[LANGUAGE.ENGLISH]}
                label={menu.name[language]}
                icon={(menu as AppMenuItemDefault).icon}
              />
            ))}
          </Styles.StyledBottomNavigation>
        </Styles.StyledPaper>
      </Styles.MobileMenuContainer>
    </>
  )
}
