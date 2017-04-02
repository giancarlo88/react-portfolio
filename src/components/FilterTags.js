import React, { PropTypes } from 'react'

const FilterTags = props => {
  let { tags, handleChangeTag, selectedTag } = props
  return (
    <div className='projects__filters'>
      <div className='projects__fixed-filter-container'>
      { tags.map( (tag, index) => {
        const className = tag === selectedTag ? 
          'projects__filter projects__filter--selected' : 
          'projects__filter'
        return (
          <div 
            key={index}
            className={className}
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
  handleChangeTag: PropTypes.func, 
  selectedTag: PropTypes.string
}

FilterTags.defaultProps = {
  tags: [], 
  selectedTag: 'all'
}


export default FilterTags