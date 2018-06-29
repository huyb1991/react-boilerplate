import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import { loadRepos } from './actions'

// Components
import Container from '@components/Layouts/Container'
import Column from '@components/Layouts/Column'
import Card from '@components/Card'
import Button from '@components/Button'

import {
  Dropdown,
  Label,
  Input,
  Textarea,
} from '@components/Form'
import Title from './components/Title'
import ListRepo from './components/ListRepo'

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
    const { repos } = this.props

    const ddExample = [
      { value: 1, text: 'Option 1' },
      { value: 2, text: 'Option 2' },
      { value: 3, text: 'Option 3' },
    ]

    return (
      <Container display="flex">
        <Column size="small">
          <Card>
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
          </Card>
        </Column>
        <Column size="medium">
          <Card>
            <Button onClick={() => this.fetchRepoRequest()}>Fetch repositories</Button>
            <Title title="My repositories:" />
            <ListRepo repos={repos} />
          </Card>
        </Column>
      </Container>
    )
  }
}

Home.defaultProps = {
  repos: [],
}

Home.propTypes = {
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loadRepos: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  loadRepos: () => dispatch(loadRepos()),
})

const mapStateToProps = state => ({
  repos: state.home.get('repos'),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
