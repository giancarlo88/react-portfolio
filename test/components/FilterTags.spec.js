import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import FilterTags from '../../src/components/FilterTags'

describe('<FilterTags />', () => {
  let wrapper
  beforeEach( () => { wrapper = shallow(<FilterTags handleChangeTag={ () => {} }/>)})
  
  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div/>', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('should have the className of "projects__filters"', () => {
    expect(wrapper.hasClass('projects__filters')).to.be.true
  })

  it('should render a <div /> with a className of "projects__filter" if an array with a tag is passed to it', () => {
    const tags = ['tag']
    wrapper.setProps({tags})
    expect(wrapper.find('.projects__filter')).to.have.length(1)
  })

  it('should render a tag with text "foo" when it is given an array with a "foo" tag', () => {
    const _tagText = 'foo'
    const tags = [_tagText]
    wrapper.setProps({tags})
    expect(wrapper.find('.projects__filter').text()).to.equal(_tagText)
  })

  it('should render tags of "foo" and "bar" when it is given an array with "foo" and "bar" tags', () => {
    const _tag1 = 'foo'
    const _tag2 = 'bar'
    const tags = [_tag1, _tag2]
    wrapper.setProps({tags})
    expect(wrapper.find('.projects__filter').first().text()).to.equal(_tag1)
    expect(wrapper.find('.projects__filter').at(1).text()).to.equal(_tag2)
  })
})