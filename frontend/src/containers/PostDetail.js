import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/posts';
import Post from '../components/Post';

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
        {post && (<Post post={post} />)}
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
