import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Contact from '../../src/components/Contact'

describe('<Contact />', () => {
  let wrapper
  beforeEach( () => { wrapper = shallow(<Contact/>)})
  
  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div/>', () => {
    expect(wrapper.type()).to.equal('div')
  })

   it('should have the className of "contact"', () => {
    expect(wrapper.hasClass('contact')).to.be.true
  })


  it('should contain a heading, text, and a list', () => {
    expect(wrapper.find('.contact__heading')).to.have.length(1)
    expect(wrapper.find('.contact__text')).to.have.length(1)
    expect(wrapper.find('.contact__list')).to.have.length(1)
  })
})