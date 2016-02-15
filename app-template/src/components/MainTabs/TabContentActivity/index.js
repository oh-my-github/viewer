import React, { PropTypes, Component, } from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';

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
        <h2 style={styles.title}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>

        <div className='row'>
          a
        </div>
        <div className='row'>
          b
        </div>
      </div>
    )
  }
}

TabContentActivity.propTypes = {
  activities: PropTypes.array.isRequired,
}
