import React from 'react'

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

export default PostList
