import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import appReducer from './reducers/appReducer'

class App extends Component {
  render() {
    return <p> Hello React!</p>
  }
}

const store = createStore(appReducer)
store.subscribe(() => { console.log(store.getState()) })

render(<App />, document.getElementById('app'))
