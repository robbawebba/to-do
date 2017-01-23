export const ADD_TODO = 'ADD_TODO'

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  }
}

export const TOGGLE_TODO = 'TOGGLE_TODO'

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index,
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
