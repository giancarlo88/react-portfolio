import React, { Component } from 'react'
import projects from '../projects/projects.json'
import FilterTags from './FilterTags'
import ProjectTiles from './ProjectTiles'

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
      filterTag: ''
    }
    this.handleChangeTag = this.handleChangeTag.bind(this)
  }
  handleChangeTag(tag) {
    this.setState({
      filterTag: tag
    })
  }
  render() {
    const tags = getTags(projects)
    console.log(tags)
    return (
      <div className='projects'>
        <FilterTags
          tags={tags}
          handleChangeTag={this.handleChangeTag}
        />
        <ProjectTiles
          projects={projects} 
          currentFilter={this.state.filterTag}
        />
      </div>
    )
  }
}

export default Projects
