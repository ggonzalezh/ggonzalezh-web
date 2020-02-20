import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../../App.css';

export default class Particlesjs extends Component {
    render() {
        const particlesOpts = {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                }
            }
        }
        return (
            <Particles className="Background"
                params={particlesOpts}
            />
        )
    }
}