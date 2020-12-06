import React, { useState } from 'react'
import HomeContainer from './Style'
import Intro from '../Intro/Index'
import About from '../About/Index'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(true)
  return (
    <HomeContainer>
      {currentPage ? (
        <Intro asd={setCurrentPage} />
      ) : (
        <About asd={setCurrentPage} />
      )}
    </HomeContainer>
  )
}

export default Home
