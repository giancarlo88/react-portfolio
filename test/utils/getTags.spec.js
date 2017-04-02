import { expect } from 'chai'

import getTags from '../../src/utils/getTags'

describe('the getTags function', () => {
  it('should return ["all"] if the projects have no tags', () => {
    // Omitting other keys here as they aren't necessary
    const projects = [{ tags: [] }]
    expect(getTags(projects)).to.deep.equal(['all'])
  })

  it('should return ["all", "tag1", "tag2"] if one project has "tag1" and another project has "tag2"', () => {
    const projects = [
      { tags: [ 'tag1' ] }, 
      { tags: [ 'tag2' ] }
    ]
    expect(getTags(projects)).to.deep.equal(['all', 'tag1', 'tag2'])
})

  it('should return ["all", "tag1"] if two projects have "tag1"', () => {
    const projects = [
      { tags: [ 'tag1' ] }, 
      { tags: [ 'tag1' ] }
    ]
    expect(getTags(projects)).to.deep.equal(['all', 'tag1'])
  })

  it('should return ["all", "tag1"] if one project has "tag1" and the other does not have any', () => {
    const projects = [
      { tags: [ 'tag1' ] }, 
      { tags: [] }
    ]
    expect(getTags(projects)).to.deep.equal(['all', 'tag1'])
  })

  it('should return ["all", "tag1", "tag2", "tag3"] if one project has "tag1" and the other has "tag1", "tag2", and "tag3"', () => {
    const projects = [
      { tags: [ 'tag1' ] }, 
      { tags: [ 'tag1', 'tag2', 'tag3']  }
    ]
    expect(getTags(projects)).to.deep.equal(['all', 'tag1', 'tag2', 'tag3'])
  })

  it('should simply ignore the tags if they are not stored as an array', () => {
    const projects = [
      { tags: 1234 }, 
      { tags: 'foo'}, 
      { tags: {bar: 'baz'}},
      { tags: ['bat']}
    ]
    expect(getTags(projects)).to.deep.equal(['all', 'bat'])
  })

  it('should simply ignore values in the tags array that are not strings', () => {
    const projects = [
      { tags: ['tag1'] }, 
      { tags: [
        'tag2', 
        {tag3: 'foo'}, 
        42, 
        false
        ]
      }
    ]

    expect(getTags(projects)).to.deep.equal(['all', 'tag1', 'tag2'])
  })
})