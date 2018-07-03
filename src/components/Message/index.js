import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledMessage = styled.p`
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;

  ${props => props.isError && css`
    background-color: Red;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  `}
`

class Message extends React.Component {
  state = { hideMessage: false }

  componentDidMount() {
    setTimeout(() => this.setState({
      hideMessage: true,
    }), 3000)
  }

  render() {
    const { hideMessage } = this.state
    const { message, isError } = this.props

    return !hideMessage && <StyledMessage isError={isError}>{message}</StyledMessage>
  }
}

Message.defaultProps = {
  message: '',
  isError: false,
}

Message.propTypes = {
  message: PropTypes.string,
  isError: PropTypes.bool,
}

export default Message
