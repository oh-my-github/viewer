import React from 'react'
import Avatar from 'material-ui/lib/avatar'

//import PushEventIcon from 'material-ui/lib/svg-icons/file/cloud-upload'
import PushEventIcon from 'material-ui/lib/svg-icons/maps/layers'
import PullRequestEventIcon from 'material-ui/lib/svg-icons/image/exposure'
import IssuesEventIcon from 'material-ui/lib/svg-icons/communication/forum'
import IssueCommentEventIcon from 'material-ui/lib/svg-icons/communication/comment'
import WatchEventIcon from 'material-ui/lib/svg-icons/toggle/star'
import ForkEventIcon from 'material-ui/lib/svg-icons/social/share'
import ReleaseEventIcon from 'material-ui/lib/svg-icons/social/public'
import CreateEventIcon from 'material-ui/lib/svg-icons/image/control-point'
import DefaultIcon from 'material-ui/lib/svg-icons/navigation/close'

const BADGE_ICONS = {
  PushEvent: PushEventIcon,
  PUllRequestEvent: PushEventIcon,
  IssuesEvent: PushEventIcon,
  IssueCommentEvent: PushEventIcon,
  WatchEvent: PushEventIcon,
  ForkEvent: PushEventIcon,
  ReleaseEvent: PushEventIcon,
  CreateEvent: PushEventIcon,
}

import { ActivityTileColors, ActivityBadgeColors, } from '../../../theme'

const defaultBadgeColor = '#000000'

export default class ActivityBadge extends React.Component {
  static getColor(eventType) {
    let color = ActivityBadgeColors[eventType]

    color = color || defaultBadgeColor

    return color
  }

  static getIcon(eventType) {
    if (eventType === 'PushEvent')
      return <PushEventIcon />
    if (eventType === 'PullRequestEvent')
      return <PullRequestEventIcon />
    if (eventType === 'IssuesEvent')
      return <IssuesEventIcon />
    if (eventType === 'IssueCommentEvent')
      return <IssueCommentEventIcon />
    if (eventType === 'WatchEvent')
      return <WatchEventIcon />
    if (eventType === 'ForkEvent')
      return <ForkEventIcon />
    if (eventType === 'ReleaseEvent')
      return <ReleaseEventIcon />
    if (eventType === 'CreateEvent')
      return <CreateEventIcon />
  }

  render() {
    const { eventType, } = this.props
    const icon = ActivityBadge.getIcon(eventType)
    const color = ActivityBadge.getColor(eventType)

    return (
      <Avatar icon={icon} backgroundColor={color}/>
    )
  }
}

ActivityBadge.propTypes = {
  eventType: React.PropTypes.string.isRequired,
}
