import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.2s linear;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  a: hover{
    color: inherit;
    text-decoration: none;
  }

  .ant-layout-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: ${({ theme }) => theme.footer};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s linear;
    margin-top: 33px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text};
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
  
  `
