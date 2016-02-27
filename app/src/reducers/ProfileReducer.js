import * as ActionTypes from '../actions/ActionTypes'
import { sortRecentItemByDate, } from '../util'

const initialState = {
  user: {},
  meta: {},
  activities: [],
  repositories: [],
  languages: [],
}

export default function profileReducer(state = initialState, action = null) {
  const { type, payload, error, } = action

  if (ActionTypes.FETCH_PROFILE !== type) return state

  if (error) return state

  /** recently occurred events first */
  const sorted = payload.activities.slice().sort(sortRecentItemByDate)

  /** filter out useless WatchEvents */
  const filteredActivities = sorted.filter(activity => (activity.type != 'WatchEvent'))

  return Object.assign({}, state, {
    user: payload.user,
    meta: payload._$meta,
    activities: filteredActivities,
    repositories: payload.repositories,
    languages: payload.languages,
  })
}
