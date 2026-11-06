'use client'

import dynamic from 'next/dynamic'
import { ReactNode, useEffect, useState } from 'react'

import * as Styles from './style'

const CircularProgress = dynamic(() => import('@mui/material').then((m) => ({ default: m.CircularProgress })), {
  ssr: false,
})

type Props = {
  children: ReactNode
}

export default function Rendering({ children }: Props) {
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)

  useEffect(() => {
    const fetchRecords = async () => {
      await Promise.all([])
      setIsDataLoaded(true)
    }

    fetchRecords()
  }, [])

  if (!isDataLoaded)
    return (
      <Styles.LoadingStack>
        <CircularProgress color="primary" />
      </Styles.LoadingStack>
    )

  return children
}
