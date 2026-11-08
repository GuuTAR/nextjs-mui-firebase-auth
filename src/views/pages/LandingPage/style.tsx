import { Stack, styled } from '@mui/material'

export const LoginPageStyle = styled(Stack)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 0.5fr',
  width: '100%',
  minHeight: '100vh',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}))
