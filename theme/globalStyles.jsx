import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.2s linear;
    overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
  }

  .ant-layout-footer {
    position: fixed;
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
  `
