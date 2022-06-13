import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'


export default function Footer() {
  const links = {
    'Home': '#',
    'About': '#',
    'Contact': '#',
    'Gallery': '#',
    'Legal': '#',
    'Privacy Policy': '#',
  }
  return (
    <Box sx={{minHeight: '30vh', bgcolor: 'black', p: {md: 10, xs: 5}, px: 10, color: 'white'}}>
      <Grid container justifyContent="space-between" flexDirection={{md: 'row', xs: 'column'}}>
        <Grid item>
          <Typography variant="h5" sx={{fontSize: {md: 25, xs: 20}}}><b>Quick</b> Links</Typography>
          <Box sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}, alignItems: 'flex-start', my: {md: 0, xs: 3}}}>
            {
              Object.keys(links).map((link, idx) => (
                <Button
                  variant="text"
                  sx={{textTransform: 'capitalize', color: 'white', mr: 5, p: 0, ml: {md: -1, xs: 0}, mt: 1, justifyContent: {md: 'center', xs: 'flex-start'}}}
                  key={idx}
                  href={links[link]}
                >
                  {link}
                </Button>
              ))
            }
          </Box>
        </Grid>
        <Grid item sx={{textAlign: {md: 'right', sm: 'left'}, mt: {sm: 3}}}>
          <Typography variant="h6" sx={{fontWeight: 200}}>Built and Operated by</Typography>
          <Typography variant="h5" sx={{fontSize: {md: 25, xs: 20}}}><b>Toilets & Toilets Pvt. Ltd.</b></Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
