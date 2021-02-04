import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaFile } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, UncontrolledTooltip } from 'reactstrap';
import sortBy from 'sort-by';
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
    const { category, comments, postId } = this.props;

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
            <FaFile size={15}/>
          </Button>
          <UncontrolledTooltip
            placement="top"
            target="newComment"
          >
            New comment
          </UncontrolledTooltip>
        </h3>
        <hr/>
        {comments && comments.map((comment) => (
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

const mapStateToProps = (state, ownProps) => ({
  comments: state.comments[ownProps.postId] && state.comments[ownProps.postId].sort(sortBy('-voteScore'))
});

export default connect(mapStateToProps, {
  deleteComment,
  fetchPostComments,
  voteComment
})(CommentsList)
