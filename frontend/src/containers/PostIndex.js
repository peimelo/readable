import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';

import CategoriesFilter from './CategoriesFilter';
import OrderBy from '../components/OrderBy';
import PostList from '../components/PostList';
import { categorySelected } from '../actions/categories';
import { fetchCategoryPosts, fetchPosts, postsOrderBy } from '../actions/posts';

class PostIndex extends Component {
  componentWillMount() {
    if (this.props.match.params.categoryId) {
      const {
        categorySelected,
        fetchCategoryPosts,
        match: { params: { categoryId } }
      } = this.props;

      fetchCategoryPosts(categoryId);
      categorySelected(categoryId);
    } else {
      this.props.categorySelected('');
      this.props.fetchPosts();
    }
  }

  changeOrder = (orderBy) => {
    this.props.postsOrderBy(orderBy);
  };

  render() {
    this.props.posts.data.sort(sortBy(this.props.posts.orderBy));

    return (
      <div>
        <div className="container">
        </div>

        <main role="main" className="container">
          <div className="row">
            <PostList posts={this.props.posts.data}/>

            <aside className="col-md-4 blog-sidebar">
              <OrderBy
                orderBy={this.props.posts.orderBy}
                onChangeOrder={this.changeOrder}
              />
              <CategoriesFilter />
            </aside>
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
  categorySelected,
  fetchCategoryPosts,
  fetchPosts,
  postsOrderBy
})(PostIndex)
