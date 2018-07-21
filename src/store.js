import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import immutableTransform from 'redux-persist-transform-immutable'
import createSagaMiddleware from 'redux-saga'
import { fromJS } from 'immutable'

// Saga and Reducer
import rootSaga from './saga'
import rootReducer from './reducer'

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
  whitelist: ['auth'],
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// A nice helper to tell us if we're on the server
export const isServer = !(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
)

export default (url = '/') => {
  // Create a history depending on the environment
  const history = isServer
    ? createMemoryHistory({
      initialEntries: [url],
    })
    : createBrowserHistory()

  const enhancers = []
  const middlewares = [sagaMiddleware, routerMiddleware(history)]

  // Dev tools are helpful
  if (process.env.NODE_ENV === 'development' && !isServer) {
    const { devToolsExtension } = window
    const { logger } = require('redux-logger') // eslint-disable-line

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }

    middlewares.push(logger)
  }

  const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )

  // Do we have preloaded state available? Great, save it.
  const initialState = !isServer ? fromJS(window.__PRELOADED_STATE__) : fromJS({})

  // Delete it once we have it stored in a variable
  if (!isServer) {
    delete window.__PRELOADED_STATE__
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  // Create the store
  const store = createStore(
    connectRouter(history)(persistedReducer),
    initialState,
    composedEnhancers
  )

  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return {
    store,
    history,
    persistor,
  }
}
