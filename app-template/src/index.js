/** inject poly-fills */
import 'babel-polyfill'
import 'isomorphic-fetch'

/** enable and style UI components */
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin() /** for material-ui tab */
import './index.css'   /** for global styling */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, } from 'react-redux'

import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
)

if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('./showDevTools')
  showDevTools(store)
}
