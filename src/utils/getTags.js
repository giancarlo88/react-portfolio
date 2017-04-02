const getTags = projects => {
  // Look through the tag properties of all the projects and add them (once) to an array
  return projects.reduce((otherTags, currentProject) => {
    const tags = currentProject.tags
    let newTags = []
    if (Array.isArray(tags)) {
      currentProject.tags.forEach((tag) => {
      if (typeof tag === 'string') {
        // Check if the tag was added already
        return otherTags && otherTags.indexOf(tag) < 0 && newTags.push(tag)
        }
      })
    }
     // Combine any newly found tags with what's been added already.
      return [...otherTags, ...newTags]
    },
  // ['all'] is the initial value of the accumulator for reduce(). 
  ['all'] )
}

export default getTags