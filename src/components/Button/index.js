import React from 'react'
import PropTypes from 'prop-types'

// Styles
import StyledButton from './StyledButton'

const Button = ({
  onClick,
  children,
  type,
  size,
  disabled,
}) => (
  <StyledButton
    onClick={onClick}
    type={type}
    size={size}
    disabled={disabled}
  >
    { children }
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  onClick: () => {},
  type: 'default',
  size: 'default',
  disabled: false,
}

export default Button
