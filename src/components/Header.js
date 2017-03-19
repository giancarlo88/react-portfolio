import React, { Component, PropTypes } from 'react'
import Nav from './Nav'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      navOpen: false
    }
    this.handleNavClick = this.handleNavClick.bind(this)
  }
  handleNavClick() {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }
  render(){
  return (
      <header className='header'>
        <div onClick={this.handleNavClick} className='header__burger-menu' />
        <Nav isOpen={this.state.navOpen} handleCloseClick={this.handleNavClick} />
      </header>
    )
}
}

Header.propTypes = { 
  handleNavClick: PropTypes.func, 
  navOpen: PropTypes.bool
}

Header.defaultProps = {
  navOpen: false
}

export default Header