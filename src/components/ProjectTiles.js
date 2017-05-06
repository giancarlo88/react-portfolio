import React, { PropTypes } from 'react'
import ProjectTile from './ProjectTile'
import TileTransition from './TileTransition'

const ProjectTiles = props => {
  const { projects, currentFilter } = props
  return (
      <div className='projects__tiles'>
        { projects.reverse().map( (item, index) => {
            let { title, description, imageUrl, tags, linkUrl } = item
            // Note: the TileTransition is rendered within the map as the animations otherwise appeared janky.
            let tile = 
            <TileTransition key={index}>
              <div key={index} className='projects__tile-container'>
                  <ProjectTile
                    title={title}
                    description={description}
                    imageUrl={imageUrl}
                    tags={tags}
                    linkUrl={linkUrl}
                  />
                </div>
              </TileTransition>
              // Return only tiles that match the current filter. If no filters are set, return all tiles.
             return (
            (( currentFilter && item.tags.indexOf(currentFilter) >= 0) || !currentFilter || currentFilter === 'all' ) && tile
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
