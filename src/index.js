import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

// Configs
import store from './store'

// Pages
import MainApp from './app'


const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={null}>
      <MainApp />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
