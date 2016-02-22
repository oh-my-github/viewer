import React from 'react'
import ReactTooltip from 'react-tooltip'

import styles from './index.css'

/** ref: http://cssdeck.com/labs/twitter-bootstrap-progress-bars */
class ProgressBar extends React.Component {
  render() {
    const { width, color, label, animated, tooltipLabel, } = this.props

    const animationStyle = (animated) ? styles.animated : ''

    const tooltipId = `tooltipIdFor${label}`
    const tooltipElement = (tooltipLabel) ?
      <div>
        <ReactTooltip id={tooltipId} place='top' type='dark' effect='float'>
          {tooltipLabel}
        </ReactTooltip>
      </div> : null

    return (
      <div className={`${styles.progress}`}>
        <div className={`${styles.bar} ${animationStyle}`} style={{width, backgroundColor: color,}}>
          <div data-tip data-for={tooltipId}>{label}</div>
          {tooltipElement}
        </div>
      </div>
    )
  }
}

export default ProgressBar

ProgressBar.propTypes = {
  width: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  animated: React.PropTypes.bool,
  tooltipLabel: React.PropTypes.string,
}
