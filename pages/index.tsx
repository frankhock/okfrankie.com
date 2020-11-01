import Head from 'next/head'
import { Box, Heading } from 'theme-ui'

import { Container } from '../components/layout/container'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Ok, Frankie.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Heading as="h1" sx={{ fontSize: [6, 7] }}>
          Frank Hock
        </Heading>
      </Container>
    </Box>
  )
}
