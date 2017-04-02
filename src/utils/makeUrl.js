const BASE_URL = 'http://www.ggalliani.com/projects'
const PATH = 'assets/'
const PLACEHOLDER = 'placeholder.png'


export const makeImageUrl = url => {
  if (url) {
    return  PATH + url
  } else {
    return PATH + PLACEHOLDER
  }
}

export const makeLinkUrl = url => BASE_URL + url

