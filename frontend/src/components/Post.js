import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Comments from 'react-icons/lib/fa/comments';
import Tag from 'react-icons/lib/fa/tag';
import { Col, Container, Row } from 'reactstrap';

import StarIcon from './StarIcon';
import TimestampIcon from './TimestampIcon';
import UserIcon from './UserIcon';
import UpDownVote from './UpDownVote';
import EditAndDelete from './EditAndDelete';

function Post({ isDetail, post, onDelete, onVote }) {
  return (
    <Container className="blog-post">
      <Row>
        <Col>
        <h2>
          <Link to={`/posts/${post.id}`}>
            {`${post.title} `}
          </Link>
          {isDetail && (
            <EditAndDelete
              postId={post.id}
              onDelete={(id) => onDelete(id)}
            />
          )}
        </h2>
        </Col>
      </Row>
      <Row className="blog-post-meta">
        <Col xs={'auto'}>
          <TimestampIcon timestamp={post.timestamp} />
        </Col>
        <Col xs={'auto'}>
          <UserIcon author={post.author} />
        </Col>
        <Col xs={'auto'}>
          <Comments size={15} /> {post.commentCount}
        </Col>
        <Col xs={'auto'}>
          <Tag size={15} /> {post.category}
        </Col>
        <Col xs={'auto'}>
          <StarIcon voteScore={post.voteScore} />
        </Col>
        <Col xs={'auto'}>
          {isDetail && (
            <UpDownVote onVote={(vote) => onVote(post.id, vote)} />
          )}
        </Col>
      </Row>
      <Row>
        <Col>{post.body}</Col>
      </Row>
    </Container>
  );
}

Post.propTypes = {
  isDetail: PropTypes.bool,
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    voteScore: PropTypes.number,
    category: PropTypes.string,
    commentCount: PropTypes.number,
  }),
  onDelete: PropTypes.func,
  onVote: PropTypes.func,
};

Post.defaultProps = {
  isDetail: false
};

export default Post
