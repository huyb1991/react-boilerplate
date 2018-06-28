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
      isInvalid,
      placeholder,
      handleInputChange,
    } = this.props

    return (
      <StyledTextarea
        required={required}
        value={inputValue || ''}
        isInvalid={isInvalid}
        placeholder={placeholder}
        onChange={this.handleChange}
        onBlur={() => handleInputChange(inputValue)}
      />
    )
  }
}

Textarea.propTypes = {
  isInvalid: PropTypes.bool,
  inputValue: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
}

Textarea.defaultProps = {
  isInvalid: false,
  inputValue: '',
  placeholder: '',
  required: '',
}

export default Textarea
