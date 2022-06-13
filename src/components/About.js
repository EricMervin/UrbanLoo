import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import useMediaQuery from '@mui/material/useMediaQuery';

export default function About() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return(
    <Box sx={{mb: 4}}>
      <Box sx={{display: {md: 'flex', xs: 'block'}, p: 5}}>
        <Typography variant="h3" sx={{color: "#646464", fontStyle: 'italic', fontFamily: 'Andada Pro', letterSpacing: 0}}>
          About
        </Typography>
        <Typography variant="h3" color="primary" sx={{ml: {md: 2}, mt: {md: 0,xs: 1}}}>
          The Urban Loo
        </Typography>
      </Box>
      <Box sx={{position: 'relative', overflowX: 'hidden'}}>
        <img src="/aboutBanner.png" width={matches? "100%" : "300%"}/>
        <Box sx={{position: 'absolute', bottom: 0, right: '60%'}}>
          <img src="/aboutPaths.png" width={matches? "100%" : "300%"}/>
        </Box>
      </Box>
      <Box sx={{p: 5, width: {md: '70%', sm: '100%', xs: '100%'}}}>
        <Typography variantt="body2" sx={{lineHeight: 1.5, fontSize: 15}}>
          Toilets & Toilet Pvt Ltd has been incorporated in 2001  with aim and object to  bring a desired paradigm shift in the way public toilets were perceived and planned in its designing and execution . We are working in Ahmedabad , Kolkata , Hyderabad , Vijayawada , Vizag , Coimbatore , Mumbai , Uttar Pradesh , Uttarakhand and NCR .
        </Typography>
      </Box>
    </Box>
  )

}
