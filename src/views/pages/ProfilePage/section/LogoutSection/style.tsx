import { styled, Button, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

export const LogoutButton = styled(Button)(({ theme }) => ({
  gap: theme.spacing(1.25),
  border: `1px solid ${theme.palette.error.light}`,
  borderRadius: theme.spacing(1.75),
  '&:hover': {
    background: theme.palette.error.light,
    borderColor: theme.palette.error.main,
  },
}))

export const LogoutIconStyled = styled(LogoutIcon)(({ theme }) => ({
  color: theme.palette.error.dark,
  fontSize: 18,
}))

export const LogoutText = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.dark,
  fontWeight: 700,
}))
