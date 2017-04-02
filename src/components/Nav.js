import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

const Nav = props => { 
  const { isOpen, handleCloseClick } = props
  const classNames = isOpen ? 'navigation active' : 'navigation'
  return (
    <nav className={classNames}>
      <div onClick={handleCloseClick} className='navigation__close'>&times;</div>
      <ul>
        <Link to='/' onClick={handleCloseClick}>
          <li className='navigation__menu-item'>home</li>
        </Link>
        <Link to='/about' onClick={handleCloseClick}>
          <li className='navigation__menu-item'>about</li>
        </Link>
        <Link to='/projects' onClick={handleCloseClick}>
          <li className='navigation__menu-item'>projects</li>
        </Link>
        <Link to='/contact' onClick={handleCloseClick}>
          <li className='navigation__menu-item'>contact</li>
        </Link>
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  isOpen: PropTypes.bool, 
  handleCloseClick: PropTypes.func
}

Nav.defaultProps = {
  isOpen: false
}

export default Nav