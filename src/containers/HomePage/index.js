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

import {
  Dropdown,
  Label,
  Input,
  Textarea,
} from '@components/Form'
import Title from './components/Title'
import ListRepo from './components/ListRepo'

// Example for styled-components
const ContentWrapper = styled.div`
  padding: 1rem;
`

class Home extends React.Component {
  state = {
    inputValue: null,
  }

  handleInputChange = (text) => {
    this.setState({ inputValue: text })
  }

  fetchRepoRequest = () => {
    this.props.loadRepos()
  }

  render() {
    const { inputValue } = this.state
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
              <Title>Form components</Title>
              <Label isRequired>Label Required</Label>
              <Input
                required="required"
                handleInputChange={this.handleInputChange}
                isInvalid={!inputValue || false}
                inputType="text"
                inputValue={inputValue}
                placeholder="Input Example"
              />

              <Label>Dropdown example:</Label>
              <Dropdown
                size="full"
                title="Select Option"
                list={ddExample}
                handleSelectItem={() => {}}
              />

              <Label>Textarea example:</Label>
              <Textarea
                handleInputChange={this.handleInputChange}
                inputValue={inputValue}
                placeholder="Textarea example"
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
