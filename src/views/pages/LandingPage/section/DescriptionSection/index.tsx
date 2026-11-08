import { DEFAULT_LANGUAGE } from '@/data/user'

import * as Languages from './lang'
import * as Styles from './style'

export default function DescriptionSection() {
  return (
    <Styles.DescriptionSection>
      <Styles.ShortSummary variant="body1">{Languages.SHORT_SUMMARY[DEFAULT_LANGUAGE]}</Styles.ShortSummary>
      <Styles.ContrastText variant="h1">{Languages.WELCOME_MESSAGE[DEFAULT_LANGUAGE]}</Styles.ContrastText>
      <Styles.ContrastText variant="body1">{Languages.DESCRIPTION[DEFAULT_LANGUAGE]}</Styles.ContrastText>
    </Styles.DescriptionSection>
  )
}
