import React, { PropTypes } from 'react'

const FilterTags = props => {
  let { tags, handleChangeTag } = props
  return (
    <div className='projects__filters'>
      <div className='projects__fixed-filter-container'>
      { tags.map( (tag, index) => {
        return (
          <div 
            key={index}
            className='projects__filter'
            onClick={handleChangeTag.bind(null, tag)}
            value={tag}
          >
          {tag}
        </div>
        )
      })
    }      
    </div>
  </div>
  )
}

FilterTags.propTypes = {
  tags: PropTypes.array,
  handleChangeTag: PropTypes.func
}

FilterTags.defaultProps = {
  tags: []
}


export default FilterTags