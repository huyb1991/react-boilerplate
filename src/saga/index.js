/**
 * rootSaga
 */
import { all } from 'redux-saga/effects'

import homeSaga from '../containers/HomePage/saga'

export default function* rootSaga() {
  yield all([
    ...homeSaga,
  ])
}
