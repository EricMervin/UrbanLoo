import { useState } from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Dot from '@mui/icons-material/FiberManualRecord';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Features() {
  const features = [0, 1, 2, 3, 4, 5, 6];
  const [ featureNo, setFeatureNo ] = useState(1);
  var nextFeature = 0;


  setTimeout(() => {
    nextFeature = (featureNo + 1) % 7;
    setFeatureNo(nextFeature);
  }, 5000)


  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
      <Typography variant="h4" sx={{textTransform: 'uppercase', mb: {md: -10, sm: -3, xs: 2} , position: 'relative', fontSize: {md: 30, sm: 25, xs: 25}, letterSpacing: 5, mx: {xs: 5}}} color="black">
        Features of <strong>URBAN LOO</strong>
      </Typography>
      <img src={matches? "/feature" + (featureNo + 1) + ".png": "/featureSmall" + (featureNo + 1) + ".png"} width="90%" />
      <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: {md: -10, ms: -1, xs: 2}}}>
        {features.map((item, idx) => (
          <IconButton onClick={() => setFeatureNo(item)} key={idx}><Dot color={(featureNo == item)? "primary": "grey"}/></IconButton>
        ))}
      </Box>
    </Box>
  )
}
