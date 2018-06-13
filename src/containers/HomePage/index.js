import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import { loadRepos } from './actions'

// Components
import Container from 'components/Layouts/Container'
import Column from 'components/Layouts/Column'

class Home extends React.Component {
  componentDidMount() {
    this.props.loadRepos()
  }

  render() {
    const { username, repos } = this.props

    return (
      <Container display="flex">
        <Column size="small">
          <p>Left column</p>
        </Column>
        <Column size="medium">
          <p>This is Home page</p>
          <p>Username: {username}</p>
          <ul>
            {repos && repos.map(repo => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </Column>
      </Container>
    )
  }
}

Home.defaultProps = {
  username: '',
  repos: [],
}

Home.propTypes = {
  username: PropTypes.string,
  repos: PropTypes.arrayOf(PropTypes.object),
  loadRepos: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  loadRepos: () => dispatch(loadRepos()),
})

const mapStateToProps = state => ({
  username: state.home.get('currentUser'),
  repos: state.home.get('repos'),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
