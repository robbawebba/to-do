import { combineReducers } from 'redux'
import todos from './todoReducer'
import visibilityFilter from './visibilityReducer'

const appReducer = combineReducers({
  visibilityFilter,
  todos,
})

export default appReducer
