import React, { Component } from 'react'
import projects from '../projects/projects.json'

import ProjectTile from './ProjectTile'

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterTag: ''
    }
  }
  render() {
    console.log(projects)
    return (
      <div className='projects'>
        { projects.map( (item, index) => {
            let currentFilter = this.state.filterTag
            let tile = 
              <ProjectTile 
                key={index}
                title={item.title}
                description={item.description}
                imageUrl={item.image}
                tags={item.tags}
              />
              // Return only tiles that match the current filter. If no filters are set, return all tiles.
             return (
            (( currentFilter && item.tags.indexOf(currentFilter) > 0) || !currentFilter ) && tile
              )
            }
        )}
      </div>
    )
  }
}

export default Projects
