import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import StarIcon from 'react-icons/lib/fa/star'

function Posts({ posts }) {
  return (
    <div className="col-md-8 blog-main">

      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <Link to={post.id}>
            <h2 className="blog-post-title">{post.title}</h2>
          </Link>
          <p className="blog-post-meta">
            <Moment format="DD/MM/YYYY">
              {post.timestamp}
            </Moment>&nbsp;
            | by {post.author}&nbsp;
            | {post.voteScore} <StarIcon size={15}/>
          </p>

          <p>{post.body}</p>
        </div>
      ))}

    </div>
  );
}

export default Posts
