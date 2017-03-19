import React, { PropTypes } from 'react'
import Nav from './Nav'

const Header = props => {
  const { handleNavClick, navOpen } = props
  return (
    <header className='header'>
      <div onClick={handleNavClick} className='header__burger-menu' />
      <Nav isOpen={navOpen} handleCloseClick={handleNavClick} />
    </header>
  )
}

Header.propTypes = { 
  handleNavClick: PropTypes.func, 
  navOpen: PropTypes.bool
}

Header.defaultProps = {
  navOpen: false
}

export default Header