import useBreakpoint from '@/hooks/useBreakpoint'

import AppMenuDesktop from './desktop'
import AppMenuMobile from './mobile'

export default function AppMenu() {
  const { isDesktop } = useBreakpoint()

  return isDesktop ? <AppMenuDesktop /> : <AppMenuMobile />
}
