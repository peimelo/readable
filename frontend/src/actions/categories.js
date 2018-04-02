import * as BlogAPI from '../utils/BlogAPI'

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const CATEGORY_SELECTED = 'CATEGORY_SELECTED';

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories
});

export const categorySelected = (category) => ({
  type: CATEGORY_SELECTED,
  category
});


export const fetchCategories = () => dispatch => {
  return BlogAPI
    .getCategories()
    .then(categories => dispatch(fetchCategoriesSuccess(categories)))
};
