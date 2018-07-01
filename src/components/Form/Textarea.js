import React from 'react'
import PropTypes from 'prop-types'

// Styles
import { css } from 'styled-components'
import { METRICS, COLORS } from '@themes'
import BaseStyled from './BaseStyled'

const StyledTextarea = BaseStyled.extend`
  resize: vertical;
  border-radius: ${METRICS.radius.small};

  ${props => props.isInvalid && css`
    border-color: ${COLORS.danger};
  `}
`.withComponent('textarea')

class Textarea extends React.Component {
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
      placeholder,
      isInvalid,
      handleInputChange,
    } = this.props

    return (
      <StyledTextarea
        required={required}
        isInvalid={isInvalid}
        placeholder={placeholder}
        value={inputValue}
        onChange={this.handleChange}
        onBlur={() => handleInputChange(inputValue)}
      />
    )
  }
}

Textarea.propTypes = {
  required: PropTypes.bool,
  isInvalid: PropTypes.bool,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
  handleInputChange: PropTypes.func,
}

Textarea.defaultProps = {
  required: false,
  isInvalid: false,
  placeholder: '',
  inputValue: '',
  handleInputChange: () => {},
}

export default Textarea
