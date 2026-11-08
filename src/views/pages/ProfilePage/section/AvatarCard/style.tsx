import { styled, Paper, Typography } from '@mui/material'

export const AvatarCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(3.75, 3, 3.25),
  borderRadius: theme.spacing(2.75),
  border: `1px solid ${theme.palette.background.default}`,
}))

export const ProfileName = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  letterSpacing: '-0.02em',
  color: theme.palette.text.primary,
  marginTop: theme.spacing(2.25),
}))

export const ProfileEmail = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  marginTop: theme.spacing(0.75),
}))
