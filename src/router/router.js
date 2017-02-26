import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Title from '../components/Title'

const route = (
    <Router history={hashHistory}>
      <Route path='/' component={Title} />
    </Router>
  )

export default route