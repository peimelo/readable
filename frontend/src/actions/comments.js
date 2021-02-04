import { v4 as uuidv4 } from 'uuid';
import * as BlogAPI from '../utils/BlogAPI';
import { fetchPost } from './posts';

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';

export function createComment(comment, postId) {
  comment = {
    ...comment,
    id: uuidv4(),
    parentId: postId,
    timestamp: Date.now()
  };

  return dispatch => {
    return BlogAPI.createComment(comment)
  }
}

export function deleteComment(id) {
  return dispatch => {
    return BlogAPI.deleteComment(id)
      .then(comment => {
        dispatch(fetchPost(comment.parentId));
        return dispatch(fetchPostComments(comment.parentId))
      })
  }
}

export function editComment(comment) {
  return dispatch => {
    return BlogAPI.editComment(comment)
  }
}

export function fetchComment(id) {
  return dispatch => {
    return BlogAPI.getComment(id)
  }
}

export const fetchCommentsSuccess = (comments, postId) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: { comments, postId }
});

export function fetchPostComments(postId) {
  return dispatch => {
    return BlogAPI.getPostComments(postId)
      .then(comments => dispatch(fetchCommentsSuccess(comments, postId)))
  }
}

export function voteComment(id, vote) {
  return dispatch => {
    return BlogAPI.voteComment(id, vote)
      .then(comment => dispatch(fetchPostComments(comment.parentId)))
  }
}
