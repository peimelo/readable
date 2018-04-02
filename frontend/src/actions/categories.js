import * as BlogAPI from '../utils/BlogAPI'

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories
});


export const fetchCategories = () => dispatch => {
  return BlogAPI
    .getCategories()
    .then(categories => dispatch(fetchCategoriesSuccess(categories)))
};
