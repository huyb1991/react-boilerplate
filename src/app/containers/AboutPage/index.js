import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  background-color: #eee
`

class About extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AboutWrapper>
        <p>This is About page</p>
      </AboutWrapper>
    )
  }
}

export default About
