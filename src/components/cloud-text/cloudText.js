import React, { Component, useState } from 'react';
import twitterImage from '../../multimedia/twitter.png';
import githubImage from '../../multimedia/github.svg';
import gmailImage from '../../multimedia/gmail.png';
import construction from '../../multimedia/me.jpg';
import me from '../../multimedia/yo.jpg'
import me2 from '../../multimedia/yo4.jpg'
import './cloud.css';

export default class CloudText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    onMouseEnter = e => {
        this.setState({ show: true });
    };

    onMouseLeave = e => {
        this.setState({ show: false });
    };
    render() {
        const { show } = this.state;
        const github = show ? { visibility: 'visible' } : { visibility: 'hidden' };
        return (
            <div>
                <div className="wrapper">
                    <a href="https://github.com/ggonzalezh">
                        <div className="quarter left-top" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                            <img src={githubImage} className="githubIcon" alt="gitHubImage" /><br/>
                            <p className="textImage">github.com/ggonzalezh</p>
                        </div>
                    </a>
                    <a href="mailto:hello@ggonzalezh.dev">
                        <div className="quarter right-top">
                            <img src={gmailImage} className="gmailIcon" alt="gmailImage" />
                            <p className="textImage">hello@ggonzalezh.dev</p>
                        </div>
                    </a>
                    <a href="https://twitter.com/ggonzalezh_cl">
                        <div className="quarter left-bottom">
                            <img src={twitterImage} className="twitterIcon" alt="twitterImage" />
                            <p className="textImage">twitter.com/ggonzalezh_cl</p>
                        </div>
                    </a>
                    <div>
                        <div className="quarter right-bottom">
                            <img src={me2} className="image" alt="me" />
                        </div>
                    </div>
                </div>
                <div className="speech-bubble" >
                    <div className="bubble-margin">
                        <div>
                            <h2 className="say-hi">Hola,</h2>
                            <div className="presentation-all-text">
                                <p>Mi nombre es Guillermo González, soy desarrollador de software y radico en Santiago, Chile.</p>
                                <p>Me gusta JavaScript, TypeScript, los proyectos de comunidad y el continuo aprendizaje.</p>
                                <p>Me considero una persona tranquila, pero ante cualquier conflicto, nos vemos en el Smash Bros junto a unas cervezas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}