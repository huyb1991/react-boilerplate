import { injectGlobal } from 'styled-components'

// Themes
import { COLORS } from '@themes'

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    line-height: 1.15;
    font-weight: 400;
    font-size: 1rem;
    background-color: #f6f6f6;
    color: ${COLORS.dark};
  }

  a {
    text-decoration: none;
    color: ${COLORS.primary};
  }

  * {
    box-sizing: border-box;
  }
`
