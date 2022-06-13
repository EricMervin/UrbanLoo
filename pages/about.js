import TopBar from '../src/components/TopBar'
import Box from '@mui/material/Box'

import About from '../src/components/About'
import Gallery from '../src/components/Gallery'

export default function AboutPage() {
  return (
    <Box>
      <TopBar />
      <About />
      <Gallery />
    </Box>
  )
}
