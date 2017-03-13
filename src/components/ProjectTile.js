import React, { PropTypes } from 'react'
import makeUrl from '../utils/makeUrl'

const ProjectTile = props => {
  let url = makeUrl(props.imageUrl)
  return (
    <div 
      className='projects__project-tile'
      style={{
        backgroundImage: `url(${url})`
      }}
      >
      <h3 className='projects__title'>
        <span>{props.title}</span>
      </h3>
      <p className='projects__description'>
        <span>{props.description}</span>
      </p>
    </div>
  )
}

ProjectTile.propTypes = {
  title: PropTypes.string, 
  description: PropTypes.string, 
  imageUrl: PropTypes.string, 
  tags: PropTypes.array
}

export default ProjectTile
