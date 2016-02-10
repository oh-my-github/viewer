import React, { PropTypes, Component, } from 'react'

import ProgressBar from '../../ProgressBar'
import { BarChartColors, } from '../../../theme'

import { styles, } from './index'

class SectionMostLovedLangs extends Component {
  constructor(props) {
    super(props)
  }

  renderProgressBars(langs) {
    let progressBars = []

    for (let i = 0; i < langs.length; i++) {
      const lang = langs[i]
      const percent = (lang.line / langs[0].line * 100) /** based on the largest */
      progressBars.push(<ProgressBar width={`${percent}%`} color={BarChartColors[i]}
                                     key={lang.name} label={lang.name} tooltipLabel={`${lang.line}  LINEs`} />)
    }

    /** if no languages provided: Use an empty progress bar */
    if (0 === progressBars.length) {
      let progressBar = (<ProgressBar key='no lang' width='100%'
                                     color={BarChartColors[0]} label='No Languages Provided' />)
      progressBars.push(progressBar)
    }

    return(<div> {progressBars} </div>)
  }

  render() {
    const { mostLovedLangs, } = this.props

    return (
      <div>
        <div className='col s12' style={styles.sectionTitle}>
          Most Loved Programming Languages
        </div>
        <div className='col s12 center' style={styles.containerProgressBar}>
          {this.renderProgressBars(mostLovedLangs)}
        </div>
      </div>
    )
  }
}

export default SectionMostLovedLangs

SectionMostLovedLangs.propTypes = {
  mostLovedLangs: PropTypes.array.isRequired,
}
