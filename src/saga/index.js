/**
 * rootSaga
 */
import { all } from 'redux-saga'

import homeSaga from '../containers/HomePage/saga'

export default function* rootSaga() {
  yield all([
    ...homeSaga,
  ])
}
