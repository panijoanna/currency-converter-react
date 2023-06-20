import { createGlobalStyle } from "styled-components";
import background from "./bg.png";

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
    margin: 0px auto;
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100%;
  }
`;
