import React from 'react'
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import Post from '../containers/Post'

function PostsList({ posts }) {
  return (
    <Row>
      <Col>
        {posts && posts.map((post) => (
          <Post
            key={post.id}
            post={post}
          >
          </Post>
        ))}
      </Col>
    </Row>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array
};

export default PostsList
