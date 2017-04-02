import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Title extends Component {
  render() {
    return (
      <div className="title">
        <h1 className='title__heading'>Giancarlo Galliani</h1>
        <div className='title__signature'/>
          <h4>
            <Link className="title__link" to="about">About</Link> 
            <Link className="title__link" to="projects">Projects</Link>  
            <Link className="title__link" to="contact">Contact</Link>
          </h4>
        </div>
      )
    }
  }

export default Title