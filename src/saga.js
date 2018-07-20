/**
 * rootSaga
 */
import { all } from 'redux-saga/effects'

import homeSaga from './app/routes/homepage/saga'

export default function* rootSaga() {
  yield all([
    ...homeSaga,
  ])
}
