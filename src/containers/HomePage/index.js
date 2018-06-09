import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Actions
import { loadRepos } from './actions'

const HomeWrapper = styled.div`
  background-color: #eee
`

class Home extends React.Component {
  componentDidMount() {
    console.log('Home container mounter')
    this.props.loadRepos()
  }

  render() {
    return (
      <HomeWrapper>
        <p>This is Home page</p>
      </HomeWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRepos: () => {
      return dispatch(loadRepos())
    },
  }
}

const mapStateToProps = (state) => {
  return {
    obj: state,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
