import React, { PropTypes, Component, } from 'react'

import RandomColor from 'randomcolor'

import ProgressBar from '../../ProgressBar'
import Filter from '../../Filter'
import { styles, } from './index'

class SectionOtherLangs extends Component {
  constructor(props) {
    super(props)

    this.state = { filterKeyword: '', progressBarColors: [], }
  }

  componentWillReceiveProps(nextProps) {
    const { otherLangs, } = nextProps

    if (otherLangs.length > 0) {
      const colors = RandomColor({luminosity: 'light', hue: 'purple', count: otherLangs.length, }).sort().reverse()
      this.setState({progressBarColors: colors,})
    }
  }

  handleFilterChange(event) {
    this.setState({filterKeyword: event.target.value.trim(),})
  }

  renderTitle(langs) {
    return (
      <div> {(langs.length > 0) ? `Other ${langs.length} Languages` : null} </div>
    )
  }

  renderFilter(langs) {
    if (langs.length > 0) {
      return (
        <Filter handler={this.handleFilterChange.bind(this)} floatingLabel='INSERT LANGUAGE' />
      )
    }
  }

  renderProgressBars(langs) {
    const { filterKeyword, progressBarColors, } = this.state

    let progressBars = []

    for (let i = 0; i < langs.length; i++) {
      const lang = langs[i]
      const progressBar = (<ProgressBar width='100%' color={progressBarColors[i]}
                                       key={lang.name} label={lang.name}
                                       tooltipLabel={`${lang.label} lines`} />)

      if ('' === filterKeyword) { /** if no filter provided, put all progress bars */
        progressBars.push(progressBar)
        continue
      }

      if (lang.name.toLowerCase().startsWith(filterKeyword.trim().toLowerCase())) {
        progressBars.push(progressBar)
      }
    }

    return (<div>{progressBars}</div>)
  }

  render() {
    const { otherLangs, } = this.props

    return (
      <div>
        <div className='col s12' style={styles.sectionRepo}>
          {this.renderTitle(otherLangs)}
        </div>
        <div className='col s12' >
          {this.renderFilter(otherLangs)}
        </div>
        <div className='col s12 center' style={styles.containerProgressBar}>
          {this.renderProgressBars(otherLangs)}
        </div>
      </div>
    )
  }
}

export default SectionOtherLangs

SectionOtherLangs.propTypes = {
  otherLangs: PropTypes.array.isRequired,
}
