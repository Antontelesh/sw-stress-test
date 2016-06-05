import {LOAD_ERROR} from '../actions'

export default (state = [], action) => {

  switch (action.type) {

  case LOAD_ERROR:
    return [].concat(state, action.source)

  default:
    return state

  }

}
