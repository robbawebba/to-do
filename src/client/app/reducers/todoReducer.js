import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  TOGGLE_TODO,
} from '../actions/actions'

let newTodoId = 0
export default function todos(state = [], action) {
  console.log(action)
  console.log("BEFORE")
  let newArray
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      // Return a new array
      newArray = [
        ...state,
        {
          text: action.text,
          id: newTodoId++,
          completed: false,
        },
      ]
      console.log("HELLO in ADD")
      return newArray
    case TOGGLE_TODO:
    console.log("HELLO in TOGGLE")
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          })
        }
        return todo
      })
    default:
    console.log("HELLO in DEFAULT")
      return state
  }
}
