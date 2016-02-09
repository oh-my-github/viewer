import React, { PropTypes, Component } from 'react'
import ReactTooltip from 'react-tooltip'

import styles from './index.css'

/** ref: http://cssdeck.com/labs/twitter-bootstrap-progress-bars */
class ProgressBar extends Component {
  render() {
    const { width, color, label, tooltipLabel} = this.props

    const tooltipId = `tooltipIdFor${label}`
    const tooltipElement = (tooltipLabel) ?
      <div>
        <ReactTooltip id={tooltipId} place='top' type='dark' effect='float'>
          {tooltipLabel}
        </ReactTooltip>
      </div> : null

    return (
      <div className={`${styles.progress}`}>
        <div className={`${styles.bar}`} style={{width, backgroundColor: color}}>
          <div data-tip data-for={tooltipId}>{label}</div>
          {tooltipElement}
        </div>
      </div>
    )
  }
}

export default ProgressBar

ProgressBar.propTypes = {
  width: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tooltipLabel: PropTypes.string
}
