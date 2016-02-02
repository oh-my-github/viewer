import 'babel-polyfill';
import 'isomorphic-fetch';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); /* for tab */
$( document ).ready(function(){ $(".button-collapse").sideNav(); }); /* for nav */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import './styles/styles.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  const showDevTools = require('./showDevTools');
  showDevTools(store);
}
