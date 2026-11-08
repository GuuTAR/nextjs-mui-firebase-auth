import { Stack, styled, Typography } from '@mui/material'

export const DescriptionSection = styled(Stack)(({ theme }) => ({
  height: '100%',
  justifyContent: 'center',
  padding: theme.spacing(0, 8),
  gap: theme.spacing(2),
  background: theme.palette.custom.loginPage.descriptionBackground,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const ShortSummary = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: 2,
  color: theme.palette.primary.contrastText,
}))

export const ContrastText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}))
