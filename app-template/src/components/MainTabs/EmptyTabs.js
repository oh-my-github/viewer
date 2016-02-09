import React, { PropTypes, Component, } from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import { MainColors, } from '../../theme'

const styles = {
  emptyTabContainer: {
    backgroundColor: MainColors[0],
    padding: 0,
    margin: 0,
    border: 0,
    minHeight: '0 px',
    left: 0,
  },

  emptyTabs: {
    width: 0,
    float: 'left',
  },

  emptyTabsInkBar: {
    backgroundColor: MainColors[0],
    minHeight: '0px',
  },

  emptyTab: {
    color: MainColors[0],
    backgroundColor: MainColors[0],
    cursor: 'default',
  },
}

class EmptyTabs extends Component {
  render() {
    return (
      <div className='col s0 m1 l2' style={styles.emptyTabContainer}>
        <Tabs inkBarStyle={styles.emptyTabsInkBar} style={styles.emptyTabs}>
          <Tab style={styles.emptyTab} label='l' />
        </Tabs>
      </div>
    )
  }
}

export default EmptyTabs
