import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';

import { categorySelected } from '../actions/categories';
import { fetchCategoryPosts } from '../actions/posts';
import PostsIndex from '../components/PostsIndex';

class CategoryPosts extends Component {
  componentDidMount() {
    const {
      categorySelected,
      fetchCategoryPosts,
      match: { params: { category } }
    } = this.props;

    fetchCategoryPosts(category);
    categorySelected(category);
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
  fetchCategoryPosts,
})(CategoryPosts)
