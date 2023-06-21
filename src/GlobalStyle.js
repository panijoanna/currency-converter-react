import { createGlobalStyle } from "styled-components";
import background from "./background.png";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Hanken Grotesk', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-size: 16px;
    margin: auto;
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
`;
