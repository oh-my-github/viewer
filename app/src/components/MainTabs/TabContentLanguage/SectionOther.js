import React, { PropTypes, Component, } from 'react'

import RandomColor from 'randomcolor'

import ProgressBar from '../../ProgressBar'
import Filter from '../../Filter'
import { styles, } from './index'

class SectionOther extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filterKeyword: '',
      progressBarColors: [],
      colorByLanguage: {},
    }
  }

  componentWillReceiveProps(nextProps) {
    const { languages, } = nextProps

    const colors = RandomColor({
      luminosity: 'light', hue: 'purple', count: languages.length,
    }).sort().reverse()

    let colorByLanguage = {}
    colors.map((color, index) => {
      colorByLanguage[languages[index].name] = color
    })

    this.setState({colorByLanguage: colorByLanguage, })
  }

  handleFilterChange(filterKeyword) {
    this.setState({filterKeyword: filterKeyword.toLowerCase(),})
  }

  renderTitle(langs) {
    return (
      <div>{`Other ${langs.length} Languages`}</div>
    )
  }

  renderFilter() {
    return (
      <Filter handler={this.handleFilterChange.bind(this)} floatingLabel='INSERT LANGUAGE' />
    )
  }

  renderProgressBars(languages, colorByLanguage) {
    let progressBars = []

    languages.map((lang, index) => {
      const progressBar = (<ProgressBar width='100%' color={colorByLanguage[lang.name]}
                                        key={index} label={lang.name}
                                        tooltipLabel={`${lang.label} lines`} />)

      progressBars.push(progressBar)
    })

    return (<div>{progressBars}</div>)
  }

  render() {
    const { languages, } = this.props
    const { filterKeyword, colorByLanguage, } = this.state

    const filtered = languages.filter(lang => {
      return (lang.name.toLowerCase().includes(filterKeyword))
    })

    return (
      <div>
        <div className='col s12' style={styles.sectionRepo}>
          {this.renderTitle(filtered)}
        </div>
        <div className='col s12' >
          {this.renderFilter(filtered)}
        </div>
        <div className='col s12 center' style={styles.containerProgressBar}>
          {this.renderProgressBars(filtered, colorByLanguage)}
        </div>
      </div>
    )
  }
}

export default SectionOther

SectionOther.propTypes = {
  languages: PropTypes.array.isRequired,
}
