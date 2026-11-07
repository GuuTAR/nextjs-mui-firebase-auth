import Link from 'next/link'
import { ReactNode } from 'react'

import { Link as MuiLink } from '@mui/material'

type Props = {
  path?: string
  href?: string
  fullWidth?: boolean
  children: ReactNode
}

export default function CoreLink({ path, href, fullWidth, children }: Props) {
  if (path)
    return (
      <Link href={path} style={{ width: fullWidth ? '100%' : 'auto' }}>
        {children}
      </Link>
    )
  else
    return (
      <MuiLink href={href} sx={{ width: fullWidth ? '100%' : 'auto' }}>
        {children}
      </MuiLink>
    )
}
