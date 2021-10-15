import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important;
  }

  html {
    height: 100vh;
    background-color: #FFDEE9;
    background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
  }
`;

export {GlobalStyle};
