import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import About from '../../src/components/About'

describe('<Title />', () => {
  let wrapper
  beforeEach( () => { wrapper = shallow(<About/>)})
  
  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div/>', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('should have the className of "about"', () => {
    expect(wrapper.hasClass('about')).to.be.true
  })

  it('should contain content, a picture, and text', () => {
    expect(wrapper.find('.about__content')).to.have.length(1)
    expect(wrapper.find('.about__picture')).to.have.length(1)
    expect(wrapper.find('.about__text')).to.have.length(1)
  })
})