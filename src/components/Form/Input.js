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
      inputType,
      placeholder,
      handleInputChange,
    } = this.props

    return (
      <StyledInput
        required={required}
        disabled={disabled}
        value={inputValue || ''}
        type={inputType}
        isInvalid={isInvalid}
        placeholder={placeholder}
        onChange={this.handleChange}
        onBlur={() => handleInputChange(inputValue)}
      />
    )
  }
}

Input.propTypes = {
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  inputValue: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  handleInputChange: PropTypes.func,
}

Input.defaultProps = {
  disabled: false,
  isInvalid: false,
  inputValue: '',
  inputType: 'text',
  placeholder: '',
  required: '',
  handleInputChange: () => {},
}

export default Input
