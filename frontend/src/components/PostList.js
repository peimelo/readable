import React from 'react'
import PropTypes from 'prop-types';

import Post from './Post'

function PostList({ posts }) {
  return (
    <div className="col-md-8 blog-main">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
        >
        </Post>
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array
};

export default PostList
