import React from 'react'
import FontIcon from 'material-ui/lib/font-icon'
import FlatButton from 'material-ui/lib/flat-button'
import ListItem from 'material-ui/lib/lists/list-item'

import List from 'material-ui/lib/lists/list'
import Divider from 'material-ui/lib/divider'
import Checkbox from 'material-ui/lib/checkbox'
import Toggle from 'material-ui/lib/toggle'

import moment from 'moment'

import { ActivityTileColors, ActivityBadgeColors, } from '../../../theme'

const BORDER_RADIUS = 3

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
      marginTop: 3,
      float: 'right',
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 11,
      fontWeight: 300,
      withAgoText: false,
    },
  },

  sectionRepo: {
    container: {
    },

    labels: {
      fontSize: 14,
      fontWeight: 300,
    },

    icon: {
      paddingLeft: 12,
      fontSize: 28,
    },
  },

  sectionPayload: {
    container: {
    },

    itemLinkContent: {
      color: ActivityTileColors.linkItemText,
      cursor: 'pointer',
      padding: '4px 0px 6px 14px',
      fontSize: 14,
      fontWeight: 300,
    },

    itemContent: {
      padding: '4px 0px 6px 14px',
      cursor: 'default',
      fontSize: 14,
      fontWeight: 300,
    },
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

    return (
      <div style={styleEventType}>
        {eventType.replace('Event', '')}
        <span style={styles.sectionEventType.fromNow}>{fromNow}</span>
      </div>
    )
  }

  renderRepoName(fullRepoName) {

    const splited = fullRepoName.split('/')
    const owner = splited[0]
    const repo = splited[1]

    return (
      <div style={styles.sectionRepo.container}>
        <ListItem
          style={styles.sectionRepo.labels}
          leftIcon={<FontIcon style={styles.sectionRepo.icon} className='fa fa-github' />}
          primaryText={repo} secondaryText={owner}
          linkButton href={`htps://github.com/${fullRepoName}`} target='_blank'
          />
      </div>
    )
  }

  static createPayloadItem(items) {
    const payloadItems = []

    items.map((item, index) => {

      let listItem = null

      if (item.link) {
        listItem = (<ListItem innerDivStyle={styles.sectionPayload.itemLinkContent}
                              linkButton href={item.link} target='_blank'
                              key={index} primaryText={item.value} secondaryText={item.key} />)
      } else {
        listItem = (<ListItem disabled innerDivStyle={styles.sectionPayload.itemContent}
                              key={index} primaryText={item.value} secondaryText={item.key} />)
      }

      payloadItems.push(listItem)
    })

    return payloadItems
  }

  renderPayload(eventType, payload, repo) {

    let items = null

    switch (eventType) {
      case 'PushEvent':

        const abbrHead = payload.head.slice(0, 6)

        items = [
          {key: 'REF', value: payload.ref,},
          {key: 'COMMITS', value: payload.size,},
          {key: 'HEAD', value: abbrHead, link: `https://github.com/${repo}/commit/${payload.head}`,},
        ]
        break
      case 'PullRequestEvent':
        items = [
          {key: 'ACTION', value: payload.action,},
          {key: 'NUMBER', value: `#${payload.number}`, link: payload.pull_request_url,},
        ]
        break
      case 'IssuesEvent':
        items = [
          {key: 'ACTION', value: payload.action,},
          {key: 'NUMBER', value: `#${payload.issue_number}`, link: payload.issue_url,},
        ]
        break
      case 'IssueCommentEvent':
        items = [
          {key: 'ACTION', value: payload.action,},
          {key: 'NUMBER', value: `#${payload.issue_number}`, link: payload.comment_url,},
        ]
        break
      case 'WatchEvent':
        items = []
        break
      case 'ForkEvent':
        items = [
          {key: 'ACTION', value: payload.action,},
          {key: 'TARGET', value: payload.forkee_full_name, link: payload.forkee_url,},
          {key: 'LANGUAGE', value: payload.forkee_language,},
        ]
        break
      case 'ReleaseEvent':
        items = [
          {key: 'ACTION', value: payload.action,},
          {key: 'NAME', value: payload.release_name, link: payload.release_url,},
          {key: 'TAG', value: payload.release_tag_name,},
        ]
        break
      case 'CreateEvent':
        items = [
          {key: 'REF TYPE', value: payload.ref_type,},
          {key: 'MASTER BRANCH', value: payload.master_branch,},
        ]
        break
      default: break
    }

    const payloadItems = ActivityTile.createPayloadItem(items)

    if (payloadItems.length === 0) return

    return (
      <div style={styles.sectionPayload}>
        <Divider />
        <List subheader='Payload'>
          {payloadItems}
        </List>
      </div>
    )
  }

  render() {
    const { activity, } = this.props
    const { created_at, repo, type, payload, } = activity

    return (
      <div style={styles.container}>
        {this.renderEventType(type, created_at)}
        {this.renderRepoName(repo)}
        {this.renderPayload(type, payload, repo)}
      </div>
    )
  }
}

ActivityTile.propTypes = {
  activity: React.PropTypes.object.isRequired,
}
