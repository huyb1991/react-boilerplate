import styled from 'styled-components'

import { METRICS } from '@themes'

const BaseStyled = styled.div`
  outline: none;
  width: 100%;
  transition: all .125s ease-in-out 0s;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: ${METRICS.radius.large};
  padding: ${METRICS.space.small} ${METRICS.space.default};
  margin: ${METRICS.space.small} 0;
`

export default BaseStyled
