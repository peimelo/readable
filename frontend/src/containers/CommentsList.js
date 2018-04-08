import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';
import { Button, Container, UncontrolledTooltip } from 'reactstrap';
import New from 'react-icons/lib/fa/file';
import { Link } from 'react-router-dom';

import {
  clearComments,
  deleteComment,
  fetchPostComments,
  voteComment
} from '../actions/comments';
import Comment from '../components/Comment';

class CommentsList extends Component {
  componentDidMount() {
    this.props.clearComments();
    this.props.fetchPostComments(this.props.postId);
  }

  deleteComment = (id) => {
    this.props.deleteComment(id);
  };

  voteComment = (id, vote) => {
    this.props.voteComment(id, vote);
  };

  render() {
    const { category, comments, postId } = this.props;
    comments.data.sort(sortBy('-voteScore'));

    return (
      <Container>
        <h3>
          Comments&nbsp;
          <Button
            id="newComment"
            tag={Link}
            to={`/${category}/${postId}/comments/new`}
            color="success"
          >
            <New size={15}/>
          </Button>
          <UncontrolledTooltip
            placement="top"
            target="newComment"
          >
            New comment
          </UncontrolledTooltip>
        </h3>
        <hr/>
        {comments.data.map((comment) => (
          <Comment
            key={comment.id}
            category={category}
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
  category: PropTypes.string,
  postId: PropTypes.string
};

const mapStateToProps = (state) => ({
  comments: state.comments
});

export default connect(mapStateToProps, {
  clearComments,
  deleteComment,
  fetchPostComments,
  voteComment
})(CommentsList)
