import React, { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "../theme/index";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? Dark : Light;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <button onClick={darkMode.enable}>DARK MODE</button>
      <button onClick={darkMode.disable}>Light mode</button>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default MyApp;
