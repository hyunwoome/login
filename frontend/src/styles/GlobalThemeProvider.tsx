import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import GlobalStyle from './GlobalStyle';

interface Prop {
  children?: React.ReactElement;
}

const GlobalThemeProvider = ({ children }: Prop): React.ReactElement => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
