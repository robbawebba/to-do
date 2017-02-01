const checkStatus = (response) => {
  if (response.status === 401) {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  } else if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export default checkStatus
