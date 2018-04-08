import * as BlogAPI from '../utils/BlogAPI'

export const CATEGORY_SELECTED = 'CATEGORY_SELECTED';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';

export const categorySelected = (category) => ({
  type: CATEGORY_SELECTED,
  payload: category
});

export function fetchCategories() {
  return dispatch => {
    return BlogAPI.getCategories()
      .then(data => dispatch(fetchCategoriesSuccess(data.categories)))
  }
}

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories
});
