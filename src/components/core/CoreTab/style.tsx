import { styled, Stack } from '@mui/material'

import { TabList, TabPanel } from '@mui/lab'

export const TapContainer = styled(Stack)({
  height: '100%',
})

export const TabDivider = styled(Stack)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

export const StyledTabList = styled(TabList)(({ theme }) => ({
  minHeight: 'auto',

  '& .MuiTabs-list, & .MuiTabs-flexContainer': {
    gap: theme.spacing(3),
  },

  '& .MuiTab-root': {
    minWidth: 'auto',
    minHeight: 'auto',
    padding: theme.spacing(1.5, 0.25),
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 600,
    textTransform: 'none',
    color: theme.palette.text.primary,
  },

  '& .MuiTab-root.Mui-selected': {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
  },
}))

export const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}))
