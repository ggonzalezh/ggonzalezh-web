import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

const About = ({ asd }) => {
  const [items, setItems] = useState([
    { key: 1, item: ':D' },
    { key: 2, item: 'D:' },
  ])
  const transition = useTransition(items, item => item.key, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  })
  return (
    <div>
      {transition.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <div>{item.item}</div>
        </animated.div>
      ))}
      <p onClick={() => asd(true)}>VOLVER</p>
    </div>
  )
}

export default About
