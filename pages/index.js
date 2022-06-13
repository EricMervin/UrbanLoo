import * as React from 'react';
import Box from '@mui/material/Box';

import Banner from '../src/components/Banner'
import Intro from '../src/components/Intro'
import Feature from '../src/components/Feature'
import Mission from '../src/components/Mission'
import News from '../src/components/News'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import TopBar from '../src/components/TopBar'

export default function Index() {
  return (
    <Box sx={{maxWidth: '100%', overflowX: 'hidden'}}>
      <TopBar />
      <Banner />
      <Intro id="intro"/>
      <Mission id="mission"/>
      <Feature id="feature"/>
      <News />
      <Contact id="contact"/>
      <Footer id="footer"/>
    </Box>
  );
}
