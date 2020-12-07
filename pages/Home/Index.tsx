import React, { useState } from 'react'
import HomeContainer from './Style'
import Intro from '../Intro/Index'
import About from '../About/Index'
import Contact from '../Contact/Index'

const Home = ({ isLightMode }) => {
  const [currentPage, setCurrentPage] = useState('/')
  return (
    <HomeContainer>
      {currentPage === '/contact' ? (
        <Contact setCurrentPage={setCurrentPage} isDarkMode={isLightMode} />
      ) : currentPage === '/about' ? (
        <About setCurrentPage={setCurrentPage} />
      ) : (
        <Intro setCurrentPage={setCurrentPage} />
      )}
    </HomeContainer>
  )
}

export default Home
