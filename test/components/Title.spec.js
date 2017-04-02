import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Title from '../../src/components/Title'

describe('<Title />', () => {
  let wrapper
  beforeEach( () => { wrapper = shallow(<Title/>)})
  
  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div/>', () => {
    expect(wrapper.type()).to.equal('div')
  })
})