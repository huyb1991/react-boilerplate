import React from 'react'
import styled from 'styled-components'

// Components
import NavBar from './NavBar'
import HeaderLink from './HeaderLink'

const HeaderWrapper = styled.div`
  background-color: #eee
`

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <NavBar>
          <HeaderLink exact to="/">Home</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/404">NotFound</HeaderLink>
        </NavBar>
      </HeaderWrapper>
    )
  }
}

export default Header
