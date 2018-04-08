import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import { deletePost, fetchPost } from '../actions/posts';
import Post from './Post';
import CommentsList from './CommentsList';
import NotFound from '../components/NotFound';

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

  render() {
    const { post } = this.props;

    return (
      !post ?
        <NotFound /> :
        <Container>
          <h1>Post Detail</h1>
          {post && (
            <div>
              <Post
                post={post}
                isDetail={true}
                onDelete={this.deletePost}
              />
              <CommentsList
                category={post.category}
                postId={post.id}
              />
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
})(PostDetail)
