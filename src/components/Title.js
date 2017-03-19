import React, { Component } from 'react';
import { Link } from 'react-router'
import Transition from './Transition'

class Title extends Component {
  render() {
    return (
      <Transition
        transitionName='fade'
        appearTimeout={1000}
        leaveTimeout={1000}
        enterTimeout={1000}
        transitionAppear
        transitionEnter
        transitionLeave
      > 
      <div className="title">
        <h1>Giancarlo Galliani</h1>
        <div className='title__signature'/>
          <h4>
            <Link className="title__link" to="about">[About]</Link> 
            <Link className="title__link" to="projects">[Projects]</Link>  
            <Link className="title__link" to="sm">[Contact]</Link>
          </h4>
        </div>
      </Transition>
      )
    }
  }

export default Title