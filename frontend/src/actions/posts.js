import * as BlogAPI from '../utils/BlogAPI'

export const FETCH_CATEGORY_POSTS_SUCCESS = 'FETCH_CATEGORY_POSTS_SUCCESS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const POSTS_ORDER_BY = 'POSTS_ORDER_BY';

export function deletePost(id) {
  return dispatch => {
    return BlogAPI.deletePost(id)
  }
}

export const fetchCategoryPosts = category => dispatch => {
  return BlogAPI
    .getCategoryPosts(category)
    .then(posts => dispatch(fetchCategoryPostsSuccess(posts)))
};

export const fetchCategoryPostsSuccess = posts => ({
  type: FETCH_CATEGORY_POSTS_SUCCESS,
  payload: posts
});

export const fetchPost = id => dispatch => {
  return BlogAPI
    .getPost(id)
    .then(post => dispatch(fetchPostSuccess(post)))
};

export const fetchPosts = () => dispatch => {
  return BlogAPI
    .getPosts()
    .then(posts => dispatch(fetchPostsSuccess(posts)))
};

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

export const votePost = (id, vote) => dispatch => {
  return BlogAPI
    .votePost(id, vote)
    .then(post => dispatch(fetchPost(post.id)))
};
