import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

// Configs
import store from './store'

// Components
import Header from 'components/Header'
import Footer from 'components/Footer'

// Pages
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import NotFoundPage from './containers/NotFoundPage'

// Themes
import { COLORS } from 'themes'

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    line-height: 1.15;
    font-weight: 400;
    font-size: 1rem;
    background-color: #f6f6f6;
    color: ${COLORS.dark};
  }

  a {
    text-decoration: none;
    color: ${COLORS.primary};
  }

  * {
    box-sizing: border-box;
  }
`

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
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
