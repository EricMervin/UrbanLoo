import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Images from './Images'

export default function Gallery({id}) {
  return (
    <Box id={id}sx={{minHeight: '100vh', bgcolor: '#F5F5F5', p: 5}}>
      <Typography variant="h3" color="primary">
        The Urban Loo
      </Typography>
      <Box sx={{display: "flex", alignItems: 'center', position: 'relative', mt: 1}}>
        <Box component="span" sx={{ml: -5, height: {md: 3, xs: '3px'}, display: 'flex', alignItems: 'center', }}><img src="galleryLine.png" height="100%"/></Box>
        <Typography variant="h3" sx={{color: "#646464", fontStyle: 'italic', fontFamily: 'Andada Pro', letterSpacing: 0, ml: 4, fontSize: {md: 45, xs: 30}}}>
          Gallery - Hyderabad
        </Typography>
      </Box>
      <Images />
    </Box>
  )
}
