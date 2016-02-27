import moment from 'moment'

export function sortRecentItemByDate(item1Date, item2Date) {
  return moment(item2Date).valueOf() - moment(item1Date).valueOf()
}

export function sortOlderItemByDate(item1Date, item2Date) {
  return moment(item1Date).valueOf() - moment(item2Date).valueOf()
}
