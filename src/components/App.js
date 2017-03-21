import React, { Component } from 'react';
import router from '../router/router'
import FadeTransition from './FadeTransition'
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <FadeTransition>
        {this.props.children}
      </FadeTransition>
    )
  }
}

export default App;
