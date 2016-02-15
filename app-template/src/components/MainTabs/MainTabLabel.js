import React, { PropTypes, Component, } from 'react'
import FontIcon from 'material-ui/lib/font-icon'

import ActivityTabLabelIcon from 'material-ui/lib/svg-icons/action/question-answer'
import LanguageTabLabelIcon from 'material-ui/lib/svg-icons/action/code'
import RepositoryTabLabelIcon from 'material-ui/lib/svg-icons/social/poll'

import { MainColors, SAME, } from '../../theme'

const ICON_COLOR = '#F0F0F0'

const styles = {
  icon: {
    verticalAlign: 'middle',
  },

  label: {
    fontWeight: 300,
    paddingLeft: 10,
  },
}

class MainTabLabel extends Component {
  render() {
    const { icon, label, } = this.props

    return (
      <div>
        {icon}<span className='hide-on-small-only' style={styles.label}>{label}</span>
      </div>
    )
  }
}

MainTabLabel.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}


const LanguageIcon = (<LanguageTabLabelIcon style={styles.icon} color={ICON_COLOR} />)
const RepositoryIcon = (<RepositoryTabLabelIcon style={styles.icon} color={ICON_COLOR} />)
const ActivityIcon = (<ActivityTabLabelIcon style={styles.icon} color={ICON_COLOR} />)

export const LanguageTabLabel = () =>
  (<MainTabLabel icon={LanguageIcon} label='LANGUAGE' />)
export const RepositoryTabLabel = () =>
  (<MainTabLabel icon={RepositoryIcon} label='REPOSITORY' />)
export const ActivityTabLabel = () =>
  (<MainTabLabel icon={ActivityIcon} label='ACTIVITY' />)

