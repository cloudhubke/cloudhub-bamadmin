import React from 'react';
import CloudHubThemeProvider from 'cloudhub-components/dist/theme/ThemeProvider';
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
        ...props.colors
      })}
      {...props}>
      {children}
    </CloudHubThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  fonts: {},
  colors: {},
  sizes: {}
};

export default ThemeProvider;
