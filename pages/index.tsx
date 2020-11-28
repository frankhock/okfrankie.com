import { Box, Heading, Text, Image, Link } from 'theme-ui'
import axios from 'axios'

import { Container } from 'components/layout/container'
import { MainLayout } from 'components/layouts'
import { Seo } from 'components/seo'

export default function Home(props) {
  const { tracks } = props

  return (
    <MainLayout>
      <Seo />
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

        <Heading as="h2" sx={{ mt: 5, mb: 3, fontSize: [4, 5] }}>
          Top Jams
        </Heading>

        <Text sx={{ mb: 3 }}>
          Here's a list of my favorite tracks on Spotify&nbsp;
          <Text as="span" sx={{ color: 'muted' }}>
            (updated daily)
          </Text>
          .
        </Text>

        {tracks.map((t, i) => (
          <Box key={t.id} sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
            <Box sx={{ width: '1rem', flex: '0 0 auto' }}>{i + 1}</Box>
            <Box sx={{ ml: 3, lineHeight: 0, flex: '0 0 auto' }}>
              <Image
                src={t.album.images[1].url}
                sx={{ width: ['50px', '75px'], height: ['50px', '75px'] }}
              />
            </Box>
            <Box sx={{ ml: 3, flex: '1 1 auto' }}>
              <Box sx={{ fontWeight: 'medium' }}>
                <Link
                  href={t.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.name}
                </Link>
              </Box>
              <Box sx={{ color: 'muted' }}>{t.artists[0].name}</Box>
            </Box>
          </Box>
        ))}
      </Container>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const topTracksRes = await axios.post(process.env.TOP_TRACKS_API_URL)

  return {
    props: {
      tracks: topTracksRes.data.items,
    },
  }
}
