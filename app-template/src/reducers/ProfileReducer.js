import * as ActionTypes from '../actions/ActionTypes'

const initialProfileState = {
  user: {},
  _$meta: {},
  activities: [],
  repositories: [],
  languages: []
}

export default function profileReducer(state = initialProfileState, action) {
  const {type, payload, error} = action

  if (ActionTypes.FETCH_PROFILE !== type) return state

  if (error) return state

  return Object.assign({}, state, {
    user: payload.user,
    _$meta: payload._$meta,
    activities: payload.activities,
    repositories: payload.repositories,
    languages: payload.languages
  })
}
