import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

// Configs
import store from './store'

// Components
import Header from '@components/Header'
import Footer from '@components/Footer'

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
