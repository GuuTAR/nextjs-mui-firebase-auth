'use client'

import { ReactNode } from 'react'

import { Stack, ThemeProvider } from '@mui/material'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { theme } from '@/theme/theme'

import { AppDataProvider } from '@/providers/AppDataProvider'

import Rendering from '@/components/core/Rendering'

type Props = {
  children: ReactNode
}

export default function RootProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <AppDataProvider>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack sx={{ height: '100vh', width: '100%' }}>
              <Rendering>{children}</Rendering>
            </Stack>
          </LocalizationProvider>
        </ThemeProvider>
      </AppDataProvider>
    </AppRouterCacheProvider>
  )
}
