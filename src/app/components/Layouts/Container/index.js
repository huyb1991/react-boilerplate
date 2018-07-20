import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

// Themes
import { METRICS } from '@themes'

const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: ${METRICS.space.default} ${METRICS.space.default};

  @media (min-width: ${METRICS.tablet}) {
    // This flex layout only for tablet screens or larger
    ${props => props.display === 'flex' && css`
      display: flex;
      justify-content: space-between;
    `}
  }

  @media (min-width: ${METRICS.desktop}) {
    padding: ${METRICS.space.large} ${METRICS.space.large};
    max-width: ${METRICS.desktop};
  }
`

const Container = ({ display, children }) => (
  <ContainerWrapper display={display}>{children}</ContainerWrapper>
)

Container.defaultProps = {
  display: 'default',
}

Container.propTypes = {
  display: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Container
