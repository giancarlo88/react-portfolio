const PATH = 'assets/'
const PLACEHOLDER = 'placeholder.png'

const makeUrl = url => {
  if (url) {
    return  PATH + url
  } else {
    return PATH + PLACEHOLDER
  }
}

export default makeUrl
