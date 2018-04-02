import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import PostIndex from './containers/PostIndex'

import './blog.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header title="Readable"/>
          <Switch>
            <Route path="/" exact component={PostIndex} />
            <Route path="/categoriesFilter/:categoryId" component={props => <PostIndex {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
