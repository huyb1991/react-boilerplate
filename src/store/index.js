import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Saga and Reducer
import rootSaga from '../saga'
import rootReducer from '../reducers'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Middlewares configs
let middlewares = [sagaMiddleware]

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger') // eslint-disable-line

  middlewares = [...middlewares, logger]
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)

export default store
