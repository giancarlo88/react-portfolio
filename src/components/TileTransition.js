import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const TileTransition = props => {
  const { children } = props
  return (
    <ReactCSSTransitionGroup
      transitionName='tile-fade'
      transitionAppear
      transitionEnter
      transitionLeave
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={1000}
      component='div'
    >
      {children}
    </ReactCSSTransitionGroup>
  )
}

export default TileTransition