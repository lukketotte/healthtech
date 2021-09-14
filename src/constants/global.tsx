import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width:100vw;
    overflow-x:hidden;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: whitesmoke;
    color: #1A1A1A;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    text-rendering: optimizeLegibility;
  }
  `;
