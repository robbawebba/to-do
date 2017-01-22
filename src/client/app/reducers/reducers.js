// Old, unused reducer file -- keeping for reference
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY,
  VisibilityFilters,
 } from '../actions/actions'

export default function todoList(state = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
}, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((item, index) => {
          if (index === action.index) {
            return Object.assign({}, item, {
              completed: !item.completed,
            })
          }
          return item
        }),
      })
    case SET_VISIBILITY:
      return Object.assign({}, state, {
        visibilityFilter: action.filter,
      })
    default:
      return state
  }
}
