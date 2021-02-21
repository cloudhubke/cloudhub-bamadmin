import { createMuiTheme } from 'cloudhub-components/dist/mui/core';

import shadows from './shadows';

const getTheme = ({ mainFonFamily, sizes, fonts, colors }) => {
  const {
    primaryColors,
    secondaryColors
    // tertiaryColors,
    // textColors,
    // backgroundColors
  } = colors;
  return createMuiTheme({
    palette: {
      primary: {
        main: '#3c44b1',
        ...primaryColors
      },
      grey: {
        300: '#fefefe',
        A100: '#f8f9ff'
      },
      secondary: {
        main: '#4191ff',
        ...secondaryColors
      },
      error: {
        main: '#f83245'
      },
      success: {
        main: '#1bc943'
      },
      info: {
        main: '#11c5db'
      },
      warning: {
        main: '#f4772e'
      },
      helpers: {
        primary: '#3c44b1',
        main: 'rgba(25, 46, 91, .035)'
      },
      contrastThreshold: 3,
      tonalOffset: 0.1
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 1100,
        xl: 1381
      }
    },
    shape: {
      borderRadius: '0.2rem'
    },
    overrides: {
      MuiTab: {
        root: {
          fontWeight: 'bold'
        }
      },

      MuiTooltip: {
        tooltip: {
          backgroundColor: '#070919',
          padding: '8px 16px',
          fontSize: '13px'
        },
        arrow: {
          color: '#070919'
        }
      }
    },
    typography: {
      fontFamily: [`${mainFonFamily}`, 'sans-serif'].join(','),
      htmlFontSize: 16,
      fontSize: 14
    },
    shadows,
    colors: { ...colors },
    sizes: { ...sizes },
    fonts: { ...fonts }
  });
};

export default getTheme;
