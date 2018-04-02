import {
  FETCH_CATEGORY_POSTS_SUCCESS,
  FETCH_POSTS_SUCCESS
} from '../actions/posts'

function posts(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
    case FETCH_CATEGORY_POSTS_SUCCESS:
      return action.posts;
    default:
      return state
  }
}

export default posts