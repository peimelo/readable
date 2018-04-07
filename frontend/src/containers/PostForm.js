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

import { fetchCategories } from '../actions/categories';
import { createPost, editPost, fetchPost } from '../actions/posts';

class PostForm extends Component {
  state = {
    post: {
      title: '',
      author: '',
      category: 'react',
      body: '',
    }
  };

  componentDidMount() {
    const { postId } = this.props.match.params;
    if (this.props.isEditing && postId) {
      this.props.fetchPost(postId)
        .then((post) => this.setState({ post: post.payload }));
    }
    this.props.fetchCategories();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.props.isEditing) {
      this.props.editPost(this.state.post)
        .then((post) => this.props.history.push(`/posts/${post.id}`));
    } else {
      this.props.createPost(this.state.post)
        .then(() => this.props.history.push('/'));
    }
  };

  handleChange = (event) => {
    const target = event.target;
    const { post } = this.state;

    const newPost = {
      ...post,
      [target.name]: target.value
    };
    this.setState({ post: newPost });
  };

  render() {
    const { categories, history, isEditing } = this.props;
    const { post } = this.state;

    return (
      <Container>
        <h1>{isEditing ? 'Editing ' : 'New '} Post</h1>

        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={post.title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input
              id="author"
              name="author"
              value={post.author}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input
              id="category"
              name="category"
              type="select"
              value={post.category}
              onChange={this.handleChange}
            >
              {categories.data.map((category) =>
                <option key={category.name}>{category.name}</option>
              )}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="body">Body</Label>
            <Input
              id="body"
              name="body"
              value={post.body}
              type="textarea"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
        <br />
        <Button onClick={() => {
          if (isEditing) {
            history.push(`/posts/${post.id}`)
          } else {
            history.push('/')
          }
        }}>
          Cancel
        </Button>
      </Container>
    );
  }
}

PostForm.propTypes = {
  isEditing: PropTypes.bool,
};

PostForm.defaultProps = {
  isEditing: true,
};

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  createPost,
  editPost,
  fetchCategories,
  fetchPost,
})(PostForm)

