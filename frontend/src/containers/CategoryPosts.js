import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';

import { categorySelected } from '../actions/categories';
import { fetchCategoryPosts, fetchPosts, postsOrderBy } from '../actions/posts';
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

const mapStateToProps = state => ({
  orderBy: state.posts.orderBy,
  posts: state.posts.data.length ?
    state.posts.data.sort(sortBy(state.posts.orderBy)) :
    [],
});

export default connect(mapStateToProps, {
  categorySelected,
  fetchCategoryPosts,
  fetchPosts,
  postsOrderBy
})(CategoryPosts)
