import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Toggle } from '../components/Toggle/Index'
import { GlobalStyles } from '../theme/globalStyles'
import { lightTheme, darkTheme } from '../theme/Themes'
import Home from './Home/Index'
import Sun from '../multimedia/sun.svg'
import Moon from '../multimedia/moon.svg'
import Footer from '../components/Footer/Index'
import 'antd/dist/antd.css'

const Index = () => {
  const [darkMode, setDarkMode] = useState(false)

  const themeToggler = () => {
    darkMode === true ? setDarkMode(false) : setDarkMode(true)
  }
  return (
    <ThemeProvider theme={darkMode === true ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Toggle
        checkedValue={
          <img style={{ width: '2.5em', float: 'left' }} src={Sun}></img>
        }
        uncheckedValue={
          <img style={{ width: '2.2em', float: 'right' }} src={Moon}></img>
        }
        handleFunction={themeToggler}
      ></Toggle>
      <Home isLightMode={darkMode} />
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default Index
