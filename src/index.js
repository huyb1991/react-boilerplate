import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Configs
import store from './configureStore'

// Components
import Header from './components/Header'

// Pages
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import NotFoundPage from './containers/NotFoundPage'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
