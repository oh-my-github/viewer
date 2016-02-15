import React, { PropTypes, Component, } from 'react'
import FontIcon from 'material-ui/lib/font-icon'

import SvgIconActionGrade from 'material-ui/lib/svg-icons/action/grade'
import SvgIconSocialShare from 'material-ui/lib/svg-icons/social/share'

import { MainColors, SAME, HeaderColors, } from '../../theme'

const styles = {
  icon: {
    verticalAlign: 'bottom',
  },

  label: {
    fontWeight: 400,
    paddingLeft: 8,
  },

  container: {
    float: 'left',
    paddingTop: 6,
  },
}

class StatIconLabel extends Component {
  render() {
    const { icon, label, style } = this.props

    const containerStyle = Object.assign({}, styles.container, style)

    return (
      <div style={containerStyle}>
        {icon}<span style={styles.label}>{label}</span>
      </div>
    )
  }
}

StatIconLabel.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.number.isRequired,
  style: PropTypes.object,
}
const StatIconStar = (<SvgIconActionGrade style={styles.icon} color={HeaderColors.star} />)
const StatIconFork = (<SvgIconSocialShare style={styles.icon} color={HeaderColors.fork} />)

export const StatLabelStarFactory = (label) => {
  return (<StatIconLabel style={{marginRight: 14,}} icon={StatIconStar} label={label} />)
}

export const StatLabelForkFactory = (label) => {
  return (<StatIconLabel style={{marginRight: 3,}} icon={StatIconFork} label={label} />)
}
