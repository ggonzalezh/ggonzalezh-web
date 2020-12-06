import React from 'react'
import IntroContainer from './Style'

const Intro = ({ asd }) => {
  return (
    <IntroContainer>
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '34px',
        }}
      >
        Hi, I am Guillermo
        <img
          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          width="40px"
          style={{ marginLeft: '15px' }}
        ></img>
      </h1>
      <p>
        A full stack developer who loves open source and values learning and
        growing with people, teams, and technologies.
      </p>
      <p onClick={() => asd(false)} style={{ cursor: 'pointer' }}>
        Read more about me or contact me
      </p>
    </IntroContainer>
  )
}

export default Intro
