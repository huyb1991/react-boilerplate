import React from 'react'
import ReactDOM from 'react-dom'

// Components
import Button from './components/Button'

const App = () => (
  <div>
    <p>Hello React!</p>
    <Button>Normal Button</Button>
    <Button type="primary">Primary Button</Button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
