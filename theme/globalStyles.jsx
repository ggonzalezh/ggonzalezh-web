import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s linear;
    font-size: 33px;
  }

  p{
    margin-top: 10px;
    font-weight: 300;
    font-size: 24px;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  a: hover{
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text};
    font-weight: bold;
    font-size: 47px;
  }

  mark{
    background: none;
    color: ${({ theme }) => theme.mark};
    cursor: pointer;
    font-weight: bold;
    text-decoration-line: underline;
    font-style: italic;
  }

  .arrows{
    color: ${({ theme }) => theme.mark};
    font-size: 24px;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  
  `
