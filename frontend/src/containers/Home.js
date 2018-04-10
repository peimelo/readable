import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';

import { categorySelected } from '../actions/categories';
import { fetchPosts } from '../actions/posts';
import PostsIndex from '../components/PostsIndex';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.categorySelected('');
  }

  render() {
    return (
      <PostsIndex posts={this.props.posts}/>
    );
  }
}

function mapStateToProps(state) {
  const posts = state.posts.data.length ?
    state.posts.data.sort(sortBy(state.layout.orderBy)) :
    [];

  return {
    orderBy: state.layout.orderBy,
    posts
  }
}

export default connect(mapStateToProps, {
  categorySelected,
  fetchPosts,
})(Home)
