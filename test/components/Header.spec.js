import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Header from '../../src/components/Header'

describe('<Header />', () => {
  let wrapper
  beforeEach( () => { wrapper = shallow(<Header/>)})
  
  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <header/>', () => {
    expect(wrapper.type()).to.equal('header')
  })

  it('should have the className of "header"', () => {
    expect(wrapper.hasClass('header')).to.be.true
  })

  it('should have a navOpen state of false when it is initially mounted', () => {
    expect(wrapper.state().navOpen).to.be.false
  })

  it('should change its state to show the navigation when the burger menu is clicked', () => {
    wrapper.find('.header__burger-menu').simulate('click')
    expect(wrapper.state().navOpen).to.be.true
  })
})