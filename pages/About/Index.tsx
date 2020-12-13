import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import AboutContainer from './Style'
import Image from 'next/image'
import TypeScript from '../../multimedia/typescript-icon.svg'
import JavaScript from '../../multimedia/javascript.svg'
import ReactSVG from '../../multimedia/react.svg'
import Heroku from '../../multimedia/heroku-icon.svg'
import Firebase from '../../multimedia/firebase.svg'
import Python from '../../multimedia/python.svg'
import NodeJS from '../../multimedia/nodejs-icon.svg'
import MongoDb from '../../multimedia/mongodb-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const About = ({ setCurrentPage }) => {
  const transitions = useTransition(0, p => p, {
    from: { opacity: 0, transform: 'translate3d(100,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <AboutContainer>
      <div className={'about'}>
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div style={props}>
              <div style={{ textAlignLast: 'end' }}>
                <FontAwesomeIcon
                  onClick={() => setCurrentPage('/')}
                  icon={faChevronRight}
                  className={'arrows'}
                />
              </div>
              <h1>About</h1>
              <p className={'about'}>
                A software engineer who loves to collaborate and build
                well-structured, scalable applications. I’ve written code in
                high-paced and challenging environment with an emphasis on using
                best practices to develop high-quality software that meets
                project requirements, budget, and schedule. Also, an avid open
                source contributor who values learning and growing with people,
                teams, and technologies.
              </p>
              <p>
                <mark>
                  <a
                    href={'https://github.com/ggonzalezh/CV/tree/english'}
                    target={'_blank'}
                  >
                    Checkout my resume
                  </a>
                </mark>
              </p>
              <h1
                style={{
                  fontWeight: 'bold',
                  fontSize: '33px',
                }}
              >
                Technologies I work with
              </h1>
              <div>
                <Image width={40} height={40} src={TypeScript} />
                <Image width={40} height={40} src={JavaScript} />
                <Image width={40} height={40} src={ReactSVG} />
                <Image width={40} height={40} src={Heroku} />
                <Image width={40} height={40} src={Firebase} />
                <Image width={40} height={40} src={Python} />
                <Image width={40} height={40} src={NodeJS} />
                <Image width={40} height={40} src={MongoDb} />
              </div>
            </animated.div>
          )
        })}
      </div>
    </AboutContainer>
  )
}

export default About
