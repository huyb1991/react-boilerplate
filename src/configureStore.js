import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

let middlewares = [sagaMiddleware]

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger') // eslint-disable-line

  middlewares = middlewares.push(...[logger]) // Use push api for empty array
}

const store = createStore(
  todos,
  applyMiddleware(...middlewares)
)

export default store
