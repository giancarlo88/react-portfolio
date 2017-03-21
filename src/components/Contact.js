import React, { Component } from 'react'
import FadeTransition from './FadeTransition'

const Contact = props => {
  return (
    <div className='contact'>
      Connect with me! You've got lots of options... 
      <ul className='contact__list'>
        <a href="#">
          <li className='contact__list-item contact__list-item--linkedin'>
            <span>LinkedIn</span>
          </li>
        </a>
        <a href="#">
          <li className='contact__list-item contact__list-item--github'>
            <span>GitHub</span>
          </li>
        </a>
        <a href="#">
          <li className='contact__list-item contact__list-item--twitter'>
            <span>Twitter</span>
          </li>
        </a>
        <a href="#">
          <li className='contact__list-item contact__list-item--email'>
            <span>Good old Email</span>
            </li>
          </a>
      </ul>
      
    </div>
  )
}

export default Contact