import React, { PropTypes, Component, } from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import { MainColors, } from '../../theme'

const styles = {
  tabContainer: {
    backgroundColor: MainColors[0],
    padding: 0,
    margin: 0,
    border: 0,
    height: '50px', /** same as MainTab height */
    float: 'left',
    left: 0,
  },

  tabs: {
    width: 0,
    float: 'left',
  },

  inkBar: {
    backgroundColor: MainColors[0],
  },

  tab: {
    backgroundColor: MainColors[0],
    cursor: 'default',
    padding: 0,
    width: 0,
    margin: 0,
  },
}

class EmptyTabs extends Component {
  render() {
    return (
      <div className='col s0 m1 l2' style={styles.tabContainer}>
        <Tabs inkBarStyle={styles.inkBar} style={styles.tabs}>
          <Tab style={styles.tab} />
        </Tabs>
      </div>
    )
  }
}

export default EmptyTabs
