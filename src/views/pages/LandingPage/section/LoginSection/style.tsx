import { Button, Stack, styled } from '@mui/material'

export const LoginSection = styled(Stack)(({ theme }) => ({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
}))

export const LoginContainer = styled(Stack)(({ theme }) => ({
  width: 300,
  gap: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}))

export const LoginButton = styled(Button)(({ theme }) => ({
  gap: theme.spacing(2),
}))
