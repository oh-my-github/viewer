import React, { PropTypes, Component, } from 'react'
import FontIcon from 'material-ui/lib/font-icon'

import ActivityTabLabelIcon from 'material-ui/lib/svg-icons/action/question-answer'
import LanguageTabLabelIcon from 'material-ui/lib/svg-icons/action/code'
import RepositoryTabLabelIcon from 'material-ui/lib/svg-icons/social/poll'

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
    fontWeight: 500,
    paddingLeft: 10,
    marginRight: 15,
  },
}

export default class MainTabLabel extends Component {
  static createIcon(label, isActive) {
    const iconStyle = Object.assign({}, styles.icon, {
      fill: (isActive) ? TabColors.ICON_ACTIVE: TabColors.ICON_DEFAULT,
    })

    const icon =
      (label === 'LANGUAGE') ?  (<LanguageTabLabelIcon style={iconStyle} />) :
        (label === 'ACTIVITY') ? (<ActivityTabLabelIcon style={iconStyle} />) :
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

