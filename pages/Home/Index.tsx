import React, { useState } from 'react'
import Fullscreen from './Style'
import Responsive from './Responsive'
import Intro from '../Intro/Index'
import About from '../About/Index'
import Contact from '../Contact/Index'

const Home = ({ isLightMode, isFullScreen }) => {
  const [currentPage, setCurrentPage] = useState('/')
  const Container = isFullScreen ? Fullscreen : Responsive

  return (
    <Container>
      {currentPage === '/contact' ? (
        <Contact setCurrentPage={setCurrentPage} isDarkMode={isLightMode} />
      ) : currentPage === '/about' ? (
        <About setCurrentPage={setCurrentPage} />
      ) : (
        <Intro setCurrentPage={setCurrentPage} />
      )}
    </Container>
  )
}

export default Home
