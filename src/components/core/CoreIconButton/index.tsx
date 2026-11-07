import { ReactNode } from 'react'

import { IconButton, IconButtonProps, Tooltip } from '@mui/material'

type Props = {
  tooltip?: string
  children: ReactNode
} & IconButtonProps

export default function CoreIconButton({ tooltip, children, ...iconButtonProps }: Props) {
  const iconButton: ReactNode = <IconButton {...iconButtonProps}>{children}</IconButton>

  if (!tooltip) return iconButton

  return <Tooltip title={tooltip}>{iconButton}</Tooltip>
}
