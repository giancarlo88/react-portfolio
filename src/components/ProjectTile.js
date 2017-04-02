import React, { PropTypes } from 'react'
import { makeImageUrl, makeLinkUrl } from '../utils/makeUrl'

const ProjectTile = props => {
  const { imageUrl, title, description, linkUrl } = props
  let _imgUrl = makeImageUrl(imageUrl)
  let _linkUrl = makeLinkUrl(linkUrl)
  return (
    <a href={_linkUrl}>
      <div 
        className='projects__project-tile'
        style={{
          backgroundImage: `url(${_imgUrl})`
        }}
        >
          <h3 className='projects__title'>
            <span>{title}</span>
          </h3>
          <p className='projects__description'>
            <span>{description}</span>
          </p>
      </div>
    </a>
  )
}

ProjectTile.propTypes = {
  title: PropTypes.string, 
  description: PropTypes.string, 
  imageUrl: PropTypes.string, 
  linkUrl: PropTypes.string
}

ProjectTile.defaultProps = {
  title: '', 
  description: '', 
  imageUrl: '', 
  linkUrl: ''
}

export default ProjectTile
