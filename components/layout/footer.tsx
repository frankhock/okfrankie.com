import React from 'react'
import { Box, Link } from 'theme-ui'

export const Footer: React.FC = () => {
  return (
    <Box as="footer" sx={{ py: 4 }}>
      <Link
        href="https://github.com/frankhock"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mr: 3,
        }}
      >
        GitHub
      </Link>

      <Link
        href="https://www.linkedin.com/in/frank-hock/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Link>
    </Box>
  )
}
