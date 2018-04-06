import * as BlogAPI from '../utils/BlogAPI'
import { fetchPost } from './posts';

export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';

export const clearComments = () => ({
  type: CLEAR_COMMENTS,
});

export function deleteComment(id) {
  return dispatch => {
    return BlogAPI.deleteComment(id)
      .then(comment => {
        dispatch(fetchPost(comment.parentId));
        return dispatch(fetchPostComments(comment.parentId))
      })
  }
}

export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments
});

export function fetchPostComments(postId) {
  return dispatch => {
    return BlogAPI.getPostComments(postId)
      .then(comments => dispatch(fetchCommentsSuccess(comments)))
  }
}

export function voteComment(id, vote) {
  return dispatch => {
    return BlogAPI.voteComment(id, vote)
      .then(comment => dispatch(fetchPostComments(comment.parentId)))
  }
}
