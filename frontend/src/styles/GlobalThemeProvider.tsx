import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@src/styles/GlobalStyle';
import { Theme } from '@src/styles/Theme';

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

export { GlobalThemeProvider };
