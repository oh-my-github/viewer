import React from 'react'

import ProgressBar from '../../ProgressBar'
import { BarChartColors, } from '../../../theme'

import { styles, } from './index'

export default class SectionMostLovedLangs extends React.Component {
  constructor(props) {
    super(props)
  }

  renderProgressBars(langs) {
    let progressBars = []

    for (let i = 0; i < langs.length; i++) {
      const lang = langs[i]
      const percent = (lang.line / langs[0].line * 100) /** based on the largest */
      progressBars.push(<ProgressBar width={`${percent}%`} color={BarChartColors[i]}
                                     key={lang.name} label={lang.name} tooltipLabel={`${lang.label} lines`} />)
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
        <div className='col s12' style={styles.sectionRepo}>
          Most Loved Programming Languages
        </div>
        <div className='col s12 center' style={styles.containerProgressBar}>
          {this.renderProgressBars(mostLovedLangs)}
        </div>
      </div>
    )
  }
}

SectionMostLovedLangs.propTypes = {
  mostLovedLangs: React.PropTypes.array.isRequired,
}
