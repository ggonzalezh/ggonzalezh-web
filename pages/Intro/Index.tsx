import React from 'react'
import IntroContainer from './Style'
import { useTransition, animated } from 'react-spring'

const Intro = ({ setCurrentPage }) => {
  const transitions = useTransition(0, p => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
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
              Hi, I am <mark>Guillermo</mark>
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
            <p>
              Read more{' '}
              <mark
                onClick={() => setCurrentPage('/about')}
                style={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}
              >
                about me
              </mark>{' '}
              or{' '}
              <mark
                onClick={() => setCurrentPage('/contact')}
                style={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}
              >
                contact me
              </mark>
            </p>
          </animated.div>
        )
      })}
    </IntroContainer>
  )
}

export default Intro
