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
import TitleForm from '../components/TitleForm';
import NotFound from '../components/NotFound';

class PostForm extends Component {
  state = {
    post: {
      title: '',
      author: '',
      category: 'react',
      body: '',
    },
    isPostNotFound: false
  };

  componentDidMount() {
    const { postId } = this.props.match.params;
    if (this.props.isEditing && postId) {
      this.props.fetchPost(postId)
        .then((post) => {
          if (Object.keys(post.payload).length) {
            this.setState({ post: post.payload })
          } else {
            this.setState({ isPostNotFound: true })
          }
        });
    }
    this.props.fetchCategories();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { createPost, editPost, history, isEditing } = this.props;
    const { post } = this.state;
    if (isEditing) {
      editPost(post)
        .then((post) => history.push(`/${post.category}/${post.id}`));
    } else {
      createPost(post)
        .then(() => history.push('/'));
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
    const { isPostNotFound, post } = this.state;

    return (
      isPostNotFound ?
        <NotFound /> :
        <Container>
          <TitleForm isEditing={isEditing} resource='Post' />
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
              history.push(`/${post.category}/${post.id}`)
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

