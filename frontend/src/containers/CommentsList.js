import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';
import { Button, Container } from 'reactstrap';
import New from 'react-icons/lib/fa/file';

import {
  deleteComment,
  fetchPostComments,
  voteComment
} from '../actions/comments';
import Comment from '../components/Comment';

class CommentsList extends Component {
  componentDidMount() {
    this.props.fetchPostComments(this.props.postId);
  }

  deleteComment = (id) => {
    this.props.deleteComment(id);
  };

  voteComment = (id, vote) => {
    this.props.voteComment(id, vote);
  };

  render() {
    const { comments } = this.props;
    comments.data.sort(sortBy('-voteScore'));

    return (
      <Container>
        <h3>
          Comments&nbsp;
          <Button color="success"><New size={15}/></Button>
        </h3>
        <hr/>
        {comments.data.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDelete={this.deleteComment}
            onVote={this.voteComment}
          >
          </Comment>
        ))}
      </Container>
    );
  }
}

CommentsList.propTypes = {
  postId: PropTypes.string
};

const mapStateToProps = (state) => ({
  comments: state.comments
});

export default connect(mapStateToProps, {
  deleteComment,
  fetchPostComments,
  voteComment
})(CommentsList)
