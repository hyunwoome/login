import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    height: 100%;
    background: rgb(250,106,106);
    background: linear-gradient(323deg, rgba(250,106,106,1) 12%, rgba(247,222,211,1) 82%);
  }
`;

export default GlobalStyle;
