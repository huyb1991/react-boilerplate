import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Header from './components/Header'

// Pages
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import NotFoundPage from './containers/NotFoundPage'

const App = () => (
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
)

ReactDOM.render(<App />, document.getElementById('root'))
