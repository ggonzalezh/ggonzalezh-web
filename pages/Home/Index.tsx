import React, { useState } from 'react'
import Fullscreen from './Style'
import Responsive from './Responsive'
import Intro from '../Intro/Index'
import About from '../About/Index'
import Contact from '../Contact/Index'

const Home = ({ isLightMode, isFullScreen, screen }) => {
  const [currentPage, setCurrentPage] = useState('/')
  const Container = isFullScreen ? Fullscreen : Responsive

  return (
    <Container>
      {currentPage === '/contact' ? (
        <Contact
          setCurrentPage={setCurrentPage}
          isDarkMode={isLightMode}
          screen={screen}
        />
      ) : currentPage === '/about' ? (
        <About setCurrentPage={setCurrentPage} screen={screen} />
      ) : (
        <Intro setCurrentPage={setCurrentPage} screen={screen} />
      )}
    </Container>
  )
}

export default Home
