'use client'

import { ReactNode, useEffect, useState } from 'react'

import { CircularProgress } from '@mui/material'

import { useAppData } from '@/providers/AppDataProvider'

import * as Styles from './style'

type Props = {
  children: ReactNode
}

export default function Rendering({ children }: Props) {
  const { isAppInitialized } = useAppData()

  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)

  useEffect(() => {
    const fetchRecords = async () => {
      await Promise.all([])
      setIsDataLoaded(true)
    }

    if (isAppInitialized) {
      fetchRecords()
    }
  }, [isAppInitialized])

  return (
    <Styles.LoadingStack>
      {!isDataLoaded && <CircularProgress color="primary" />}
      <Styles.Content isVisible={isDataLoaded}>{children}</Styles.Content>
    </Styles.LoadingStack>
  )
}
