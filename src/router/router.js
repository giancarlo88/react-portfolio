import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import Header from '../components/Header'
import About from '../components/About'
import Title from '../components/Title'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


const route = (
  <Router>
    <div>
    <Header />
      <Route exact path='/' component={Title} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
    </div>  
  </Router>
  )

export default route