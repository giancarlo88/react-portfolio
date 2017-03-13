import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ProjectTile from '../../src/components/ProjectTile'

describe('<ProjectTile />', () => {
  let wrapper
  beforeEach( () => { wrapper = shallow(<ProjectTile/>)})

it('should exist', () => {
  expect(wrapper).to.exist
})

it('should render a <div /> with className "project-tile"', () => {
  expect(wrapper.hasClass('project-tile')).to.be.true
})

it('should render a <h1> containing "Super awesome project title" if its title prop is set to "Super awesome project title" ', () => {
 const _title = 'Super awesome project title'
 wrapper.setProps({title: _title})
 expect(wrapper.find('h3').text()).to.equal(_title)
})
  
it('should render a <p> containing "This is my awesome project, which is totes awesome" if its description prop is set to "This is my awesome project, which is totes awesome', () => {
  const _description = 'This is my awesome project, which is totes awesome'
  wrapper.setProps({description: _description})
  expect(wrapper.find('p').text()).to.equal(_description)
  })
})
