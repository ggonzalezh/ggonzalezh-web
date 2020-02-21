import React, { Component, useState } from 'react';
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
        const github = show ? { display: 'block' } : { display: 'none' };
        return (
            <div>
                <div className="speech-bubble">
                    <div className="bubble-margin">
                        <div>
                            <h2 className="say-hi">Hola,</h2>
                            <div className="presentation-all-text">
                                <p>Mi nombre es Guillermo González, soy desarrollador de software y radico en Santiago, Chile.</p>
                                <p>Me gusta JavaScript, TypeScript, los proyectos comunitarios y el continuo aprendizaje.</p>
                                <p>Me considero una persona tranquila, pero ante cualquier conflicto, nos vemos en el Smash Bros junto a unas cervezas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}