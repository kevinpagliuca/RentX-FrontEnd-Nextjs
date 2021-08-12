import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
  cursor: pointer;
  }  

  #__next {
    min-height: 100vh;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.50%;
    }
  }

  :root {
    --main: #DC1637;
 
    --red-50: rgba(220,22,55,0.5);

    --green-500: #03B352;

    --white:#FFFFFF;

    --gray-50:#F4F5F6;
    --gray-100:#EBEBF0;
    --gray-300:#DEDEE3;
    --gray-400:#7A7A80;
    --gray-500:#47474D;

    --dark: #1B1B1F;

    --black: #000000;

  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--red-50);
    border-radius: 0;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0;
    background: var(--dark);
  }
`;
