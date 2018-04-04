import {
  FETCH_COMMENTS_SUCCESS
} from '../actions/comments';

const INITIAL_STATE = {
  data: [],
};

function comments(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state
  }
}

export default comments