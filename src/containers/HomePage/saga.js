/**
 * Gets the repositories of the user from Github
 */
import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_REPOS } from './constants'
import { loadReposSuccess, loadReposError } from './actions'

// Helpers
import { getRequest } from '@helpers/request'
import api from '@helpers/api'

export function* getRepos() {
  const requestURL = api.getRepos

  try {
    const repos = yield call(getRequest, requestURL)
    yield put(loadReposSuccess(repos))
  } catch (err) {
    yield put(loadReposError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
const homeSaga = [
  takeLatest(LOAD_REPOS, getRepos),
]

export default homeSaga
