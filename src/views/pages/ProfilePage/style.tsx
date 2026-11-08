import { styled, Stack } from '@mui/material'

export const Content = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  maxWidth: 520,
  width: '100%',
}))
