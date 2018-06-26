import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import { loadRepos } from './actions'

// Components
import Container from '@components/Layouts/Container'
import Column from '@components/Layouts/Column'
import Card from '@components/Card'

import Title from './components/Title'
import ListRepo from './components/ListRepo'

class Home extends React.Component {
  componentDidMount() {
    this.props.loadRepos()
  }

  render() {
    const { username, repos } = this.props

    return (
      <Container display="flex">
        <Column size="small">
          <Card>
            <p>Left column</p>
          </Card>
        </Column>
        <Column size="medium">
          <Card>
            <Title title={`${username} repos:`} />
            <ListRepo repos={repos} />
          </Card>
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
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
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
