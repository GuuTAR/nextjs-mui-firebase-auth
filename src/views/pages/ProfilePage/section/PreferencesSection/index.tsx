import { useCallback } from 'react'

import { MenuItem, SelectChangeEvent } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'

import { LANGUAGE } from '@/enum/global'

import { LANGUAGE_OPTIONS } from '@/data/global'

import { useAppData } from '@/providers/AppDataProvider'

import * as Language from './lang'
import * as Styles from './style'

export default function PreferencesSection() {
  const { language, setLanguage } = useAppData()

  const handleLanguageChange = useCallback(
    (event: SelectChangeEvent<unknown>): void => {
      setLanguage(event.target.value as LANGUAGE)
    },
    [setLanguage],
  )

  return (
    <>
      <Styles.SectionLabel variant="overline">{Language.SECTION_PREFERENCES[language]}</Styles.SectionLabel>
      <Styles.SectionCard elevation={0}>
        <Styles.InfoRow>
          <Styles.RowIconWrapper>
            <LanguageIcon fontSize="small" />
          </Styles.RowIconWrapper>
          <Styles.RowContent>
            <Styles.RowFieldLabel variant="caption">{Language.LANGUAGE_LABEL[language]}</Styles.RowFieldLabel>
            <Styles.SettingSelect
              variant="standard"
              disableUnderline
              value={language}
              onChange={handleLanguageChange}
              renderValue={(value) => {
                const option = LANGUAGE_OPTIONS.find((opt) => opt.value === value)
                return <Styles.SettingSelectValue variant="body1">{option?.label ?? ''}</Styles.SettingSelectValue>
              }}
            >
              {LANGUAGE_OPTIONS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Styles.SettingSelect>
          </Styles.RowContent>
        </Styles.InfoRow>
        <Styles.RowDivider />
      </Styles.SectionCard>
    </>
  )
}
