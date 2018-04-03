import {
  FETCH_CATEGORY_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
  POSTS_ORDER_BY
} from '../actions/posts'
import { VOTE_SCORE } from '../constants/orderBy';

const INITIAL_STATE = {
  data: [],
  orderBy: VOTE_SCORE,
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
    case POSTS_ORDER_BY:
      return {
        ...state,
        orderBy: action.payload
      };
    default:
      return state
  }
}

export default posts