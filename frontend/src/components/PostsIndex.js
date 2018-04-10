import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import CategoriesFilter from '../containers/CategoriesFilter';
import OrderBy from '../containers/OrderBy';
import PostsList from './PostsList';

function PostsIndex({ posts }) {
  return (
    <Container>
      <Row>
        <Col md={8} xs={12}>
          <PostsList posts={posts} />
        </Col>
        <Col md={4} xs={12}>
          <OrderBy />
          <CategoriesFilter />
        </Col>
      </Row>
    </Container>
  );
}

PostsIndex.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsIndex
