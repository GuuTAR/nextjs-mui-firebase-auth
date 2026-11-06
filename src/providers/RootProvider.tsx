'use client'

import { ReactNode } from 'react'

import { Stack, ThemeProvider } from '@mui/material'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { theme } from '@/theme/theme'

import Rendering from '@/components/core/Rendering'

type Props = {
  children: ReactNode
}

export default function RootProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack>
            <Rendering>{children}</Rendering>
          </Stack>
        </LocalizationProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
