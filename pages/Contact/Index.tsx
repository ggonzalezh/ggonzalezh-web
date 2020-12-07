import React from 'react'
import Image from 'next/image'
import Email from '../../multimedia/email.svg'
import Linkedin from '../../multimedia/linkedin.svg'
import Twitter from '../../multimedia/twitter.svg'
import Github from '../../multimedia/github.png'
import ContactDiv from './Style'
import { useTransition, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Contact = ({ setCurrentPage }) => {
  const transitions = useTransition(0, p => p, {
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div style={props}>
            <FontAwesomeIcon
              onClick={() => setCurrentPage('/')}
              icon={faChevronLeft}
              style={{
                fontSize: '24px',
                cursor: 'pointer',
                color: 'rgb(255, 202, 40)',
              }}
            />
            <h1
              style={{
                fontWeight: 'bold',
                fontSize: '34px',
              }}
            >
              Contact
            </h1>
            <p style={{ fontSize: '18px', marginBottom: '40px' }}>
              Do you have a project in mind? Want to hire me? Or simply wanna
              chat? Feel free to reach out
            </p>
            <ContactDiv>
              <Image width={30} height={30} src={Email} />
              <span>hello@ggonzalezh.dev</span>
            </ContactDiv>
            <ContactDiv>
              <Image width={30} height={30} src={Github} />
              <span>ggonzalezh</span>
            </ContactDiv>
            <ContactDiv>
              <Image width={30} height={30} src={Twitter} />
              <span>ggonzalezh_cl</span>
            </ContactDiv>
            <ContactDiv>
              <Image width={30} height={30} src={Linkedin} />
              <span>ggonzalezhidalgo</span>
            </ContactDiv>
          </animated.div>
        )
      })}
    </div>
  )
}

export default Contact
