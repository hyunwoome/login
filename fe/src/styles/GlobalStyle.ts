import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    height: 100%;
    background-color: #FFE2E2;
  }
`;

export default GlobalStyle;
