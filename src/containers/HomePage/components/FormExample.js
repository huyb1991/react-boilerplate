import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Components
import {
  Dropdown,
  Label,
  Input,
  Textarea,
} from '@components/Form'
import Title from './Title'

const StyledWrapper = styled.div`
  padding: 1rem;
`

const FormExample = ({
  inputTextValue,
  inputTextInvalid,
  inputTextHandleChange,
  ddExample,
  ddExampleHandleChange,
  inputTextareaValue,
  inputTextareaHanldeChange,
}) => (
  <StyledWrapper>
    <Title>Form components</Title>
    <Label isRequired>Label Required</Label>
    <Input
      required="required"
      inputType="text"
      placeholder="Input Example"
      inputValue={inputTextValue}
      isInvalid={inputTextInvalid}
      handleInputChange={inputTextHandleChange}
    />

    <Label>Dropdown example:</Label>
    <Dropdown
      size="full"
      title="Select Option"
      list={ddExample}
      handleSelectItem={ddExampleHandleChange}
    />

    <Label>Textarea example:</Label>
    <Textarea
      placeholder="Textarea example"
      inputValue={inputTextareaValue}
      handleInputChange={inputTextareaHanldeChange}
    />
  </StyledWrapper>
)

FormExample.defaultProps = {
  inputTextValue: '',
  inputTextInvalid: false,
  inputTextHandleChange: () => {},
  ddExample: [],
  ddExampleHandleChange: () => {},
  inputTextareaValue: '',
  inputTextareaHanldeChange: () => {},
}

FormExample.propTypes = {
  inputTextValue: PropTypes.string,
  inputTextInvalid: PropTypes.bool,
  inputTextHandleChange: PropTypes.func,
  ddExample: PropTypes.array,
  ddExampleHandleChange: PropTypes.func,
  inputTextareaValue: PropTypes.string,
  inputTextareaHanldeChange: PropTypes.func,
}

export default FormExample
