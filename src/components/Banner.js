import Box from '@mui/material/Box'
// import { VideoCard } from 'material-ui-player'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function Banner({banner}) {
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
    <section>
      <Box
      sx={{
        position:'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '95vh'
      }}>
      <Box
      sx={{
        width: '100vw',
        height: '100vh',
        zIndex:"-1",
      }}>

      <video
        autoPlay
        muted
        loop
        style={{ height: "100%", width: "100%", objectFit: "cover" }} //object-fit:cover
      >
        <source src={"/hyd/video.mp4"} type="video/mp4" />
      </video>
      <Box
      sx={{
        position: 'absolute',
        marginTop: '-100vh',
        background:'black',
        opacity: 0.42,
        width:'100vw',
        height:'100vh',
      }} />
      </Box>
    </Box>
    <Box
      sx={{
            height: '95vh',
            display: 'flex',
            marginTop: '-95vh',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            // bgcolor: 'black',
            flexDirection: 'column',
            // background: 'url("/bannerImg.png"), rgba(0, 0, 0, 1)',
            // backgroundSize: {md: '100% 100%', sm: '200% 100%'},
            backgroundPosition: 'center',
          }}
    >
      <Box sx={{mb: {md: -60, sm: -50, xs: -50}, pt: 30, display: 'flex', justifyContent: 'center', flexDirection: {md: 'row', sm: 'row', xs: 'row'}, alignItems: 'center'}}>
        {/* <Link href="/#mission">
          <Button size="large" variant="contained" sx={buttonStyles}>Learn More</Button>
        </Link>
        <Link href="/#contact">
          <Button size="large" variant="contained" sx={buttonStyles}>Contact Us</Button>
        </Link> */}
        <Typography variant={"h6"} sx={{fontWeight: 200, color: 'white', fontSize: {md: 33, sm: 22.5, xs: 22.5}, paddingRight:{md:2, sm: 1, xs: 1}}}>Scroll down to learn more</Typography>
        <Box component="span" sx={{height: {md: 80, xs: '48px'}, display: 'flex', alignItems: 'center', }}><img src="dArrow.png" height="100%"/></Box>
      </Box>
    </Box>
    </section>
  )
}
