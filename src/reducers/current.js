import {OPEN_IMAGE} from '../actions'

export default (state = '', action) => {

  switch (action.type) {

  case OPEN_IMAGE:
    return action.source

  default:
    return state

  }

}
