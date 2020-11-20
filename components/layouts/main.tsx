import React from 'react'
import { Box } from 'theme-ui'
import Head from 'next/head'
import Link from 'next/link'

const Wrapper: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(/splash.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Box></Box>
      {children}
    </Box>
  )
}

const ContentArea: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        maxWidth: '48rem',
        p: [4, 5],
        bg: '#081326',
      }}
    >
      <Box as="header" sx={{ pb: [5] }}>
        <Link href="/">
          <Box
            as="a"
            sx={{ fontFamily: 'Rock Salt', fontWeight: 400, fontSize: [2] }}
          >
            O.K. Frankie
          </Box>
        </Link>
      </Box>
      <Box as="main">{children}</Box>
    </Box>
  )
}

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ok, Frankie.</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather&family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Wrapper>
        <ContentArea>{children}</ContentArea>
      </Wrapper>
    </>
  )
}
