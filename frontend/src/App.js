import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import NotFound from './components/NotFound';
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
            <Route path="/categories" component={props => <CategoriesIndex {...props} />} />
            <Route path="/:category/:postId/comments/:commentId/edit" component={props => <CommentForm {...props} />} />
            <Route path="/:category/:postId/edit" component={props => <PostForm {...props} />} />
            <Route path="/:category/:postId/comments/new" component={props => <CommentForm {...props} isEditing={false} />} />
            <Route path="/posts/new" exact component={props => <PostForm {...props} isEditing={false} />} />
            <Route path="/:category/:postId" exact component={props => <PostDetail {...props} />} />
            <Route path="/:category" exact component={props => <PostsIndex {...props} />} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
