import { createTheme } from '@mui/material/styles';
import '@fontsource-variable/open-sans';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: { main: '#007749' }, // Verde Murchison
    secondary: { main: '#505E70' }, // Gris Medio / texto secundario
    error: { main: '#E41E2D' }, // Rojo AIT
    warning: { main: '#FF8200' }, // Naranja TZ
    info: { main: '#005C97' }, // Azul UTE
    success: { main: '#003A76' }, // Azul AIT
  },
  typography: {
    // fontFamily: ['Roboto', 'Open Sans', 'sans-serif'].join(','),

    h1: {
      fontFamily: 'Roboto',
      fontSize: '2.3125rem',
      letterSpacing: '-0.125rem',
      lineHeight: '2.75rem',
      fontWeight: 900,
    },
    h2: {
      fontFamily: 'Roboto',
      fontSize: 1.75,
      letterSpacing: -1.125,
      lineHeight: 2.75,
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: 1.3125,
      letterSpacing: -0.0625,
      lineHeight: 1.75,
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize: 1.1875,
      letterSpacing: -0.0625,
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Open Sans Variable',
      fontSize: 1.0625,
      letterSpacing: -0.0625,
      lineHeight: 1.5,
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Open Sans Variable',
      fontSize: 1,
      letterSpacing: 0,
      lineHeight: 1.5,
      fontWeight: 700,
    },
    button: {
      fontFamily: 'Open Sans Variable',
      textTransform: 'capitalize',
      fontSize: '1.125 rem',
      letterSpacing: '0 rem',
      lineHeight: '1.25 rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: '6px',
          padding: '2px 16px',
          fontSize: '0.875rem',
          // fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
