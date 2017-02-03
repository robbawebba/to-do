import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './reducers/appReducer'
import AddTodo from './components/addTodo'
import VisibleTodoList from './components/todoListConsole'
import Footer from './components/footer'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
store.subscribe(() => { console.log(store.getState()) })

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'))
