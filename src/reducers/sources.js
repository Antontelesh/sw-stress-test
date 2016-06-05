import {LOAD_SOURCES} from '../actions'

export default (state = [], action) => {

  switch (action.type) {

  case LOAD_SOURCES:
    return action.sources

  default:
    return state

  }

}
