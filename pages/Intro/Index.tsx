import React from 'react'
import IntroContainer from './Style'
import { useTransition, animated } from 'react-spring'

const Intro = ({ asd }) => {
  const transitions = useTransition(0, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <IntroContainer>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div style={props}>
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
              A full stack developer who loves open source and values learning
              and growing with people, teams, and technologies.
            </p>
            <p onClick={() => asd(false)} style={{ cursor: 'pointer' }}>
              Read more about me or contact me
            </p>
          </animated.div>
        )
      })}
    </IntroContainer>
  )
}

export default Intro
