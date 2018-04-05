import * as BlogAPI from '../utils/BlogAPI'

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';

export const fetchPostComments = (postId) => dispatch => {
  return BlogAPI
    .getPostComments(postId)
    .then(comments => dispatch(fetchCommentsSuccess(comments)))
};

export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments
});

export const voteComment = (id, vote) => dispatch => {
  return BlogAPI
    .voteComment(id, vote)
    .then(comment => dispatch(fetchPostComments(comment.parentId)))
};
