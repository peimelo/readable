import { combineReducers } from 'redux'
import categories from './categories'
import counter from './counter'

const rootReducer = combineReducers({
  counter,
  categories
})

export default rootReducer
