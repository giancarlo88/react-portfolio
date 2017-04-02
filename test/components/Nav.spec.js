import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Nav from '../../src/components/Nav'

describe('<Nav />', () => {
  let wrapper
  beforeEach( () => { wrapper = shallow(<Nav/>)})
  
  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <nav/>', () => {
    expect(wrapper.type()).to.equal('nav')
  })

  it('should have the className of "navigation"', () => {
    expect(wrapper.hasClass('navigation')).to.be.true
  })

  it('should have the "active" class if its prop "isOpen" is true', () => {
    const isOpen = true
    expect(wrapper.hasClass('active')).to.be.false
    wrapper.setProps({isOpen})
    expect(wrapper.hasClass('active')).to.be.true
  })

  it('should call the handleCloseClick prop function when the close button is clicked', () => {
    const handleCloseClick = sinon.spy()
    wrapper.setProps({handleCloseClick})
    wrapper.find('.navigation__close').simulate('click')
    expect(handleCloseClick.callCount).to.equal(1)
  })
})