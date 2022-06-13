import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Contact({ id }) {
  return (
    <Box id={id} sx={{height: '98vh',
                      background: {md: 'url("/contactUsBg.png"), rgb(247, 247, 247)', xs: 'url("/contactBgMobile.png")'},
                      backgroundSize: {md: '100% auto', sm: 'auto auto', xs: '100% 70%'},
                      backgroundRepeat: {md: "no-repeat", xs: 'no-repeat'},
                      backgroundPosition: {md: 'center center', xs: 'center bottom'},
                      px: {md: 15, sm: 10, xs: 3},
                      py: {md: 15, sm: 10, xs: 2},
                      pb: {md: 15, sm: 10, xs: 10}}}>
      <Typography variant="h2" color="primary" sx={{textTransform: 'uppercase', fontSize: {md: 70, xs: 30}}}>Contact <strong>Us</strong></Typography>
      <Typography variant="h6" sx={{textTransform: 'capitalize', color: "#A8A8A8", fontWeight: 200, mb: 6}}>
        Mordernizing India <strong>Together</strong>
      </Typography>
      <Box sx={{my: 3, width: {md: '30%', sm: '90%', xs: '100%'} }}>
        <Button startIcon={<MailOutlineIcon sx={{ml: 2.2}}/>} variant="contained" sx={{bgcolor: "#464646", px: 2, borderRadius: 20, textTransform: 'none', fontSize: {md: 20, xs: 20}, justifyContent: 'space-evenly'}} fullWidth elevation={0}>
          contact@urbanloo.com
        </Button>
      </Box>
      <Box sx={{width: {md: '30%', sm: '90%', xs: '100%'}, mb: 3}}>
        <Button startIcon={<PhoneIcon />} variant="contained" sx={{bgcolor: "#464646", px: 2, borderRadius: 20, textTransform: 'none', fontSize: {md: 20, xs: 20}, justifyContent: 'space-evenly'}} fullWidth elevation={0}>
          +91 99632 66466
        </Button>
      </Box>
      <Box sx={{width: {md: '30%', sm: '90%',xs: '100%'}, textAlign: {md: 'center', xs: 'left'}}}>
        {/* <Typography variant="body2" sx={{ color: "#A8A8A8", ml: {xs: 2}, fontSize: {md: 20, xs: 15}}}>Take me there</Typography> */}
        <Button startIcon={<LocationOnIcon />} variant="contained" sx={{bgcolor: "#464646", px: 2, borderRadius: 20, textTransform: 'none', fontSize: {md: 20, xs: 20}, justifyContent: 'space-evenly'}} fullWidth elevation={0}>
          Visit a Urban Loo
        </Button>
      </Box>

    </Box>
  )
}
