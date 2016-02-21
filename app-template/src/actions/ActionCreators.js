import * as ActionTypes from './ActionTypes'
import { createAction, } from 'redux-actions'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export const fetchProfile = createAction(ActionTypes.FETCH_PROFILE, () => {
  /**
   * since we are have no meta at this point, (we are trying to fetch the meta)
   * we assume that the meta resource is in `${user}.github.com/oh-my-github/oh-my-github.json`
   *
   * further modification will include replacing the path with user input (yeoman options)
   */
  return fetch('/oh-my-github/oh-my-github.json')
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
})

