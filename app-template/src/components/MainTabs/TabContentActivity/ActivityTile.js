import React from 'react'
import Paper from 'material-ui/lib/paper'
import moment from 'moment'

import { ActivityBadgeColors, } from '../../../theme'

const BORDER_RADIUS = 2

const styles = {
  container: {
    boxShadow: '0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)',
    borderRadius: BORDER_RADIUS,
  },

  sectionEventType: {
    eventType: {
      borderTopLeftRadius: BORDER_RADIUS,
      borderTopRightRadius: BORDER_RADIUS,
      color: '#F0F0F0',
      padding: '8px 10px 8px 13px',
      fontSize: 15,
      fontWeight: 300,
    },

    fromNow: {
      marginTop: 5,
      float: 'right',
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 11,
      fontWeight: 300,
      withAgoText: false,
    },
  },

  sectionRepo: {
    padding: '5px 10px 5px 10px',
  },

  sectionPayload: {

  },
}

export default class ActivityTile extends React.Component {

  getColor(eventType) {

    const defaultColor = '#000000'
    let color = defaultColor

    if ('PushEvent' === eventType) color = ActivityBadgeColors.PUSH
    else if ('PullRequestEvent' === eventType) color = ActivityBadgeColors.PULL_REQUEST
    else if ('IssuesEvent' === eventType) color = ActivityBadgeColors.ISSUE
    else if ('IssueCommentEvent' === eventType) color = ActivityBadgeColors.ISSUE_COMMENT
    else if ('WatchEvent' === eventType) color = ActivityBadgeColors.WATCH
    else if ('ForkEvent' === eventType) color = ActivityBadgeColors.FORK
    else if ('ReleaseEvent' === eventType) color = ActivityBadgeColors.RELEASE
    else if ('CreateEvent' === eventType) color = ActivityBadgeColors.CREATE

    return color
  }

  renderEventType(eventType, createdAt) {

    const fromNow = moment(createdAt)
      .fromNow(styles.sectionEventType.fromNow.withAgoText)

    const styleEventType = Object.assign({}, styles.sectionEventType.eventType, {
      backgroundColor: this.getColor(eventType),
    })

    console.log(styleEventType.backgroundColor)

    return (
      <div style={styleEventType}>
        {eventType.replace('Event', '')}
        <span style={styles.sectionEventType.fromNow}>{fromNow}</span>
      </div>
    )
  }

  renderRepoName(fullRepoName) {

    return (
      <div style={styles.sectionRepo}>
        <a href={`https://github.com/${fullRepoName}`} target='_blank'>
          {fullRepoName}
        </a>
      </div>
    )
  }

  renderPayload(eventType, payload) {
    return (
      <div style={styles.sectionPayload}>payload</div>
    )
  }

  render() {
    const { activity, } = this.props
    const { created_at, repo, type, payload, } = activity

    return (
      <div style={styles.container}>
        {this.renderEventType(type, created_at)}
        {this.renderRepoName(repo)}
        {this.renderPayload(type, payload)}
      </div>
    )
  }
}

ActivityTile.propTypes = {
  activity: React.PropTypes.object.isRequired,
}
