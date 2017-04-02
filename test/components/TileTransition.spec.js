import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import TileTransition from '../../src/components/TileTransition'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

describe('<TileTransition />', () => {
  let wrapper
  const props = {
    pathname: '/path', 
    children: []
  }
  beforeEach( () => { wrapper = shallow(<TileTransition {...props} />)})
  
  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <ReactCSSTransitionGroup/>', () => {
    expect(wrapper.type()).to.equal(ReactCSSTransitionGroup)
  })
})