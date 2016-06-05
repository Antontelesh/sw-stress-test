import without from 'lodash/without'
import {LOAD_START} from '../actions'
import {LOAD_ERROR} from '../actions'

export default (state = [], action) => {

  switch (action.type) {

  case LOAD_START:
    return [].concat(state, action.source)

  case LOAD_ERROR:
    return without(state, action.source)

  default:
    return state

  }

}
