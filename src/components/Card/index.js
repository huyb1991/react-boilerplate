import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Themes
import { COLORS, METRICS } from 'themes'

const CardWrapper = styled.div`
  background-color: ${COLORS.white};
  box-shadow: 0 0 16px 0 rgba(0,0,0,.03);
  border: 1px solid rgba(0,0,0,.08);
  border-radius: ${METRICS.radius.small};
  margin-bottom: 1rem;
`

const Card = ({ children }) => (
  <CardWrapper>{children}</CardWrapper>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
