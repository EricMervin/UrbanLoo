import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery';

import TopBar from '../src/components/TopBar'

export default function Location() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Box>
      <TopBar />
      <Box sx={{px: {md: 10, xs: 3}, py: 5}}>
        <Box sx={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start'}}>
          <img src="/logoDark.png" width={matches? '15%': '30%'}/>
          <Box sx={{ml: 1, maxWidth: 20, mb: {md: 0.5, xs: 0}, position: 'relative'}}><img src="/dotDark.png" width='100%'/></Box>
          <Typography variant="h6" sx={{textTransform: 'uppercase', fontWeight: '100', mx: 1, fontSize: {md: 25, sm: 10, xs: 10}}}>REVOLUTIONIZING USERS’ EXPERIENCES OF public TOILETS in India</Typography>
        </Box>
      </Box>
      <Grid container sx={{px: {md: 10, xs: 1}, py: {md: 2, xs: 0}}} spacing={{md: 0, xs: 4}}>
        <Grid item md={6} sx={{display: 'flex', alignItems: {md: 'flex-start', xs: 'center'}, mx: 0, justifyContent: {md: 'flex-start', xs: 'center'}}}>
          <iframe width="600" height="450" style={{border: 0, borderRadius: 10}} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.844393249029!2d78.49994551461407!3d17.434091406045834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbcf5dcd54aecf%3A0xe16a19b417174fb0!2sSecunderabad%20Railway%20Station%20Rd%2C%20Railway%20Officer%20Colony%2C%20Botiguda%2C%20Bhoiguda%2C%20Hyderabad%2C%20Telangana%20500003!5e1!3m2!1sen!2sin!4v1650271231604!5m2!1sen!2sin"></iframe>
        </Grid>
        <Grid item sx={{display: 'flex', alignItems: {md: 'flex-start', xs: 'center'}, mx: 0, justifyContent: {md: 'flex-start', xs: 'center'}}}>
          <img src="locationSkeleton.png" width="90%"/>
        </Grid>
      </Grid>
    </Box>
  )
}
