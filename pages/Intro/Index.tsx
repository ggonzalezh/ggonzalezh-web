import React from 'react'
import Image from 'next/image'
import { useTransition, animated } from 'react-spring'

const Intro = ({ setCurrentPage }) => {
  const transitions = useTransition(0, p => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <div style={{ marginTop: '15%' }}>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div style={props}>
            <h1>
              Hi, I am Guillermo
              <img
                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                width="40px"
                style={{ marginLeft: '15px' }}
              ></img>
            </h1>
            <p>
              A full stack developer from Chile, who loves open source and
              values learning and growing with people, teams, and technologies.
            </p>
            <p>
              Read more{' '}
              <mark onClick={() => setCurrentPage('/about')}>about me</mark> or{' '}
              <mark onClick={() => setCurrentPage('/contact')}>contact me</mark>
            </p>
          </animated.div>
        )
      })}
    </div>
  )
}

export default Intro
