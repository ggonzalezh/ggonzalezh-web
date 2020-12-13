import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Toggle } from '../components/Toggle/Index'
import { GlobalStyles } from '../theme/globalStyles'
import { lightTheme, darkTheme } from '../theme/Themes'
import Home from './Home/Index'
import Sun from '../multimedia/sun.svg'
import Moon from '../multimedia/moon.svg'
import Footer from '../components/Footer/Index'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Head from 'next/head'
import Particles from '../components/Particles/Index'
import 'antd/dist/antd.css'

const Index = () => {
  const [darkMode, setDarkMode] = useState(false)
  const isFullScreen = useMediaQuery('(min-width:775px)')
  const themeToggler = () => {
    darkMode === true ? setDarkMode(false) : setDarkMode(true)
  }
  return (
    <ThemeProvider theme={darkMode === true ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Head>
        <title>Guillermo González</title>
      </Head>
      {!darkMode && <Particles />}
      <Toggle
        checkedValue={
          <img style={{ width: '2.5em', float: 'left' }} src={Sun}></img>
        }
        uncheckedValue={
          <img style={{ width: '2.2em', float: 'right' }} src={Moon}></img>
        }
        handleFunction={themeToggler}
      ></Toggle>
      <Home isLightMode={darkMode} isFullScreen={isFullScreen} />
    </ThemeProvider>
  )
}

export default Index
