import { combineReducers } from 'redux';

import categories from './categories';
import comments from './comments';
import layout from './layout';
import posts from './posts';

const rootReducer = combineReducers({
  categories,
  comments,
  layout,
  posts,
});

export default rootReducer
