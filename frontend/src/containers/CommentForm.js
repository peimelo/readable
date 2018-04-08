import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { createComment, editComment, fetchComment } from '../actions/comments';
import TitleForm from '../components/TitleForm';

class CommentForm extends Component {
  state = {
    comment: {
      author: '',
      body: '',
    }
  };

  componentDidMount() {
    const {
      fetchComment,
      isEditing,
      match: { params: { commentId } }
    } = this.props;

    if (isEditing && commentId) {
      fetchComment(commentId)
        .then((comment) => this.setState({ comment }));
    }
  }

  handleFormSubmit = (e) => {
    const {
      createComment,
      editComment,
      history,
      isEditing,
      match: { params: { postId } }
    } = this.props;

    const { comment } = this.state;

    e.preventDefault();
    if (isEditing) {
      editComment(comment)
        .then((comment) => history.push(`/posts/${comment.parentId}`));
    } else {
      createComment(comment, postId)
        .then(() => history.push(`/posts/${postId}`));
    }
  };

  handleChange = (event) => {
    const target = event.target;
    const { comment } = this.state;

    const newComment = {
      ...comment,
      [target.name]: target.value
    };
    this.setState({ comment: newComment });
  };

  render() {
    const { history, isEditing, match: { params: { postId } }} = this.props;
    const { comment } = this.state;

    return (
      <Container>
        <TitleForm isEditing={isEditing} resource='Comment' />
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input
              id="author"
              name="author"
              value={comment.author}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="body">Body</Label>
            <Input
              id="body"
              name="body"
              value={comment.body}
              type="textarea"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
        <br />
        <Button onClick={() => {
          if (isEditing) {
            history.push(`/posts/${comment.parentId}`)
          } else {
            history.push(`/posts/${postId}`)
          }
        }}>
          Cancel
        </Button>
      </Container>
    );
  }
}

CommentForm.propTypes = {
  isEditing: PropTypes.bool,
};

CommentForm.defaultProps = {
  isEditing: true,
};

export default connect(null, {
  createComment,
  editComment,
  fetchComment,
})(CommentForm)
