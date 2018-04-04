import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/posts';
import Post from '../components/Post';
import Comments from '../containers/Comments';

class PostDetail extends Component {
  componentDidMount() {
    const { postId } = this.props.match.params;
    if (postId) {
      this.props.fetchPost(postId);
    }
  }

  render() {
    const { post } = this.props;

    return (
      <div className="container">
        <h1>Post Detail</h1>
        {post && (
          <div>
            <Post post={post}/>
            <Comments postId={post.id}/>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.postId]
});

export default connect(mapStateToProps, {
  fetchPost,
})(PostDetail)
