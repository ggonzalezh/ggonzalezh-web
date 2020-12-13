import renderEmpty from 'antd/lib/config-provider/renderEmpty'
import Particles from 'react-particles-js'

const ParticlesComponent = () => {
  const options = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      color: {
        value: 'rgb(255,202,40)',
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        enable: true,
        speed: 0.2,
      },
      size: {
        value: 1.5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.5,
        },
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1.5,
          opacity_min: 0.0005,
        },
      },
    },
    retina_detect: true,
  }
  return <Particles params={options} />
}

export default ParticlesComponent
