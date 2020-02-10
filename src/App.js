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
        <div>
          <img src={construction} className="Image" alt="me" />
        </div>
        <div >
          <div className="speech-bubble">
            <div className="bubble-margin">
              <h2 className="say-hi">Hola,</h2>
              <div className="presentation-all-text">
                <p>Mi nombre es Guillermo González, soy desarrollador de software y radico en Santiago, Chile.</p>
                <p>Me encanta JavaScript, TypeScript, el software libre-abierto y el continuo aprendizaje.</p>
                <p>Me considero una persona tranquila, pero ante cualquier conflicto, nos vemos en el Smash Bros junto a unas cervezas.</p>
                <p>Puedes encontrarme en: </p>
                <ul>
                  <li>
                    <a href="https://github.com/ggonzalezh">
                      <span><img src={githubImage} className="icon" alt="gitHubImage"/> Github</span>
                      <p className="social-media">Donde subo código, generalmente side project, pruebas de nuevas tecnologías, etc.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/ggonzalezh_cl">
                      <span><img src={twitterImage} className="icon"  alt="twitterImage"/> Twitter</span>
                      <p className="social-media">Donde hablo y sigo sobre las vanguardias de las tecnologías en el rubro del desarrollo de software.</p>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@ggonzalezh.dev">
                      <span><img src={gmailImage} className="icon" alt="gmailImage"/> Email</span>
                      <p className="social-media">Para contacto directo: hello@ggonzalezh.dev</p>
                    </a>
                  </li>
                </ul>
              </div>
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
