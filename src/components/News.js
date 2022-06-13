import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery';


export default function News() {

  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const centered = {display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}
  const newsStyle = {display: 'flex', justifyContent: 'space-between', width: '100%', textAlign: {md: 'right', xs: 'center'}, py: {md: 4, xs: 3}, alignItems: 'center', flexDirection: {md: 'row', xs: 'column-reverse'}}
  return (
    <Box sx={{...centered, ...{mx: {md: 5, xs: 0}, my: 10}}}>
      <Paper sx={{...{borderRadius: 10, bgcolor: '#F5F5F5', width: {md: '90%', xs: '100%'}, p: {md: 6, xs: 3}, pb: 10}, ...centered}} elevation={3}>
        <Typography variant="h6" sx={{textTransform: 'uppercase', color:"#535353", fontWeight: 200, mb: {md: 6, xs: 2}, width: {md: '100%', xs: '80%'}, textAlign: 'center'}}>
          <strong> URBAN LOO </strong> IN THE NEWS
        </Typography>
        <Box sx={newsStyle}>
          <img src="/news1.png" height={matches? "40px": "30px"}/>
          <Typography variant="h5" sx={{fontWeight: 700, opacity: 0.7, fontSize: {md: 35, xs: 25}, my: {md: 0, xs: 3}}}> ‘Another swanky loo in the city’</Typography>
        </Box>
        <Box sx={{...newsStyle, ...{borderTop: '1px solid grey', borderBottom: '1px solid grey', }}}>
          <img src="/news2.png" height={matches? "40px": "30px"}/>
          <Typography variant="h5" sx={{fontWeight: 700, opacity: 0.7, fontSize: {md: 35, xs: 25}, my: {md: 0, xs: 3}}}> ‘<Box component="span" sx={{color: "primary.main"}}>Urban Loo</Box> inaugurated at Secunderabad Railway Station’</Typography>
        </Box>
        <Box sx={newsStyle}>
          <img src="/news3.png" height={matches? "40px": "30px"}/>
          <Typography variant="h5" sx={{fontWeight: 700, opacity: 0.7, fontSize: {md: 35, xs: 25}, my: {md: 0, xs: 3}, width: {md: '100%', xs: '70%'}}}> ‘Why fear when <Box component="span" sx={{color: "primary.main"}}>Urban Loo</Box> is here?’</Typography>
        </Box>

      </Paper>
    </Box>
  )
}
