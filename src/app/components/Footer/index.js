import React from 'react'
import styled, { keyframes } from 'styled-components'

// Themes
import { COLORS } from '@themes'

const FooterWrapper = styled.footer`
  background-color: ${COLORS.white};
  padding: 1rem;
  border-top: 1px solid rgba(0,0,0,.08);
  text-align: center;
`

const animationName = keyframes`
  to { transform: scale(1.2); }
`
const Love = styled.span`
  display: inline-block;
  color: #e00;
  animation: ${animationName} .5s infinite alternate;
  margin: 0 0.1rem;
`

const Footer = () => (
  <FooterWrapper>
    <p>Built with <Love>❤︎</Love> by Huy Nguyen &copy; 2018</p>
  </FooterWrapper>
)

export default Footer
