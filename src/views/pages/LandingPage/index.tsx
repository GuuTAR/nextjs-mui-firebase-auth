'use client'

import * as Sections from './section'
import * as Styles from './style'

export default function LoginPage() {
  return (
    <Styles.LoginPageStyle>
      <Sections.DescriptionSection />
      <Sections.LoginSection />
    </Styles.LoginPageStyle>
  )
}
