import { expect } from 'chai'

import makeUrl from '../../src/utils/makeUrl'

describe('The makeUrl function', () => {

  it('when given the url of "picture.png", return the url "assets/picture.png"', () => {
    const _url = 'picture.png'
    const _finalUrl = 'assets/picture.png'
    expect(makeUrl(_url)).to.equal(_finalUrl)
  })

  it('when given no url, will return "assets/placeholder.png"', () => {
    const _finalUrl = 'assets/placeholder.png'
    expect(makeUrl(null)).to.equal(_finalUrl)
  })
})
