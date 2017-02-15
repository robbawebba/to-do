import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
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
          id: action.item._id,
          completed: action.item.completed,
          lastUpdated: action.item.updated_at,
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
    case UPDATE_TODO:
      return Object.assign({}, state, {
        isPosting: true,
      })
    case UPDATE_TODO_SUCCESS:
      newItems = state.items.map((todo) => {
        if (todo.id === action.item._id) {
          return Object.assign({}, todo, {
            completed: action.item.completed,
          })
        }
        return todo
      })
      return Object.assign({}, state, {
        isPosting: false,
        items: newItems,
      })
    case UPDATE_TODO_FAILURE:
      return Object.assign({}, state, {
        isPosting: false,
      })
    default:
      return state
  }
}
