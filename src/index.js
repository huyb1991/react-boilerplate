import React from 'react'
import ReactDOM from 'react-dom'

import styled, { css } from 'styled-components'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`

const App = () => (
  <div>
    <p>Hello React!</p>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
