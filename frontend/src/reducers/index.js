import { combineReducers } from 'redux'

import categories from './categories'
import comments from './comments'
import posts from './posts'

const rootReducer = combineReducers({
  categories,
  comments,
  posts,
});

export default rootReducer
