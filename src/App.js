import React from 'react';
import construction from './multimedia/me.jpg';
import './App.css';
import Particles from 'react-particles-js';
import particlesOpts from './components/particles';
import twitterImage from './multimedia/twitter.png';
import githubImage from './multimedia/github.svg';
import gmailImage from './multimedia/gmail.png';

function App() {
  return (
    <div>
      <div className="Content">
        <div className="wrapper">
          <a href="https://github.com/ggonzalezh">
            <div className="quarter left-top">
              <img src={githubImage} className="githubIcon" alt="gitHubImage" />
            </div>
          </a>
          <a href="mailto:hello@ggonzalezh.dev">
            <div className="quarter right-top">
              <img src={gmailImage} className="gmailIcon" alt="gmailImage" />
            </div>
          </a>
          <a href="https://twitter.com/ggonzalezh_cl">
            <div className="quarter left-bottom">
              <img src={twitterImage} className="twitterIcon" alt="twitterImage" />
            </div>
          </a>
          <div className="quarter right-bottom">
            <img src={construction} className="image" alt="me" />
          </div>
        </div>
        <br></br>
        <div className="speech-bubble">
          <div className="bubble-margin">
            <h2 className="say-hi">Hola,</h2>
            <div className="presentation-all-text">
              <p>Mi nombre es Guillermo González, soy desarrollador de software y radico en Santiago, Chile.</p>
              <p>Me gusta JavaScript, TypeScript, los proyectos de comunidad y el continuo aprendizaje.</p>
              <p>Me considero una persona tranquila, pero ante cualquier conflicto, nos vemos en el Smash Bros junto a unas cervezas.</p>
              <p>Si te quieres comunicar conmigo, te invito a enviar un mail a hello@ggonzalezh.dev</p>
            </div>
          </div>
        </div>
      </div>
      <Particles className="Background"
        params={particlesOpts}
      />
    </div>
  );
}

export default App;
