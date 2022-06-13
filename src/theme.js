import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import "@fontsource/nunito-sans";
import "@fontsource/andada-pro"; 

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#3E6D95',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Nunito Sans'
  }
});

export default theme;
