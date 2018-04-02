import * as BlogAPI from '../utils/BlogAPI'

export const FETCH_CATEGORY_POSTS_SUCCESS = 'FETCH_CATEGORY_POSTS_SUCCESS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const POSTS_ORDER_BY = 'POSTS_ORDER_BY';

export const fetchCategoryPosts = (category) => dispatch => {
  return BlogAPI
    .getCategoryPosts(category)
    .then(posts => dispatch(fetchCategoryPostsSuccess(posts)))
};

export const fetchCategoryPostsSuccess = (posts) => ({
  type: FETCH_CATEGORY_POSTS_SUCCESS,
  posts
});

export const fetchPosts = () => dispatch => {
  return BlogAPI
    .getPosts()
    .then(posts => dispatch(fetchPostsSuccess(posts)))
};

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  posts
});

export const postsOrderBy = (orderBy) => ({
  type: POSTS_ORDER_BY,
  orderBy
});

