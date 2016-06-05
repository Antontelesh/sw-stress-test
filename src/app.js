import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import App from './containers/App'
import './styles/common.css'

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(Root, document.querySelector('#app'))
