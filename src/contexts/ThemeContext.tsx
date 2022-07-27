import { ThemeOptions, ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import React from 'react';

const styles: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      light: '#a6ff5d',
      main: '#91FE39',
      dark: '#64d408',
    },
    secondary: {
      main: '#e2c445',
      dark: '#a78a0b',
    },
    divider: '#464b5f73',
    background: {
      default: '#02071b',
      paper: '#111529',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffffCC',
      disabled: '#a2a2a2',
    },
    action: { disabled: '#a2a2a2' },
  },
  spacing: 4,
  typography: {
    fontFamily: 'Montserrat',
    allVariants: {
      color: '#ffffff',
    },
  },
};

const ThemeContext: React.FC = ({ children }) => {
  const theme = React.useMemo(() => responsiveFontSizes(createTheme(styles), {}), []);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContext;
