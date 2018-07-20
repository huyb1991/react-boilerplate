import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleStyled = styled.h1``

const Title = ({ title }) => (
  <TitleStyled>{title}</TitleStyled>
)

Title.defaultProps = {
  title: '',
}

Title.propTypes = {
  title: PropTypes.string,
}

export default Title
