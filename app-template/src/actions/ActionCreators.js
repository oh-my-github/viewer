import * as ActionTypes from './ActionTypes';
import { createAction } from 'redux-actions';

export function getProfile() {
  return {
    type: ActionTypes.FETCH_PROFILE_TRY
  };
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

export const fetchProfile = createAction(ActionTypes.FETCH_PROFILE, () => {
  return fetch('/oh-my-github.json')
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data);
});

