
//Remember to keep the production/development version of this file in sync.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.

import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const middlewares = [thunk, createLogger()];

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Configure the store for hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
