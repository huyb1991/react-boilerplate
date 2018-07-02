import { fromJS } from 'immutable'

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
} from './constants'

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  repos: [],
  message: '',
})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)

    case LOAD_REPOS_SUCCESS:
      return state
        .set('repos', action.payload)
        .set('loading', false)
        .set('message', 'Successfully fetch my repositories')

    case LOAD_REPOS_ERROR:
      return state
        .set('error', true)
        .set('loading', false)
        .set('message', `Could not get repository data! ${action.error}`)

    default:
      return state
  }
}

export default appReducer

