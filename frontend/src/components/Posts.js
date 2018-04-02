import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import CalendarIcon from 'react-icons/lib/fa/calendar';
import CommentsIcon from 'react-icons/lib/fa/comments';
import StarIcon from 'react-icons/lib/fa/star';
import TagIcon from 'react-icons/lib/fa/tag';
import User from 'react-icons/lib/fa/user';

function Posts({ posts }) {
  return (
    <div className="col-md-8 blog-main">

      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <Link to={post.id}>
            <h2 className="blog-post-title">{post.title}</h2>
          </Link>
          <p className="blog-post-meta">
            <CalendarIcon size={15} />&nbsp;
            <Moment format="DD/MM/YYYY">
              {post.timestamp}
            </Moment>&nbsp;
            | <User size={15} /> by {post.author}&nbsp;
            | <StarIcon size={15} /> {post.voteScore}&nbsp;
            | <TagIcon size={15} /> {post.category}
            | <CommentsIcon size={15} /> {post.commentCount}
          </p>

          <p>{post.body}</p>
        </div>
      ))}

    </div>
  );
}

export default Posts
