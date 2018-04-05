import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import CategoryIndex from './containers/CategoryIndex';
import PostDetail from './containers/PostDetail';
import PostsIndex from './containers/PostsIndex';

import './blog.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header title="Readable" />
          <Switch>
            <Route path="/" exact component={PostsIndex} />
            <Route path="/categoriesFilter/:categoryId" component={props => <PostsIndex {...props} />} />
            <Route path="/categories" component={props => <CategoryIndex {...props} />} />
            <Route path="/:postId" component={props => <PostDetail {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
