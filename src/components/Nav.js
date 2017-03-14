import React, { PropTypes } from 'react'

const Nav = props => { 
  const { isOpen, handleCloseClick } = props
  const classNames = isOpen ? 'navigation active' : 'navigation'
  return (
    <nav className={classNames}>
      <div onClick={handleCloseClick} className='navigation__close'>&times;</div>
      <ul>
        <li className='navigation__menu-item'>home</li>
        <li className='navigation__menu-item'>about</li>
        <li className='navigation__menu-item'>projects</li>
        <li className='navigation__menu-item'>contact</li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  isOpen: PropTypes.bool, 
  handleCloseClick: PropTypes.func
}

export default Nav