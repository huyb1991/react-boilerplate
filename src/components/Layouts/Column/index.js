import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

// Themes
import { METRICS } from 'themes'

const ColumnStyled = styled.div`
  vertical-align: top;

  ${props => props.size === 'full' && css`
    width: 100%;
  `}

  ${props => props.size === 'medium' && css`
    width: 75%;
    display: inline-block;

    @media (min-width: ${METRICS.tablet}) {
      padding: 0 ${METRICS.space.small};
    }

    @media (min-width: ${METRICS.desktop}) {
      padding: 0 ${METRICS.space.large};
    }
  `}

  ${props => props.size === 'small' && css`
    width: 25%;
    display: inline-block;

    @media (min-width: ${METRICS.tablet}) {
      padding: 0 ${METRICS.space.small};
    }
  `}

  @media (max-width: ${METRICS.tablet}) {
    width: 100%;
  }

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`

const Column = ({ size, children }) => (
  <ColumnStyled size={size}>{children}</ColumnStyled>
)

Column.defaultProps = {
  size: 'full',
}

Column.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Column
