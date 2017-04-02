import React from 'react'

const Contact = props => {
  return (
    <div className='contact'>
      <h4 className='contact__heading'>Connect with me! You've got lots of options...</h4> 
      <p className='contact__text'> I promise I'll reply in full sentences (and maybe with an Emoji <span className='contact__emoji'>👍</span> ). </p>
      <ul className='contact__list'>
        <a href='https://uk.linkedin.com/in/giancarlo-galliani-0bb87ba8' target='_blank'>
          <li className='contact__list-item contact__list-item--linkedin'>
            <span className='contact__list-text'>LinkedIn</span>
          </li>
        </a>
        <a href='http://www.github.com/giancarlo88' target='_blank'>
          <li className='contact__list-item contact__list-item--github'>
            <span className='contact__list-text'>GitHub</span>
          </li>
        </a>
        <a href='http://www.twitter.com/juancarlito88' target='_blank'>
          <li className='contact__list-item contact__list-item--twitter'>
            <span className='contact__list-text'>Twitter</span>
          </li>
        </a>
        <a href='mailto:galliani.08@gmail.com' target='_blank'>
          <li className='contact__list-item contact__list-item--email'>
            <span className='contact__list-text'>Good old Email</span>
            </li>
          </a>
      </ul>
      
    </div>
  )
}

export default Contact