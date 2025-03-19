import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3 {
    font-weight: 600;
  }
`;

export default GlobalStyles;
