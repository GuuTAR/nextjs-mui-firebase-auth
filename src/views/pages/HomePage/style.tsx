import { styled, Stack } from '@mui/material'

export const Content = styled(Stack)(({ theme }) => ({
  width: '100%',
  maxWidth: 1024,
  gap: theme.spacing(2),
}))

// The welcome header is hidden on mobile and tablet
export const HeaderSlot = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))
