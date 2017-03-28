import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import Title from './components/Title'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import FadeTransition from './components/FadeTransition'
import './styles/App.css';

const FadeRoute = props => {
  const { path, exact, component } = props
  return (
    <Route exact path={path} render={({match}) => {
      return (
        <FadeTransition pathname={path}>
          <div className='content'>
            {match && <Route component={component} key={location.key}/> }
          </div>
        </FadeTransition>
        )
      }
    }/>
  )
}

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <FadeRoute exact component={Title} path='/' />
      <FadeRoute component={About} path='/about' />
      <FadeRoute component={Projects} path='/projects' />
      <FadeRoute component={Contact} path='/contact' />
    </div>  
  </Router>,
  document.getElementById('root')
);
