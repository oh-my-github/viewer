import React, { PropTypes, Component } from 'react'
import FlatButton from 'material-ui/lib/flat-button'
import FontIcon from 'material-ui/lib/font-icon'

const materialGreyLighten4 = '#f5f5f5'

const styles = {
  flatButton: {
    color: materialGreyLighten4
  },

  flatButtonLabel: {
    fontSize: '13px',
    fontWeight: 500
  },

  flatButtonIcon: {
    color: 'rgb(245, 245, 245)',
    fontSize: '19px',
    verticalAlign: 'middle'
  },

  color: {
    SAME: 'rgba(0, 0, 0, 0)'
  }
}

/**
 * since react component doesn't support nested style overriding,
 * we should extract FlatButtonIcon as a single component
 */
class FlatButtonIcon extends Component {
  render() {
    const { icon } = this.props

    return (
      <FontIcon style={styles.flatButtonIcon} className={icon} />
    )
  }
}

class MainTabLabel extends Component {
  render() {
    const { icon, label } = this.props

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
  icon: PropTypes.string.isRequired
}

MainTabLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

