import React, { PropTypes, Component } from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import ProgressBar from '../ProgressBar'
import { BarChartColors } from '../../theme'

class TabContentLanguage extends Component {
  render() {

    const { languages } = this.props
    const repoLangs = languages

    console.log(languages)

    return (
      <div className='container'>
        <div>
          asdasd
        </div>
        <div className='col s12 center'>
          <ProgressBar width='60%' color={BarChartColors[0]} />
          <ProgressBar width='60%' color={BarChartColors[1]} />
          <ProgressBar width='60%' color={BarChartColors[2]} />
          <ProgressBar width='60%' color={BarChartColors[3]} />
          <ProgressBar width='60%' color={BarChartColors[4]} />
        </div>
      </div>
    )
  }
}

export default TabContentLanguage

TabContentLanguage.propTypes = {
  languages: PropTypes.array.isRequired
}
