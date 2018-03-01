import * as BlogAPI from '../utils/BlogAPI'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
})

export const fetchCategories = () => dispatch => {
  return BlogAPI
    .getCategories()
    .then(categories => dispatch(receiveCategories(categories)))
}
