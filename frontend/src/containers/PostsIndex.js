import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';
import { Container, Row, Col } from 'reactstrap';

import CategoriesFilter from './CategoriesFilter';
import OrderBy from '../components/OrderBy';
import PostsList from '../components/PostsList';
import { categorySelected } from '../actions/categories';
import { fetchCategoryPosts, fetchPosts, postsOrderBy } from '../actions/posts';

class PostsIndex extends Component {
  componentDidMount() {
    if (this.props.match.params.categoryId) {
      const {
        categorySelected,
        fetchCategoryPosts,
        match: { params: { categoryId } }
      } = this.props;

      fetchCategoryPosts(categoryId);
      categorySelected(categoryId);
    } else {
      this.props.fetchPosts();
      this.props.categorySelected('');
    }
  }

  changeOrder = (orderBy) => {
    this.props.postsOrderBy(orderBy);
  };

  render() {
    this.props.posts.data.sort(sortBy(this.props.posts.orderBy));

    return (
      <Container>
        <Row>
          <Col md={8} xs={12}>
            <PostsList posts={this.props.posts.data} />
          </Col>
          <Col md={4} xs={12}>
            <OrderBy
              orderBy={this.props.posts.orderBy}
              onChangeOrder={this.changeOrder}
            />
            <CategoriesFilter />
          </Col>
        </Row>
      </Container>
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
})(PostsIndex)
