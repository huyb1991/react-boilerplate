import React from 'react'
import { render, hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
import { Frontload } from 'react-frontload'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import createStore from './store'

import App from './app'

// Create a store and get back itself and its history object
const { store, history, persistor } = createStore()

const Application = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Frontload noServerRender>
          <App />
        </Frontload>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
)

const root = document.querySelector('#root')

if (process.env.NODE_ENV === 'production') {
  Loadable.preloadReady().then(() => {
    hydrate(Application, root)
  })
} else {
  render(Application, root)
}
