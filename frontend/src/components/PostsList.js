import PropTypes from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Post from '../containers/Post';


function PostsList({ posts }) {
  return (
    <Container>
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
    </Container>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array
};

export default PostsList
