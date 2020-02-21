import React, { Component } from 'react';
import Cloud from './components/cloud-text/cloudText';
import Portrait from './components/portrait/portrait';
import './App.css';
import Particles from 'react-particles-js';

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

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <Portrait></Portrait>
          <Cloud></Cloud>
        </div>
        <Particles className="background"
          params={particlesOpts}
        />
      </div>
    )
  }
}
