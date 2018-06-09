import React from 'react'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  background-color: #eee
`

class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HomeWrapper>
        <p>This is Home page</p>
      </HomeWrapper>
    )
  }
}

export default Home
