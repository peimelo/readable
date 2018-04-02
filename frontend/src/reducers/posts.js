import {
  FETCH_CATEGORY_POSTS_SUCCESS,
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
    case FETCH_POSTS_SUCCESS:
    case FETCH_CATEGORY_POSTS_SUCCESS:
      return {
        ...state,
        data: action.posts
      };
    case POSTS_ORDER_BY:
      return {
        ...state,
        orderBy: action.orderBy
      };
    default:
      return state
  }
}

export default posts