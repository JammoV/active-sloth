import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export const GlobalStyle = createGlobalStyle` 
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: white;
    color: ${theme.textColor};
    font-family: 'Roboto', sans-serif;
    padding-bottom: 400px;
    margin: 0;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Roboto', sans-serif;
  }
  
  h2 {
    font-size: 23px;
    margin: 20px 0 10px 0;
  }
  
  h3 {
    font-size: 20px;
    margin: 20px 0 10px 0;
  }
  
  h4 {
    font-size: 18px;
    margin: 20px 0 5px 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100%;
  }
  
  img {
    max-width: 100%;
  }

  p,
  label {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.8;
    margin: 0;
    padding: 0;
  }
  
  p {
    margin-bottom: 20px;
    
    a {
      color: ${theme.linkColor};
      font-weight: bold;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  @media screen and (max-width: ${theme.screenSmMax}) {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 21px;
    }
  }
`;
