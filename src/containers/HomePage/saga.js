/**
 * Gets the repositories of the user from Github
 */
import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_REPOS } from './constants'
import { reposLoaded, repoLoadingError } from './actions'

import request from 'helpers/request'

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  const username = 'huyb1991'
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`

  try {
    // Call our request helper (see 'helpers/request')
    const repos = yield call(request, requestURL)
    yield put(reposLoaded(repos, username))
  } catch (err) {
    yield put(repoLoadingError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
const homeSaga = [
  takeLatest(LOAD_REPOS, getRepos),
]

export default homeSaga
