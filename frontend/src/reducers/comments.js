import {
  FETCH_COMMENTS_SUCCESS
} from '../actions/comments';

function comments(state = {}, action) {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        [action.payload.postId]: action.payload.comments
      };
    default:
      return state
  }
}

export default comments
