import React from 'react'
import { Box, BoxProps } from 'theme-ui'

type Props = BoxProps

export function Container({ children }: Props) {
  return <Box sx={{ width: ['100%'], px: 2 }}>{children}</Box>
}
