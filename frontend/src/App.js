import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import NotFound from './components/NotFound';
import Categories from './containers/Categories';
import CategoryPosts from './containers/CategoryPosts';
import PostDetail from './containers/PostDetail';
import Home from './containers/Home';
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
            <Route path="/" exact component={Home} />
            <Route path="/categories" exact component={props => <Categories {...props} />} />
            <Route path="/:category/:postId/comments/:commentId/edit" component={props => <CommentForm {...props} />} />
            <Route path="/:category/:postId/edit" component={props => <PostForm {...props} />} />
            <Route path="/:category/:postId/comments/new" component={props => <CommentForm {...props} isEditing={false} />} />
            <Route path="/posts/new" exact component={props => <PostForm {...props} isEditing={false} />} />
            <Route path="/:category/:postId" exact component={props => <PostDetail {...props} />} />
            <Route path="/:category" component={props => <CategoryPosts {...props} />} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
