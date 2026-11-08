import { styled, Divider, Paper, Select, Stack, Typography } from '@mui/material'

export const SectionLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontWeight: 600,
  letterSpacing: '0.14em',
  marginBottom: theme.spacing(-0.5),
  paddingLeft: theme.spacing(0.5),
}))

export const SectionCard = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(2.25),
  border: `1px solid ${theme.palette.background.default}`,
}))

export const InfoRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1.75),
  padding: theme.spacing(2, 2.25),
}))

export const RowIconWrapper = styled(Stack)(({ theme }) => ({
  width: theme.spacing(4.75),
  height: theme.spacing(4.75),
  borderRadius: theme.spacing(1.375),
  background: theme.palette.background.default,
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  flexShrink: 0,
}))

export const RowContent = styled(Stack)(() => ({
  flex: 1,
  minWidth: 0,
}))

export const RowFieldLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
}))

export const RowDivider = styled(Divider)(({ theme }) => ({
  marginLeft: theme.spacing(2.25),
  marginRight: theme.spacing(2.25),
}))

export const SettingSelect = styled(Select)(({ theme }) => ({
  marginTop: theme.spacing(0.25),
  '& .MuiSelect-select': {
    padding: '0 !important',
    paddingRight: `${theme.spacing(3)} !important`,
  },
  '& .MuiSelect-icon': {
    color: theme.palette.text.secondary,
  },
}))

export const SettingSelectValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
}))
