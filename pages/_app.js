import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../theme/globalStyles";
import { lightTheme, darkTheme } from "../theme/Themes";
import { Toggle } from "../components/Toggle/Index";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);

  const themeToggler = () => {
    darkMode === true ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <ThemeProvider theme={darkMode === true ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Toggle
        checkedValue=":)"
        uncheckedValue=":("
        handleFunction={themeToggler}
      ></Toggle>
    </ThemeProvider>
  );
}

export default MyApp;
