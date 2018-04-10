import {
  FETCH_CATEGORY_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
} from '../actions/posts'

const INITIAL_STATE = {
  data: [],
};

function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case FETCH_POSTS_SUCCESS:
    case FETCH_CATEGORY_POSTS_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state
  }
}

export default posts
