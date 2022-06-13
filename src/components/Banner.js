import Box from '@mui/material/Box'
// import { VideoCard } from 'material-ui-player'
import Button from '@mui/material/Button'


export default function Component() {
  const buttonStyles = {
    borderRadius: 50,
    px: 8,
    py: 1,
    mx:1,
    bgcolor: "black",
    fontSize: 20,
    textTransform: 'none',
    mt: {md: 0, sm: 3, xs: 3}
  }
  return (
    <Box
      sx={{
            height: '95vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'black',
            background: 'url("/bannerImg.png"), rgba(0, 0, 0, 1)',
            backgroundSize: {md: '100% 100%', sm: '200% 100%'},
            backgroundPosition: 'center',
          }}
    >
      {/* <video autoplay loop muted
      style={{
        height: '100vh',
        zIndex: -1
      }}
      >
          <source src="/hyd/video.mp4" type="video/mov" />
      </video> */}

      <Box sx={{pt: 30, display: 'flex', justifyContent: 'center', flexDirection: {md: 'row', sm: 'column', xs: 'column'}, alignItems: 'center'}}>
        <Button size="large" variant="contained" sx={buttonStyles}>Learn More</Button>
        <Button size="large" variant="contained" sx={buttonStyles}>Contact Us</Button>
      </Box>
    </Box>
  )
}
