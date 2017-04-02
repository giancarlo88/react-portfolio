import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import FadeTransition from '../../src/components/FadeTransition'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

describe('<FadeTransition />', () => {
  let wrapper
  const props = {
    pathname: '/path', 
    children: []
  }
  beforeEach( () => { wrapper = shallow(<FadeTransition {...props} />)})
  
  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <ReactCSSTransitionGroup/>', () => {
    expect(wrapper.type()).to.equal(ReactCSSTransitionGroup)
  })
})