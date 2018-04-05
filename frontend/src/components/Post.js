import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CommentsIcon from 'react-icons/lib/fa/comments';
import TagIcon from 'react-icons/lib/fa/tag';
import { Row } from 'reactstrap';

import StarIcon from './StarIcon';
import TimestampIcon from './TimestampIcon';
import UserIcon from './UserIcon';
import UpDownVote from './UpDownVote';

function Post({ post, isDetail, onVote }) {
  return (
    <div key={post.id} className="blog-post">
      <Link to={`/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <Row className="blog-post-meta">
        <TimestampIcon timestamp={post.timestamp} />
        <UserIcon author={post.author} />
        <StarIcon voteScore={post.voteScore} />
        <TagIcon size={15}/> {post.category} | &nbsp;
        <CommentsIcon size={15}/> {post.commentCount} &nbsp;
        {isDetail && (
          <UpDownVote onVote={(vote) => onVote(post.id, vote)} />
        )}
      </Row>
      <Row>{post.body}</Row>
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
  onVote: PropTypes.func,
  isDetail: PropTypes.bool
};

Post.defaultProps = {
  isDetail: false
};

export default Post
