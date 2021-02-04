import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './blog.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Categories from './containers/Categories';
import CategoryPosts from './containers/CategoryPosts';
import CommentForm from './containers/CommentForm';
import Home from './containers/Home';
import PostDetail from './containers/PostDetail';
import PostForm from './containers/PostForm';

function App() {
  return (
      <Router>
        <div>
          <Header title="Readable" />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/:category/:postId/comments/:commentId/edit" component={CommentForm} />
            <Route path="/:category/:postId/edit" component={PostForm} />
            <Route path="/:category/:postId/comments/new" render={(props) => <CommentForm {...props} isEditing={false} />} />
            <Route path="/posts/new" exact render={(props) => <PostForm {...props} isEditing={false} />} />
            <Route path="/:category/:postId" exact component={PostDetail} />
            <Route path="/:category" component={CategoryPosts} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
