import moment from 'moment'

import * as ActionTypes from '../actions/ActionTypes'

const initialState = {
  user: {},
  _$meta: {},
  activities: [],
  repositories: [],
  languages: [],
}

export default function profileReducer(state = initialState, action) {
  const { type, payload, error, } = action

  if (ActionTypes.FETCH_PROFILE !== type) return state

  if (error) return state

  /** recently occurred events first */
  const sorted = payload.activities.slice().sort((act1, act2) => { /** latest */
    return moment(act2.created_at).valueOf() - moment(act1.created_at).valueOf()
  })

  /** filter out useless WatchEvents */
  const filteredActivities = sorted.filter(activity => (activity.type != 'WatchEvent'))

  return Object.assign({}, state, {
    user: payload.user,
    _$meta: payload._$meta,
    activities: filteredActivities,
    repositories: payload.repositories,
    languages: payload.languages,
  })
}
