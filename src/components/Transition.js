import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Transition = props => {
  const { 
    transitionName, 
    appearTimeout, 
    leaveTimeout, 
    enterTimeout, 
    transitionAppear,
    transitionEnter, 
    transitionLeave,
    children } = props
  return (
    <ReactCSSTransitionGroup
      transitionName={transitionName}
      transitionAppearTimeout={appearTimeout}
      transitionAppear={transitionAppear}
      transitionEnter={transitionEnter}
      transitionLeave={transitionLeave}
      transitionLeaveTimeout={leaveTimeout}
      transitionEnterTimeout={enterTimeout}
    >
      {children}
    </ReactCSSTransitionGroup>
  )
}

export default Transition