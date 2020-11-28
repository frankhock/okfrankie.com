import { deep } from '@theme-ui/presets'

export const theme = {
  ...deep,
  colors: {
    ...deep.colors,
    muted: 'hsl(0, 0%, 55%)',
  },
  fontWeights: {
    ...deep.fontWeights,
    medium: 500,
  },
  fonts: {
    ...deep.fonts,
    heading: 'Merriweather',
  },
  lineHeights: {
    ...deep.lineHeights,
    heading: 1.375,
  },
}
