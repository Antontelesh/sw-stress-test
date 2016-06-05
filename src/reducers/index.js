import {combineReducers} from 'redux'

import sources from './sources'
import loaded from './loaded'
import loading from './loading'
import errors from './errors'
import current from './current'

export default combineReducers({
  sources,
  loaded,
  loading,
  errors,
  current,
})
