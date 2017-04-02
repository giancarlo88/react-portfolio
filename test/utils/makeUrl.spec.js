import { expect } from 'chai'

import { makeImageUrl, makeLinkUrl } from '../../src/utils/makeUrl'

describe('The makeImageUrl function', () => {

  it('when given the url of "picture.png", return the url "assets/picture.png"', () => {
    const _url = 'picture.png'
    const _finalUrl = 'assets/picture.png'
    expect(makeImageUrl(_url)).to.equal(_finalUrl)
  })

  it('when given no url, will return "assets/placeholder.png"', () => {
    const _finalUrl = 'assets/placeholder.png'
    expect(makeImageUrl(null)).to.equal(_finalUrl)
  })
})

describe('the makeLinkUrl function', () => {
  it('when given the url of "/foo", will return "http://www.ggalliani.com/projects/foo"', () => {
    const _url = '/foo'
    const _finalUrl = 'http://www.ggalliani.com/projects/foo'
    expect(makeLinkUrl(_url)).to.equal(_finalUrl)
  })
})