import React, { PropTypes, Component, } from 'react'
import FlatButton from 'material-ui/lib/flat-button'
import FontIcon from 'material-ui/lib/font-icon'

import ActivityTabLabelIcon from 'material-ui/lib/svg-icons/action/question-answer'
import LanguageTabLabelIcon from 'material-ui/lib/svg-icons/action/code'
import RepositoryTabLabelIcon from 'material-ui/lib/svg-icons/social/poll'

import { MainColors, SAME, } from '../../theme'

const ICON_COLOR = '#F0F0F0'

const styles = {
  icon: {
  },

  iconContainer: {
    display: 'inline-block',
    paddingRight: 10,
    verticalAlign: 'center',
  },

  label: {
    display: 'inline-block',
    verticalAlign: 'center',
    fontWeight: 300,
  },
}

class MainTabLabel extends Component {
  render() {
    const { icon, label, } = this.props

    return (
      <div >
        <div style={styles.iconContainer}>{icon}</div>
        <span style={styles.label}>{label}</span>
      </div>
    )
  }
}

MainTabLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}


const LanguageIcon = (<LanguageTabLabelIcon style={styles.icon} color={ICON_COLOR} className='hide-on-small-only' />)
const RepositoryIcon = (<RepositoryTabLabelIcon style={styles.icon} color={ICON_COLOR} className='hide-on-small-only' />)
const ActivityIcon = (<ActivityTabLabelIcon styles={styles.icon} color={ICON_COLOR} className='hide-on-small-only' />)

export const LanguageTabLabel = () =>
  (<MainTabLabel icon={LanguageIcon} label='LANGUAGE' />)
export const RepositoryTabLabel = () =>
  (<MainTabLabel icon={RepositoryIcon} label='REPOSITORY' />)
export const ActivityTabLabel = () =>
  (<MainTabLabel icon={ActivityIcon} label='ACTIVITY' />)

