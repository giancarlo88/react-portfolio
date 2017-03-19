import React, { Component } from 'react'
import projects from '../projects/projects.json'
import FilterTags from './FilterTags'
import ProjectTiles from './ProjectTiles'
import Header from './Header'
import Transition from './Transition'

const getTags = (projects) => {
  // Look through the tag properties of all the projects and add them (once) to an array
  return projects.reduce((otherTags, currentProject) => {
    let newTags = []
    currentProject.tags.forEach((tag) => {
      // Check if the tag was added already
      return otherTags && otherTags.indexOf(tag) < 0 && newTags.push(tag)
    })
    // Combine any newly found tags with what's been added already.
    return [...otherTags, ...newTags]
    }, ['all'] )
}

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterTag: 'all',
      navOpen: false
    }
    this.handleChangeTag = this.handleChangeTag.bind(this)
    this.handleNavClick = this.handleNavClick.bind(this)
  }
  handleChangeTag(tag) {
    this.setState({
      filterTag: tag
    })
  }
  handleNavClick() {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }
  render() {
    const tags = getTags(projects)
    console.log(tags)
    return (
      <Transition
        transitionName='fade'
        appearTimeout={500}
        leaveTimeout={100000}
        enterTimeout={100}
        transitionAppear
        transitionLeave
      >
      <div className='projects'>
        <Header navOpen={this.state.navOpen} handleNavClick={this.handleNavClick}/>
        <FilterTags
          tags={tags}
          handleChangeTag={this.handleChangeTag}
          selectedTag={this.state.filterTag}
        />
        <ProjectTiles
          projects={projects}
          currentFilter={this.state.filterTag}
        />
      </div>
    </Transition>
    )
  }
}

export default Projects
