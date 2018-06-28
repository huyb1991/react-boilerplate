import styled, { css } from 'styled-components'

// TODO: Find the way to implement performance
// Now the background and color are overwrite default
const StyledButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.size === 'full' && css`
    width: 100%;
  `}

  ${props => props.type === 'primary' && css`
    background: palevioletred;
    color: white;
  `}

  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: 0.7;
  `}
`

export default StyledButton
