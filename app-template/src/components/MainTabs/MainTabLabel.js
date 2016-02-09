import React, { PropTypes, Component, } from 'react'
import FlatButton from 'material-ui/lib/flat-button'
import FontIcon from 'material-ui/lib/font-icon'

import { MainColors, SAME, } from '../../theme'

const styles = {
  flatButton: {
    color: MainColors[3],
  },

  flatButtonLabel: {
    fontSize: '14px',
    fontWeight: 300,
  },

  flatButtonIcon: {
    color: 'rgb(245, 245, 245)',
    fontSize: '19px',
    fontWeight: 300,
    verticalAlign: 'middle',
  },

  color: {
    SAME: SAME,
  },
}

/**
 * since react component doesn't support nested style overriding,
 * we should extract FlatButtonIcon as a single component
 */
class FlatButtonIcon extends Component {
  render() {
    const { icon, } = this.props

    return (
      <FontIcon style={styles.flatButtonIcon} className={icon} />
    )
  }
}

class MainTabLabel extends Component {
  render() {
    const { icon, label, } = this.props

    return (
      <FlatButton
        style={styles.flatButton}
        rippleColor={styles.color.SAME}
        hoverColor={styles.color.SAME}
        labelStyle={styles.flatButtonLabel}
        label={label}
        default
        linkButton
        href='#'
        icon={<FlatButtonIcon icon={icon} />}
        />
    )
  }
}

export default MainTabLabel

FlatButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
}

MainTabLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

