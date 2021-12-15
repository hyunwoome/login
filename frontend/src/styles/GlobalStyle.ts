import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important;
  }

  html {
    height: 100vh;
    background-color: #F7F7F7;
  }
`;

export { GlobalStyle };
