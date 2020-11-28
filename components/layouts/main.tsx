import React from 'react'
import { Box } from 'theme-ui'
import Head from 'next/head'
import Link from 'next/link'
import { Footer } from 'components/layout/footer'

const Wrapper: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'hsl(230, 25%, 18%)',
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
        mx: 'auto',
        minHeight: '100vh',
        maxWidth: ['48rem', '60rem'],
        p: [4, 5],
      }}
    >
      <Box as="header" sx={{ pb: [5, 6] }}>
        <Link href="/">
          <Box
            as="a"
            sx={{ fontFamily: 'Rock Salt', fontWeight: 400, fontSize: [2, 3] }}
          >
            Frank Hock
          </Box>
        </Link>
      </Box>
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  )
}

type MainLayoutProps = {
  title?: string
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Frank Hock - Lancaster, PA',
}) => {
  return (
    <>
      <Head>
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
