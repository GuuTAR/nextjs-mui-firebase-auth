import { Stack, styled } from '@mui/material'

export const LoadingStack = styled(Stack)(() => ({
  height: '100vh',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const Content = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isVisible',
})<{ isVisible: boolean }>(({ isVisible }) => ({
  display: isVisible ? 'flex' : 'none',
  width: '100%',
}))
