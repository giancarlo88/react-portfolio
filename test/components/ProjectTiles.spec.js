import React, { Component } from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'

import ProjectTiles from '../../src/components/ProjectTiles'
import ProjectTile from '../../src/components/ProjectTile'

describe('<ProjectTiles />', () => {
  let wrapper
  
  const title = 'A test title'
  const description = 'A test description'
  const tags = ['test', 'test2']
  const linkUrl = '/test'
  const imageUrl = 'testimage.png'

  const props = {
    projects: [
      {
        title: title,
        description: description, 
        tags: tags,
        linkUrl: linkUrl, 
        imageUrl: imageUrl
      }
    ], 
    currentFilter: 'all'
  }

  beforeEach( () => { wrapper = mount(<ProjectTiles {...props}/>)})
  
  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should contain an element with the className of "projects__tiles"', () => {
    expect(wrapper.find('.projects__tiles')).to.have.length.greaterThan(0)
  })

  it('should render a <ProjectTile /> component with a title from its "projects" prop', () => {
    expect(wrapper.find(ProjectTile).props().title).to.equal(title)
  })
  
  it('should render a <ProjectTile /> component with a description from its "projects" prop', () => {
    expect(wrapper.find(ProjectTile).props().description).to.equal(description)
  })

  it('should render a <ProjectTile /> component with tags from its "projects" prop', () => {
    expect(wrapper.find(ProjectTile).props().tags).to.equal(tags)
  })

  it('should render a <ProjectTile /> component with a imageUrl from its "projects" prop', () => {
    expect(wrapper.find(ProjectTile).props().imageUrl).to.equal(imageUrl)
  })
  
  it('should render a <ProjectTile /> component with a linkUrl from its "projects" prop', () => {
    expect(wrapper.find(ProjectTile).props().linkUrl).to.equal(linkUrl)
  })

  it('if it has a currentFilter prop, it will render a ProjectTile if it has a tag that matches it', () => {
    const currentFilter = 'test'
    wrapper.setProps({currentFilter})
    expect(wrapper.find(ProjectTile)).to.have.length(1)
  })

  it('if the tags of the project do not match the currentFilter prop, it will not render a ProjectTile', () => {
  const props = {
    projects: [
      {
        title: title,
        description: description, 
        tags: 'foo',
        linkUrl: linkUrl, 
        imageUrl: imageUrl
      }
    ], 
    currentFilter: 'bar'
  }
  
  const _wrapper = mount(<ProjectTiles {...props} />)
  expect(_wrapper.find(ProjectTile)).to.have.length(0)
  })
})