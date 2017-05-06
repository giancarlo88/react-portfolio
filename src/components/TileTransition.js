import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const TileTransition = props => {
  const { children } = props
  return (
    <ReactCSSTransitionGroup
      transitionName='tile-fade'
      transitionAppear
      transitionEnter={false}
      transitionLeave={false}
      transitionAppearTimeout={500}
      component='div'
    >
      {children}
    </ReactCSSTransitionGroup>
  )
}

export default TileTransition