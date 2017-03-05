import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Projects from '../../src/components/Projects'
import ProjectTile from '../../src/components/ProjectTile'

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

  it('should render multiple <ProjectTile /> elements', () => {
    expect(wrapper.find(ProjectTile)).to.have.length.greaterThan(0)
  })
})