import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Title from '../components/Title'
import Projects from '../components/Projects'

const route = (
    <Router history={hashHistory}>
      <Route path='/' component={Title} />
      <Route path='projects' component={Projects} />
    </Router>
  )

export default route