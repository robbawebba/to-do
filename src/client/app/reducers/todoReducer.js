import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  TOGGLE_TODO,
} from '../actions/actions'

export default function todos(state = {
  isPosting: false,
  items: [],
}, action) {
  let newItems
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        isPosting: true,
      })
    case ADD_TODO_SUCCESS:
      // Return a new array
      newItems = [
        ...state.items,
        {
          text: action.item.text,
          id: action.item.id,
          completed: action.item.completed,
        },
      ]
      return Object.assign({}, state, {
        isPosting: false,
        items: newItems,
      })
    case ADD_TODO_FAILURE:
      return Object.assign({}, state, {
        isPosting: false,
      })
    case TOGGLE_TODO:
      return state.items.map((todo) => {
        if (todo.id === action.item.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          })
        }
        return todo
      })
    default:
      return state
  }
}
