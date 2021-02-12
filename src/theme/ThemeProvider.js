import React from 'react';
import CloudHubThemeProvider from 'cloudhub-components/dist/theme/ThemeProvider';
import defaultsizes from 'cloudhub-components/dist/theme/Sizes';
import defaultcolors from 'cloudhub-components/dist/theme/Colors';
import defaultfonts from 'cloudhub-components/dist/theme/Fonts';
// import { ThemeProvider as CloudHubThemeProvider } from 'cloudhub-components/dist/mui/styles';
import getTheme from './getTheme';
import './libraries';
import '../assets/base.scss';

const ThemeProvider = ({ children, ...props }) => {
  const body = props.fonts.body || {};

  return (
    <CloudHubThemeProvider
      theme={getTheme({
        mainFonFamily: body.fontFamily || 'lato',
        ...props
      })}
      {...props}>
      {children}
    </CloudHubThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  fonts: { ...defaultfonts },
  colors: { ...defaultcolors },
  sizes: { ...defaultsizes }
};

export default ThemeProvider;
