import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import CalendarIcon from 'react-icons/lib/fa/calendar';
import CommentsIcon from 'react-icons/lib/fa/comments';
import StarIcon from 'react-icons/lib/fa/star';
import TagIcon from 'react-icons/lib/fa/tag';
import UserIcon from 'react-icons/lib/fa/user';

function Post({ post }) {
  return (
    <div key={post.id} className="blog-post">
      <Link to={post.id}>
        <h2 className="blog-post-title">{post.title}</h2>
      </Link>
      <p className="blog-post-meta">
        <CalendarIcon size={15}/>&nbsp;
        <Moment format="DD/MM/YYYY">
          {post.timestamp}
        </Moment>&nbsp;
        | <UserIcon size={15}/> by {post.author}&nbsp;
        | <StarIcon size={15}/> {post.voteScore}&nbsp;
        | <TagIcon size={15}/> {post.category}&nbsp;
        | <CommentsIcon size={15}/> {post.commentCount}
      </p>

      <p>{post.body}</p>
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
  })
};

export default Post
