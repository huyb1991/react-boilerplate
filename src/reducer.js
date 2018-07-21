/**
 * rootReducers
 */

import { combineReducers } from 'redux'
import home from './app/routes/homepage/reducers'

export default combineReducers({
  home,
})
