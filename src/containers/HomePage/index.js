import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Actions
import { loadRepos } from './actions'

// Components
import Container from '@components/Layouts/Container'
import Column from '@components/Layouts/Column'
import Card from '@components/Card'
import Button from '@components/Button'
import Loading from '@components/Loading'

import Title from './components/Title'
import FomrExample from './components/FormExample'
import ListRepo from './components/ListRepo'

// Example for styled-components
const ContentWrapper = styled.div`
  padding: 1rem;
`

class Home extends React.Component {
  // Set state for example only, it should be use props with Redux for performance
  state = {
    inputTextValue: null,
  }

  handleInputChange = (text) => {
    this.setState({ inputTextValue: text })
  }

  fetchRepoRequest = () => {
    this.props.loadRepos()
  }

  render() {
    const { inputTextValue } = this.state
    const { loading, repos } = this.props

    const ddExample = [
      { value: 1, text: 'Option 1' },
      { value: 2, text: 'Option 2' },
      { value: 3, text: 'Option 3' },
    ]

    return (
      <Container display="flex">
        <Column size="small">
          <Card>
            <ContentWrapper>
              <FomrExample
                inputTextValue={inputTextValue}
                inputTextInvalid={!inputTextValue || false}
                inputTextHandleChange={this.handleInputChange}

                ddExample={ddExample}
                ddExampleHandleChange={() => {}}

                inputTextareaValue=""
                inputTextareaHanldeChange={() => {}}
              />
            </ContentWrapper>
          </Card>
        </Column>
        <Column size="medium">
          <Card>
            <ContentWrapper>
              <Button onClick={() => this.fetchRepoRequest()}>Fetch repositories</Button>
              <Title title="My repositories:" />
              {loading && <Loading />}
              <ListRepo repos={repos} />
            </ContentWrapper>
          </Card>
        </Column>
      </Container>
    )
  }
}

Home.defaultProps = {
  loading: false,
  repos: [],
}

Home.propTypes = {
  loading: PropTypes.bool,
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loadRepos: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  loadRepos: () => dispatch(loadRepos()),
})

const mapStateToProps = state => ({
  loading: state.home.get('loading'),
  repos: state.home.get('repos'),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
