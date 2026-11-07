import { BottomNavigation, BottomNavigationAction, Container, Paper, Stack, styled } from '@mui/material'

export const Navbar = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2, 2),
  top: theme.spacing(2),
}))

export const MobileMenuContainer = styled(Container)(({ theme }) => ({
  position: 'fixed',
  width: '100%',
  bottom: theme.spacing(4),
  zIndex: 1000,
}))

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(0, 1),
  '.MuiBottomNavigation-root': {
    borderRadius: theme.spacing(4),
    gap: theme.spacing(0.5),
  },
}))

export const StyledBottomNavigation = styled(BottomNavigation)(() => ({
  justifyContent: 'space-evenly',
}))

export const MenuItems = styled(BottomNavigationAction)(({ theme }) => ({
  gap: theme.spacing(0.5),
  padding: 0,
  borderRadius: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    maxWidth: 56,
    minWidth: 56,
  },
}))
