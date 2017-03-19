import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const FadeTransition = props => {
  const { children } = props
  return (
    <ReactCSSTransitionGroup
      transitionName='fade'
      transitionAppearTimeout={10000}
      transitionEnterTimeout={10000}
      transitionLeaveTimeout={10000}
      transitionAppear
      transitionEnter={true}
      transitionLeave={true}
    >
      { children }
    </ReactCSSTransitionGroup>
  )
}

export default FadeTransition