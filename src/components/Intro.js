import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery';


function Intro({heading, bold, children, img}) {
  return (
    <Box sx={{
      height: {md: 400, sm: 300, xs: 250},
      width: {md:'90%', sm: '100%', xs: '100%'},
      borderRadius: 10,
      bgcolor: '#EDEDED',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      p: 2,
      mx: {xs: 0},
      pt: {md: 6, sm: 4, xs: 2}
    }}>
      <Typography variant="h6" sx={{textTransform: 'uppercase', fontWeight: '200', fontSize: {md: 20, sm: 15, xs: 15}, textAlign: 'center'}}>{heading + ' '}<strong>{bold}</strong></Typography>
      <Typography variant="body2" sx={{lineHeight: 1, textAlign: 'center', width: '90%', mt: {md: 2, sm: 1, xs: 1}, fontSize: {md: 15, sm: 12, xs: 8}}}>{children}</Typography>
      <Box sx={{p: 2, display: 'flex', alignItems:'center', justifyContent: 'center', height:'100%'}}><img src={img} width="60%"/></Box>
    </Box>
  )
}
export default function Component() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <Box
      sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: 'black',
            px: {md: 10, sm: 5, xs: 2},
            py: 10,
            background: 'url("/introBg.png")',
            backgroundSize: {md: '100% 70%', sm: '200% 100%'},
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            position: 'relative',
            pb: 25,
          }}
    >
      <Box sx={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start'}}>
        <img src="/logo.png" width={matches? '10%': '30%'}/>
        <Box sx={{ml: 1, maxWidth: 20}}><img src="/dot.png" width='100%'/></Box>
        <Typography variant="h6" sx={{textTransform: 'uppercase', color: 'white', fontWeight: '200', mx: 1, fontSize: {md: 20, sm: 10, xs: 10}}}>REVOLUTIONIZING USERS’ EXPERIENCES OF public TOILETS in India</Typography>
      </Box>
      <Typography variant="h2" sx={{color: 'white', mt: 2, fontWeight: '500', fontSize: {md: 75, sm: 20, xs: 30}}}>Filled With Experience.</Typography>
      <Grid container spacing={matches? 5: 1} justifyContent="center" alignItems="center" sx={{pt: {md: 20, sm: 10, xs: 5}, width: '100%', px: 0, alignSelf: 'center', zIndex: 1}}>
        <Grid item md={4} xs={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <Intro heading="A HUMAN" bold="NEED" img="/intro4.png">
            The presence of state-of-the-art toilet facilities in public places is a feel good factor & Urban Loo leads the way.
          </Intro>
        </Grid>
        <Grid item md={4} xs={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: {md: -15}}}>
          <Intro heading="Restoring" bold="dignity" img="/intro2.png">
             We understand the needs of women and girls and have gone an extra mile to make the toilets women friendly. Urban loo has baby stations and sanitary napkins.
          </Intro>
        </Grid>
        <Grid item md={4} xs={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Intro heading="Modernizing" bold="India" img="/intro3.png">
            Public toilets are important landmarks of any modern smart city. It speaks volumes of who we are, and how we perceive our city to be like.
          </Intro>
        </Grid>
      </Grid>

      <Box sx={{position: 'absolute', bottom: {md: 0, sm: '20%'}, width: {md: '100%', sm: '100%'}, left: 0}}><img src="/introBg2.png" width="100%"/></Box>
    </Box>
  )
}
