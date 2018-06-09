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
    this.props.loadRepos()
  }

  render() {
    const { home } = this.props
    const username = home.get('currentUser')
    const repos = home.getIn(['userData', 'repositories'])

    return (
      <HomeWrapper>
        <p>This is Home page</p>
        <p>Username: {username}</p>
        <ul>
          {repos && repos.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
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

const mapStateToProps = state => ({
  home: state.home,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
