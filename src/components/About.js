import React from 'react'
import aboutText from '../text/text.json'

const About = props => {
  return (
    <div className='about'>
      <h2 className='about__heading'>
        About me
      </h2>
      <div className='about__content'>
        <div className='about__picture'/>
        <div className='about__text'>
        {aboutText.map((item, index) => {
          return <p key={index}>{item.text}</p>
        })}
        </div>
      </div>
    </div>
  )
}

export default About