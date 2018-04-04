import * as BlogAPI from '../utils/BlogAPI'

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';

export const fetchComments = (id) => dispatch => {
  return BlogAPI
    .getComments(id)
    .then(comments => dispatch(fetchCommentsSuccess(comments)))
};

export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments
});
