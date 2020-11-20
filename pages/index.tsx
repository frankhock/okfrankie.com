import { Box, Heading } from 'theme-ui'

import { Container } from 'components/layout/container'
import { MainLayout } from 'components/layouts'

export default function Home() {
  return (
    <MainLayout>
      <Container>
        <Heading as="h1">
          Full-stack Developer at Cloudnexa. Based in Lancaster, PA.
        </Heading>
      </Container>
    </MainLayout>
  )
}
