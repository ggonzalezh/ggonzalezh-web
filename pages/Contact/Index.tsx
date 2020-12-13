import React from 'react'
import Image from 'next/image'
import Email from '../../multimedia/email.svg'
import EmailBlack from '../../multimedia/email_black.svg'
import Linkedin from '../../multimedia/linkedin.svg'
import Twitter from '../../multimedia/twitter.svg'
import Github from '../../multimedia/github.png'
import GithubBlack from '../../multimedia/github_black.png'
import ContactDiv from './Style'
import { useTransition, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Contact = ({ setCurrentPage, isDarkMode, screen }) => {
  const transitions = useTransition(0, p => p, {
    from: { opacity: 0, transform: 'translate3d(100,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  const margen = screen ? '10%' : '2%'
  return (
    <div style={{ marginTop: margen }}>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div style={props}>
            <FontAwesomeIcon
              onClick={() => setCurrentPage('/')}
              icon={faChevronLeft}
              className={'arrows'}
            />
            <h1>Contact</h1>
            <p style={{ fontSize: '23px', marginBottom: '40px' }}>
              Do you have a project in mind? Want to hire me? Or simply wanna
              chat? Feel free to reach out
            </p>
            <ContactDiv>
              {isDarkMode ? (
                <Image width={30} height={30} src={EmailBlack} />
              ) : (
                <Image width={30} height={30} src={Email} />
              )}
              <span>
                <mark>
                  <a href={'mailto:hello@ggonzalezh.dev'}>
                    hello@ggonzalezh.dev
                  </a>
                </mark>
              </span>
            </ContactDiv>
            <ContactDiv>
              {isDarkMode ? (
                <Image width={30} height={30} src={GithubBlack} />
              ) : (
                <Image width={30} height={30} src={Github} />
              )}
              <span>
                <mark>
                  <a href={'https://github.com/ggonzalezh'} target={'_blank'}>
                    ggonzalezh
                  </a>
                </mark>
              </span>
            </ContactDiv>
            <ContactDiv>
              <Image width={30} height={30} src={Twitter} />
              <span>
                <mark>
                  <a
                    href={'https://twitter.com/ggonzalezh_cl'}
                    target={'_blank'}
                  >
                    ggonzalezh_cl
                  </a>
                </mark>
              </span>
            </ContactDiv>
            <ContactDiv>
              <Image width={30} height={30} src={Linkedin} />
              <span>
                <mark>
                  <a
                    href={'https://www.linkedin.com/in/ggonzalezhidalgo'}
                    target={'_blank'}
                  >
                    ggonzalezhidalgo
                  </a>
                </mark>
              </span>
            </ContactDiv>
          </animated.div>
        )
      })}
    </div>
  )
}

export default Contact
