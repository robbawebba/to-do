import checkStatus from './actionHelpers';

export const AUTH_USER = 'AUTH_USER'

export function authUser(username, pswd) {
  return {
    type: AUTH_USER,
    username,
    pswd,
  }
}

export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS'

export function authUserSuccess(auth) {
  return {
    type: AUTH_USER_SUCCESS,
    auth,
  }
}

export const AUTH_USER_FAILURE = 'AUTH_USER_FAILURE'

export function authUserFailure(username, errorStatus, errorText) {
  return {
    type: AUTH_USER_FAILURE,
    username,
    errorStatus,
    errorText,
  }
}

export function userLogin(username, pswd) {
  const endPoint = '/auth/login'
  const data = { username, pswd }
  return (dispatch) => {
    dispatch(authUser(username, pswd))
    return fetch(process.env.API_HOST + endPoint,
      { method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    ).then(checkStatus)
      .then(response => response.json())
    .then(json => dispatch(authUserSuccess(json)))
    .catch((error) => {
      dispatch(authUserFailure(username, error.response.status, error.response.statusText))
    })
  }
}

export const SIGNUP_USER = 'SIGNUP_USER'

export function signupUser(username, pswd) {
  return {
    type: SIGNUP_USER,
    username,
    pswd,
  }
}

export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'

export function signupUserSuccess(auth) {
  return {
    type: SIGNUP_USER_SUCCESS,
    auth,
  }
}

export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'

export function signupUserFailure(username, errorStatus, errorText) {
  return {
    type: SIGNUP_USER_FAILURE,
    username,
    errorStatus,
    errorText,
  }
}

export function userSignup(username, pswd) {
  const endPoint = '/auth/signup'
  const data = { username, pswd }
  return (dispatch) => {
    dispatch(authUser(username, pswd))
    return fetch(process.env.API_HOST + endPoint,
      { method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    ).then(checkStatus)
      .then(response => response.json())
    .then(json => dispatch(signupUserSuccess(json)))
    .catch((error) => {
      dispatch(signupUserFailure(username, error.response.status, error.response.statusText))
    })
  }
}