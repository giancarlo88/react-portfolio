import React, { Component } from 'react'
import projects from '../projects/projects.json'
import FilterTags from './FilterTags'
import ProjectTiles from './ProjectTiles'
import getTags from '../utils/getTags'

class Projects extends Component {
  constructor () {
    super()
    this.state = {
      filterTag: 'all',
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
    return (
      <div className='projects'>
        <h2 className='projects__heading'>Projects</h2>
        <div className='projects__content'>
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
      </div>
    )
  }
}

export default Projects
