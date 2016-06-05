import {createStore} from 'redux'
import {applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import reducer from './reducers/index'
import map from 'lodash/map'

const logger = createLogger({
  collapsed: true,
})

const addBase = picture =>
  'http://127.0.0.1:8099/' + picture

export default createStore(reducer, {
  sources: map(PICTURES, addBase),
}, applyMiddleware(logger))
