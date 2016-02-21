import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import FlatButton from 'material-ui/lib/flat-button'
import FontIcon from 'material-ui/lib/font-icon'

import { MainColors, TabColors, } from '../../theme'
import EmptyTabs from './EmptyTabs'
import MainTabLabel from './MainTabLabel'
import TabContentLanguage from './TabContentLanguage'
import TabContentRepository from './TabContentRepository'
import TabContentActivity from './TabContentActivity'

const TAB_HEIGHT = '60px'
const TAB_COLOR = TabColors.BACKGROUND

export const styles = {
  title: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tabContainer: {
    paddingLeft: 0,
    paddingRight: 0,
    border: 0,
  },

  tab: {
    backgroundColor: TAB_COLOR,
    height: TAB_HEIGHT,
    verticalAlign: 'baseline',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  },

  inkBar: {
    backgroundColor: TabColors.INK_BAR,
  }
}

class MainTabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      /** used to style the active tab label */
      selectedTab: 0,
    }
  }

  handleTabSelection(value) {
    if (Number.isInteger(value)) /** to avoid SyntheticEvent */
      this.setState({selectedTab: value, })
  }

  render() {
    const { languages, repositories, activities, } = this.props
    const { selectedTab } = this.state
    const activityTabIndex = 0
    const languageTabIndex = 1
    const repositoryTabIndex = 2

    const activityTabLabel = (<MainTabLabel label='ACTIVITY' isActive={selectedTab === activityTabIndex} />)
    const languageTabLabel = (<MainTabLabel label='LANGUAGE' isActive={selectedTab === languageTabIndex} />)
    const repositoryTabLabel = (<MainTabLabel label='REPOSITORY' isActive={selectedTab === repositoryTabIndex} />)

    const emptyTab = (<EmptyTabs gridClass='col s0 m1 l2' tabHeight={TAB_HEIGHT} tabColor={TAB_COLOR} />)

    return (
      <div className='row'>
        {emptyTab}
        <div className='col s12 m10 l8' style={styles.tabContainer}>
          <Tabs onChange={this.handleTabSelection.bind(this)} inkBarStyle={styles.inkBar}>
            <Tab value={activityTabIndex} style={styles.tab} label={activityTabLabel}>
              <TabContentActivity activities={activities} />
            </Tab>
            <Tab value={languageTabIndex} style={styles.tab} label={languageTabLabel}>
              <TabContentLanguage languages={languages} />
            </Tab>
            <Tab value={repositoryTabIndex} style={styles.tab} label={repositoryTabLabel}>
              <TabContentRepository languages={languages} repositories={repositories} />
            </Tab>
          </Tabs>
        </div>
        {emptyTab}
      </div>
    )
  }
}

export default MainTabs

MainTabs.propTypes = {
  languages: React.PropTypes.array.isRequired,
  repositories: React.PropTypes.array.isRequired,
  activities: React.PropTypes.array.isRequired,
}
