import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

// Themes
import { METRICS, COLORS } from '@themes'
import BaseStyled from './BaseStyled'

const DDWrapper = styled.div`
  outline: none;
`
const DDHeader = BaseStyled.extend`
  position: relative;
  cursor: pointer;
  color: #999;

  &:after {
    content: "▼";
    padding: ${METRICS.space.small};
    position: absolute;
    right: 10px;
    top: 0;
  }

  ${props => props.isInvalid && css`
    border-color: ${COLORS.danger};
  `}

  ${props => props.isOpen && css`
    color: #999;
    background-color: #d4d4d4;
    border-color: #8c8c8c;
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);

    &:after {
      content: "▲"
    }
  `}
`
const DDHeaderTitle = styled.div``
const DDList = styled.ul`
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
  margin: ${METRICS.space.small} 0;
  padding: ${METRICS.space.small} 0;
  list-style: none;
`
const DDItem = styled.li`
  cursor: pointer;
  padding ${METRICS.space.small} ${METRICS.space.default};

  &:hover {
    background-color: #f5f5f5;
  }
`

class Dropdown extends React.Component {
  state = {
    listOpen: false,
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }

  selectItem = (idx) => {
    this.props.handleSelectItem(idx)
    this.clickOutside()
  }

  clickOutside = () => {
    this.setState({
      listOpen: false,
    })
  }

  render() {
    const { listOpen } = this.state
    const { title, list, isInvalid } = this.props

    /* eslint-disable */
    return (
      <DDWrapper tabIndex="0" onBlur={() => this.clickOutside()}>
        <DDHeader
          isOpen={listOpen}
          onClick={() => this.toggleList()}
          isInvalid={isInvalid}
        >
          <DDHeaderTitle>{title}</DDHeaderTitle>
        </DDHeader>
        {listOpen &&
          <DDList>
            {list && list.map((item, idx) => (
              <DDItem key={item.value} onClick={() => this.selectItem(idx)}>
                {item.text}
              </DDItem>
            ))}
          </DDList>
        }
      </DDWrapper>
    )
    /* eslint-enable */
  }
}

Dropdown.defaultProps = {
  title: '',
  list: [],
  isInvalid: false,
  handleSelectItem: () => {},
}

Dropdown.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  isInvalid: PropTypes.bool,
  handleSelectItem: PropTypes.func,
}

export default Dropdown
