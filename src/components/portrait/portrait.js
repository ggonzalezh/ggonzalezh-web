import React, { Component } from 'react';
import githubImage from '../../multimedia/github.png';
import twitterImage from '../../multimedia/twitter2.png';
import gmailImage from '../../multimedia/gmail.png';
import me from '../../multimedia/yo4.jpg'
import './portrait.css';

export default class Portrait extends Component {
    render() {
        return (
            <div>
                <div className="portrait">
                    <a href="https://github.com/ggonzalezh"><img src={githubImage} className="github" alt="github"></img></a>
                    <a href="mailto:hello@ggonzalezh.dev"><img src={gmailImage} className="gmail" alt="gmail"></img></a>
                    <a href="https://twitter.com/ggonzalezh_cl"><img src={twitterImage} className="twitter" alt="twitter"></img></a>
                </div>
                <img src={me} className="image" alt="me" />
            </div>
        )
    }
}