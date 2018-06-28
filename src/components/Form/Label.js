import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Themes
import { COLORS } from '@themes'

const StyledLabel = styled.label``
const StyledLabelRequired = styled.span`
  color: ${COLORS.danger};
`

const Label = ({ children, isRequired, htmlFor }) => (
  <StyledLabel htmlFor={htmlFor}>
    {isRequired && <StyledLabelRequired>* </StyledLabelRequired>}
    {children}
  </StyledLabel>
)

Label.propTypes = {
  isRequired: PropTypes.bool,
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Label.defaultProps = {
  isRequired: false,
  htmlFor: '',
}

export default Label
