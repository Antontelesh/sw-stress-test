import {LOAD_SUCCESS} from '../actions'

export default (state = [], action) => {

  switch (action.type) {

  case LOAD_SUCCESS:
    return [].concat(state, action.source)

  default:
    return state

  }

}
