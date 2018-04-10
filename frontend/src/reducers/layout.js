import { ORDER_BY } from '../actions/layout'
import { VOTE_SCORE } from '../constants/orderBy';

const INITIAL_STATE = {
  orderBy: VOTE_SCORE,
};

function layout(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ORDER_BY:
      return {
        ...state,
        orderBy: action.payload
      };
    default:
      return state
  }
}

export default layout
