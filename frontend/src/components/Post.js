import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Comments from 'react-icons/lib/fa/comments';
import Tag from 'react-icons/lib/fa/tag';
import { Col, Row } from 'reactstrap';

import StarIcon from './StarIcon';
import TimestampIcon from './TimestampIcon';
import UserIcon from './UserIcon';
import UpDownVote from './UpDownVote';
import EditAndDelete from './EditAndDelete';

function Post({ post, isDetail, onDelete, onVote }) {
  return (
    <div key={post.id} className="blog-post">
      <Row>
        <h2>
          <Link to={`/posts/${post.id}`}>
            {`${post.title} `}
          </Link>
          {isDetail && (
            <EditAndDelete
              id={post.id}
              onDelete={(id) => onDelete(id)}
            >
            </EditAndDelete>
          )}
        </h2>
      </Row>
      <Row className="blog-post-meta">
        <Col xs={5} md={'auto'}>
          <TimestampIcon timestamp={post.timestamp} />
        </Col>
        <Col xs={5} md={'auto'}>
          <UserIcon author={post.author} />
        </Col>
        <Col xs={2} md={'auto'}>
          <Comments size={15} /> {post.commentCount}
        </Col>
        <Col xs={5} md={'auto'}>
          <Tag size={15} /> {post.category}
        </Col>
        <Col xs={2} md={'auto'}>
          <StarIcon voteScore={post.voteScore} />
        </Col>
        <Col xs={5} md={'auto'}>
          {isDetail && (
            <UpDownVote onVote={(vote) => onVote(post.id, vote)} />
          )}
        </Col>
      </Row>
      <Row>
        <Col>{post.body}</Col>
      </Row>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    voteScore: PropTypes.number,
    category: PropTypes.string,
    commentCount: PropTypes.number,
  }),
  onDelete: PropTypes.func,
  onVote: PropTypes.func,
  isDetail: PropTypes.bool
};

Post.defaultProps = {
  isDetail: false
};

export default Post
