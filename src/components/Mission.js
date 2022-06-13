import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

function Statement() {
  return (
    <Paper sx={{borderRadius:  10, bgcolor: '#F8F8F8', textAlign: 'center', p: {md: 5, sm: 3, xs: 3}, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} elevation={3}>
      <Typography variant="h6" sx={{textTransform: 'uppercase', fontWeight: 200, fontSize: {md: 20, sm: 17, xs: 17}}} color="primary">Our <strong>Mission</strong></Typography>
      <Typography variant="body2" sx={{fontSize: {md: 15, sm: 12, xs: 12}, width: '90%', py: 2}}>
        Our mission is to build toilet facilities that all Indians feel at ease to use. We build spaces that are safe, clean, comparable to the swanky toilets at airports or malls and it enhances the modern landscape of the city.
      </Typography>
      <Typography variant="h6" sx={{textTransform: 'uppercase', fontWeight: 200, fontSize: {md: 20, sm: 17, xs: 17}}} color="primary">Our <strong>Vision</strong></Typography>
      <Typography variant="body2" sx={{fontSize: {md: 15, sm: 12, xs: 12}, width: '90%', py: 2}}>
        A India where unclean and unsafe sanitation systems are a thing of the past. Urban Loo seeks to build world class environmental friendly toilet facilities that sits in the heart of India’s growth story
      </Typography>
    </Paper>
  )
}

export default function Mission({id}) {
  return (
    <Box id={id} sx={{px: {md: 10, sm: 5, xs: 2}, mt: -10, pb: 10, zIndex: 1, position: 'relative', background: 'url("/missionBg.png")', backgroundPosition: {md: '20% 40%', xs: '20% 20%'}, backgroundRepeat: 'no-repeat', backgroundSize: {md: '100% 70%', xs: 'auto auto'}}}>
      <Statement />

      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', py: {md: 10, sm: 5, xs: 2}, mt: 5, mb: {md: 4, sm: 2, xs: 1}, textAlign: 'center', flexDirection: 'column'}}>
        <Typography variant="h5" sx={{textTransform: 'uppercase', letterSpacing: 1.3, fontSize: {md: 20, sm: 15, xs: 15}}} color="white">
          CLEANLINESS OF OUR CITIES <br/>
          IS A COLLECTIVE RESPONISIBILLITY
        </Typography>

        <Typography variant="h3" sx={{textTransform: 'uppercase', letterSpacing: 1.3, color:'#9FD2FF', fontWeight: 600, fontSize: {md: 50, sm: 40, xs: 40}, mt: 5}} color="white">
          Join <Box sx={{color: "white"}} component="span"> #TheUrbanloo</Box> mission
        </Typography>
      </Box>
      <Grid container spacing={{md: 5, sm: 3, xs: 0}} justifyContent="center" alignItems="center">
        <Grid item md={4} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', p: {md: 0, sm: 10, xs: 5}}}>
          <img src="/mission1.png" width='90%'/>
        </Grid>
        <Grid item md={4} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', p: {md: 0, sm: 10, xs: 5}}}>
          <img src="/mission2.png" width='90%'/>
        </Grid>
        <Grid item md={4} sm={12} xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', p: {md: 0, sm: 10, xs: 5}}}>
          <img src="/mission3.png" width='90%'/>
        </Grid>
      </Grid>
    </Box>
  )
}
