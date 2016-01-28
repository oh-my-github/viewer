//Remember to keep the production/development version of this file in sync.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [promise];

const finalCreateStore = applyMiddleware(
  ...middlewares
)(createStore);

export default function configureStore(initialState) {
  // Add middleware
  return finalCreateStore(rootReducer, initialState);
}
