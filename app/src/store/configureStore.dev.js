import { createStore, applyMiddleware, compose, } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const middlewares = [promise,]

export default function configureStore(initialState) {
  let store

  if (window.devToolsExtension) {
    store = createStore(
      rootReducer,
      initialState,
      compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares)
    )
  }

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
