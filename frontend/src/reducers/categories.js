import { FETCH_CATEGORIES_SUCCESS } from '../actions/categories'

function categories(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return state
  }
}

export default categories