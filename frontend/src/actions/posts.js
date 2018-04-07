import * as BlogAPI from '../utils/BlogAPI'
import uuid from 'uuid/v4'

export const FETCH_CATEGORY_POSTS_SUCCESS = 'FETCH_CATEGORY_POSTS_SUCCESS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const POSTS_ORDER_BY = 'POSTS_ORDER_BY';

export function createPost(post) {
  post = {
    ...post,
    id: uuid(),
    timestamp: Date.now()
  };

  return dispatch => {
    return BlogAPI.createPost(post)
  }
}

export function deletePost(id) {
  return dispatch => {
    return BlogAPI.deletePost(id)
  }
}

export function editPost(post) {
  return dispatch => {
    return BlogAPI.editPost(post)
  }
}

export function fetchCategoryPosts(category) {
  return dispatch => {
    return BlogAPI
      .getCategoryPosts(category)
      .then(posts => dispatch(fetchCategoryPostsSuccess(posts)))
  }
}

export const fetchCategoryPostsSuccess = posts => ({
  type: FETCH_CATEGORY_POSTS_SUCCESS,
  payload: posts
});

export function fetchPost(id) {
  return dispatch => {
    return BlogAPI
      .getPost(id)
      .then(post => dispatch(fetchPostSuccess(post)))
  }
}

export function fetchPosts() {
  return dispatch => {
    return BlogAPI
      .getPosts()
      .then(posts => dispatch(fetchPostsSuccess(posts)))
  }
}

export const fetchPostSuccess = post => ({
  type: FETCH_POST_SUCCESS,
  payload: post
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});

export const postsOrderBy = orderBy => ({
  type: POSTS_ORDER_BY,
  payload: orderBy
});

export function votePost(id, vote) {
  return dispatch => {
    return BlogAPI
      .votePost(id, vote)
      .then(post => dispatch(fetchPost(post.id)))
  }
}
