import React, { PropTypes, Component, } from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import TimeLine from '../../TimeLine'

const styles = {
  title: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
}

export default class TabContentActivity extends Component {
  render() {

    const { activities, } = this.props

    console.log(activities)

    return (
      <div className='container'>
        <TimeLine />
      </div>
    )
  }
}

TabContentActivity.propTypes = {
  activities: PropTypes.array.isRequired,
}
