import {
  CATEGORY_SELECTED,
  FETCH_CATEGORIES_SUCCESS
} from '../actions/categories'

const INITIAL_STATE = {
  categorySelected: '',
  data: [],
};

function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CATEGORY_SELECTED:
      return {
        ...state,
        categorySelected: action.category
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: action.categories
      };
    default:
      return state;
  }
}

export default categories
