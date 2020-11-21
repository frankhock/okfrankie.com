import { Box, Heading, Text } from 'theme-ui'

import { Container } from 'components/layout/container'
import { MainLayout } from 'components/layouts'

export default function Home() {
  return (
    <MainLayout>
      <Container>
        <Heading as="h1" sx={{ mb: 3, fontSize: [5, 6] }}>
          Human. Thinker. Developer.
        </Heading>

        <Box as="figure">
          <Box
            as="blockquote"
            sx={{ fontStyle: 'italic', fontSize: [3], color: 'gray' }}
          >
            “Our life is what our thoughts make it.”
          </Box>
          <Box as="figcaption">— Marcus Aurelius</Box>
        </Box>
      </Container>
    </MainLayout>
  )
}
