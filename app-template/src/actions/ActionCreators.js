import * as ActionTypes from './ActionTypes';

export function getProfile() {
  return {
    type: ActionTypes.FETCH_PROFILE_TRY
  }
}
