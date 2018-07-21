import React from 'react'
import styled, { keyframes } from 'styled-components'

// Themes
import { COLORS } from '@themes'

// Refer: https://codepen.io/huyb1991/pen/LrzZWv
const animationName = keyframes`
  to { transform: rotate(360deg); }
`
const Spin = styled.div`
  text-align: center;

  :before {
    display: inline-block;
    content: "";
    box-sizing: border-box;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border-top: 2px solid ${COLORS.primary};
    border-right: 2px solid transparent;
    animation: ${animationName} 0.7s linear infinite;
  }
`

const Loading = () => (
  <Spin />
)

export default Loading
