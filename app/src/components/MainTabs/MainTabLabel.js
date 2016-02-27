import React, { PropTypes, Component, } from 'react'
import FontIcon from 'material-ui/lib/font-icon'

import ContributionTabLabelIcon from 'material-ui/lib/svg-icons/action/code'
import LanguageTabLabelIcon from 'material-ui/lib/svg-icons/action/donut-large'
import RepositoryTabLabelIcon from 'material-ui/lib/svg-icons/av/equalizer'
import ActivityTabLabelIcon from 'material-ui/lib/svg-icons/action/question-answer'

import { MainColors, SAME, TabColors, } from '../../theme'

const styles = {
  container: {
    paddingTop: 3,
  },

  icon: {
    verticalAlign: 'middle',
    paddingBottom: 3,
  },

  label: {
    fontWeight: 300,
    paddingLeft: 10,
    marginRight: 15,
  },
}

export const TabLabelText = {
  CONTRIBUTION: 'CONTRIB',
  LANGUAGE: 'LANGUAGE',
  REPOSITORY: 'REPOSITORY',
  ACTIVITY: 'ACTIVITY',
}

export default class MainTabLabel extends Component {
  static createIcon(label, isActive) {
    const iconStyle = Object.assign({}, styles.icon, {
      fill: (isActive) ? TabColors.ICON_ACTIVE: TabColors.ICON_DEFAULT,
    })

    const icon =
      (label === TabLabelText.CONTRIBUTION) ?  (<ContributionTabLabelIcon style={iconStyle} />) :
      (label === TabLabelText.LANGUAGE) ?  (<LanguageTabLabelIcon style={iconStyle} />) :
        (label === TabLabelText.ACTIVITY) ? (<ActivityTabLabelIcon style={iconStyle} />) :
          (<RepositoryTabLabelIcon style={iconStyle} />)

    return icon
  }

  render() {
    const { label, isActive, } = this.props
    const icon = MainTabLabel.createIcon(label, isActive)

    const labelStyle = Object.assign({}, styles.label, {
      color: (isActive) ? TabColors.LABEL_ACTIVE: TabColors.LABEL_DEFAULT,
    })

    return (
      <div style={styles.container}>
        {icon}<span className='hide-on-small-only' style={labelStyle}>{label}</span>
      </div>
    )
  }
}

MainTabLabel.propTypes = {
  label: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
}

