import React from 'react'
import PropTypes from 'prop-types'

// Styles
import StyledButton from './StyledButton'

const Button = ({ onClick, children, type }) => (
  <StyledButton onClick={onClick} type={type}>
    { children }
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  onClick: () => {},
  type: 'default',
}

export default Button
