import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import CategoriesIndex from './containers/CategoriesIndex';
import PostDetail from './containers/PostDetail';
import PostsIndex from './containers/PostsIndex';
import CommentForm from './containers/CommentForm';
import PostForm from './containers/PostForm';

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
            <Route path="/categories" component={props => <CategoriesIndex {...props} />} />
            <Route path="/posts/:postId/comments/:commentId/edit" component={props => <CommentForm {...props} />} />
            <Route path="/posts/:postId/edit" component={props => <PostForm {...props} />} />
            <Route path="/posts/:postId/comments/new" component={props => <CommentForm {...props} isEditing={false} />} />
            <Route path="/posts/new" component={props => <PostForm {...props} isEditing={false} />} />
            <Route path="/posts/:postId" component={props => <PostDetail {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
