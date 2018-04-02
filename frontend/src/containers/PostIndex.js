import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';

import { VOTE_SCORE } from '../constants/orderBy';
import Categories from './CategoriesFilter';
import OrderBy from '../components/OrderBy';
import PostList from '../components/PostList';
import { fetchCategoryPosts, fetchPosts } from '../actions/posts';

class PostIndex extends Component {
  state = { orderBy: VOTE_SCORE };

  componentWillMount() {
    if (this.props.match.params.categoryId) {
      const {
        fetchCategoryPosts,
        match: { params: { categoryId } }
      } = this.props;

      fetchCategoryPosts(categoryId);
    } else {
      this.props.fetchPosts();
    }
  }

  changeOrder = (orderBy) => {
    this.setState({ orderBy });
  };

  render() {
    this.props.posts.sort(sortBy(this.state.orderBy));
    return (
      <div>
        <div className="container">
          <Categories/>
        </div>

        <main role="main" className="container">
          <div className="row">
            <PostList posts={this.props.posts}/>
            <OrderBy
              orderBy={this.state.orderBy}
              onChangeOrder={this.changeOrder}
            />
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, {
  fetchCategoryPosts,
  fetchPosts
})(PostIndex)
