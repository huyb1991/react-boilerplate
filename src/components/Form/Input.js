import React from 'react'
import PropTypes from 'prop-types'

// Styles
import { css } from 'styled-components'
import { COLORS } from '@themes'
import BaseStyled from './BaseStyled'

const StyledInput = BaseStyled.extend`
  ${props => props.isInvalid && css`
    border-color: ${COLORS.danger};
  `}
`.withComponent('input')

class Input extends React.Component {
  state = {
    inputValue: this.props.inputValue,
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  render() {
    const { inputValue } = this.state
    const {
      required,
      disabled,
      isInvalid,
      placeholder,
      inputType,
      handleInputChange,
    } = this.props

    return (
      <StyledInput
        required={required}
        disabled={disabled}
        isInvalid={isInvalid}
        placeholder={placeholder}
        type={inputType}
        value={inputValue}
        onChange={this.handleChange}
        onBlur={() => handleInputChange(inputValue)}
      />
    )
  }
}

Input.propTypes = {
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  inputValue: PropTypes.string,
  handleInputChange: PropTypes.func,
}

Input.defaultProps = {
  required: false,
  disabled: false,
  isInvalid: false,
  placeholder: '',
  inputType: 'text',
  inputValue: '',
  handleInputChange: () => {},
}

export default Input
