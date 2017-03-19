import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import Title from '../components/Title'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Header from '../components/Header'


const route = (
  <Router>
    <div>
    <Header />
      <Route exact path='/' component={Title} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
    </div>  
  </Router>
  )

export default route