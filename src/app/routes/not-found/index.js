import React from 'react'
import styled from 'styled-components'

const NotFoundWrapper = styled.div`
  background-color: red
`

class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NotFoundWrapper>
        <p>This is NotFound page</p>
      </NotFoundWrapper>
    )
  }
}

export default NotFound
