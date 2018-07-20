import React from 'react'
import './style'

// Pages
import Routes from './routes'

// Components
import Header from '@components/Header'
import Footer from '@components/Footer'

export default () => (
  <React.Fragment>
    <Header />
    <Routes />
    <Footer />
  </React.Fragment>
)