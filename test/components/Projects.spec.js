import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Projects from '../../src/components/Projects'
import FilterTags from '../../src/components/FilterTags'
import ProjectTiles from '../../src/components/ProjectTiles'

describe('<Projects />', () => {
  
  let wrapper
  beforeEach( () => { wrapper = shallow(<Projects/>)})
  
  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('should render a <div /> with classname "projects"', () => {
    expect(wrapper.hasClass('projects')).to.be.true
  })

  it('should render a <FilterTags /> element', () => {
    expect(wrapper.find(FilterTags)).to.have.length(1)
  })

  it('should render a <ProjectTiles /> element', () => {
    expect(wrapper.find(ProjectTiles)).to.have.length(1)
  })
})