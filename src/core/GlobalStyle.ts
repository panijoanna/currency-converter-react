import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<Theme>`
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
    background: ${({ theme }) => theme.color.zircon};
  }
`;
