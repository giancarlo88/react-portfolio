import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const FadeTransition = props => {
  const { children, pathname } = props
  return (
    <ReactCSSTransitionGroup
      transitionName='fade'
      transitionAppearTimeout={500}
      transitionAppear
      transitionEnter={false}
      transitionLeave={false}
    >
     {React.cloneElement(children, {key: pathname})}
    </ReactCSSTransitionGroup>
  )
}

export default FadeTransition