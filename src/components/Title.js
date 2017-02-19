import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <h1>Giancarlo Galliani</h1>
        <div className='title__signature'/>
          <h4>
            <a className="title__link" href="#about">[About]</a> 
            <a className="title__link" href="#links">[Projects]</a>  
            <a className="title__link" href="#sm">[Contact]</a>
          </h4>
        </div>
      )
    }
  }

export default Title