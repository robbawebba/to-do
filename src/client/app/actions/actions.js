import checkStatus from './actionHelpers'

export const ADD_TODO = 'ADD_TODO'

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  }
}

export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'

export function addTodoSuccess(todoItem) {
  return {
    type: ADD_TODO_SUCCESS,
    item: todoItem,
  }
}

export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'

export function addTodoFailure(text, errorStatus, errorText) {
  return {
    type: ADD_TODO_FAILURE,
    text,
    errorStatus,
    errorText,
  }
}

export function createTodo(text) {
  const endPoint = '/todos'
  const data = {"text": text }
  return (dispatch) => {
    dispatch(addTodo(text))
    return fetch(process.env.API_HOST + endPoint,
      { method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    ).then(checkStatus)
      .then(response => response.json())
    .then(json => dispatch(addTodoSuccess(json)))
    .catch((error) => {
      dispatch(addTodoFailure(text, error.response.status, error.response.statusText))
    })
  }
}

export const TOGGLE_TODO = 'TOGGLE_TODO'

export function toggleTodo(id, completed) {
  const endPoint = `/todos/${id}`
  const data = { completed }
  return (dispatch) => {
    dispatch(updateTodo(id))
    return fetch(process.env.API_HOST + endPoint,
      { method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    ).then(checkStatus)
      .then(response => response.json())
    .then(json => dispatch(updateTodoSuccess(json)))
    .catch((error) => {
      dispatch(updateTodoFailure(text, error.response.status, error.response.statusText))
    })
  }
}
}

export const UPDATE_TODO = 'UPDATE_TODO'

export function updateTodo(id) {
  return {
    type: UPDATE_TODO,
    id,
  }
}

export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS'

export function updateTodoSuccess(id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export const TOGGLE_TODO_FAILURE = 'TOGGLE_TODO_FAILURE'

export function updateTodoFailure(id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

export const SET_VISIBILITY = 'SET_VISIBILITY'

export function setVisibility(filter) {
  return {
    type: SET_VISIBILITY,
    filter,
  }
}
