import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FadeTransition from './FadeTransition'

class Title extends Component {
  render() {
    return (
      <FadeTransition> 
      <div className="title">
        <h1>Giancarlo Galliani</h1>
        <div className='title__signature'/>
          <h4>
            <Link className="title__link" to="about">[About]</Link> 
            <Link className="title__link" to="projects">[Projects]</Link>  
            <Link className="title__link" to="contact">[Contact]</Link>
          </h4>
        </div>
      </FadeTransition>
      )
    }
  }

export default Title