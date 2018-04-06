import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import { deletePost, fetchPost, votePost } from '../actions/posts';
import Post from '../components/Post';
import CommentsList from './CommentsList';

class PostDetail extends Component {
  componentDidMount() {
    const { postId } = this.props.match.params;
    if (postId) {
      this.props.fetchPost(postId);
    }
  }

  deletePost = (id) => {
    this.props.deletePost(id)
      .then(() => this.props.history.push('/'));
  };

  votePost = (id, vote) => {
    this.props.votePost(id, vote);
  };

  render() {
    const { post } = this.props;

    return (
      <Container>
        <h1>Post Detail</h1>
        {post && (
          <div>
            <Post
              post={post}
              isDetail={true}
              onDelete={this.deletePost}
              onVote={this.votePost}
            />
            <CommentsList postId={post.id} />
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.postId]
});

export default connect(mapStateToProps, {
  deletePost,
  fetchPost,
  votePost
})(PostDetail)
