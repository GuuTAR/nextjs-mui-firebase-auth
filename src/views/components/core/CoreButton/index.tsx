import { ReactNode } from 'react'

import { Button, ButtonProps } from '@mui/material'

import CoreLink from '@/views/components/core/CoreLink'

type Props = {
  path?: string
  href?: string
  fullWidth?: boolean
  children: ReactNode
} & ButtonProps

export default function CoreButton({ path, href, fullWidth, children, ...buttonProps }: Props) {
  return (
    <CoreLink path={path} href={href} fullWidth={fullWidth}>
      <Button {...buttonProps} fullWidth={fullWidth}>
        {children}
      </Button>
    </CoreLink>
  )
}
