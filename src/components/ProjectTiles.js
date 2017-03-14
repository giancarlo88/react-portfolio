import React, { PropTypes } from 'react'
import ProjectTile from './ProjectTile'

const ProjectTiles = props => {
  const { projects, currentFilter } = props
  return (
      <div className='projects__tiles'>
        { projects.map( (item, index) => {
            let { title, description, image, tags } = item
            let tile = 
              <ProjectTile 
                key={index}
                title={title}
                description={description}
                imageUrl={image}
                tags={tags}
              />
              // Return only tiles that match the current filter. If no filters are set, return all tiles.
             return (
            (( currentFilter && item.tags.indexOf(currentFilter) > 0) || !currentFilter || currentFilter === 'all' ) && tile
              )
            }
        )}
      </div>
  )
}

ProjectTiles.propTypes = {
  projects: PropTypes.array,
  currentFilter: PropTypes.string
}

ProjectTiles.defaultProps = {
  projects: [], 
  currentFilter: ''
}

export default ProjectTiles
