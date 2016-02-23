import React, { PropTypes, Component, } from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import { MainColors, } from '../../theme'

const EMPTY_TAB_COLOR = MainColors[2]

const styles = {
  tabContainer: {
    backgroundColor: EMPTY_TAB_COLOR,
    padding: 0,
    margin: 0,
    border: 0,
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    height: '50px', /** same as MainTab height */
    float: 'left',
    left: 0,
  },

  inkBar: {
    backgroundColor: EMPTY_TAB_COLOR,
  },

  tabs: {
    width: 0,
    float: 'left',
  },

  tab: {
    backgroundColor: EMPTY_TAB_COLOR,
    cursor: 'default',
    padding: 0,
    width: 0,
    margin: 0,
  },
}

export default class EmptyTabs extends Component {
  render() {
    const { tabHeight, tabColor, gridClass, } = this.props

    const tabContainerStyle = Object.assign({}, styles.tabContainer, { height: tabHeight, backgroundColor: tabColor, })
    const tabStyle = Object.assign({}, styles.tab, { backgroundColor: tabColor, })
    const inkBarStyle = Object.assign({}, styles.inkBar, { backgroundColor: tabColor, })

    return (
      <div className={gridClass} style={tabContainerStyle}>
        <Tabs inkBarStyle={inkBarStyle} style={styles.tabs}>
          <Tab style={tabStyle} />
        </Tabs>
      </div>
    )
  }
}
EmptyTabs.propTypes = {
  tabHeight: PropTypes.string.isRequired,
  tabColor: PropTypes.string.isRequired,
  gridClass: PropTypes.string.isRequired,
}

