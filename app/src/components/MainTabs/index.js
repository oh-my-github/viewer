import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import FlatButton from 'material-ui/lib/flat-button'
import FontIcon from 'material-ui/lib/font-icon'

import { MainColors, TabColors, } from '../../theme'
import EmptyTabs from './EmptyTabs'
import MainTabLabel, { TabLabelText, } from './MainTabLabel'
import TabContentLanguage from './TabContentLanguage'
import TabContentRepository from './TabContentRepository'
import TabContentActivity from './TabContentActivity'
import TabContentContribution from './TabContentContribution'

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
  tabBg: {
    backgroundColor: TAB_COLOR,
  },
  tab: {
    backgroundColor: TAB_COLOR,
    height: TAB_HEIGHT,
    verticalAlign: 'baseline',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  },

  inkBar: {
    backgroundColor: TabColors.INK_BAR,
  },
}

const TAB_INDEX_LANGUAGE     = 0
const TAB_INDEX_REPOSITORY   = 1
const TAB_INDEX_CONTRIBUTION = 2
const TAB_INDEX_ACTIVITY     = 3

export default class MainTabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: TAB_INDEX_CONTRIBUTION,
    }
  }

  handleTabSelection(value) {
    if (Number.isInteger(value)) /** to avoid SyntheticEvent */
      this.setState({selectedTab: value, })
  }

  render() {
    const { user, languages, repositories, activities, } = this.props
    const { selectedTab, } = this.state

    const languageTabLabel =
      (<MainTabLabel label={TabLabelText.LANGUAGE} isActive={selectedTab === TAB_INDEX_LANGUAGE} />)
    const repositoryTabLabel =
      (<MainTabLabel label={TabLabelText.REPOSITORY} isActive={selectedTab === TAB_INDEX_REPOSITORY} />)
    const activityTabLabel =
      (<MainTabLabel label={TabLabelText.ACTIVITY} isActive={selectedTab === TAB_INDEX_ACTIVITY} />)
    const contributionTabLabel =
      (<MainTabLabel label={TabLabelText.CONTRIBUTION} isActive={selectedTab === TAB_INDEX_CONTRIBUTION} />)

    const emptyTab = (<EmptyTabs gridClass='col s0 m1 l2' tabHeight={TAB_HEIGHT} tabColor={TAB_COLOR} />)

    return (
      <main className='row'>
        {emptyTab}
        <div className='col s12 m10 l8' style={styles.tabContainer}>
          <Tabs onChange={this.handleTabSelection.bind(this)} inkBarStyle={styles.inkBar} tabItemContainerStyle={styles.tabBg}>
            <Tab value={TAB_INDEX_LANGUAGE} style={styles.tab} label={languageTabLabel}>
              <TabContentLanguage languages={languages} />
            </Tab>
            <Tab value={TAB_INDEX_REPOSITORY} style={styles.tab} label={repositoryTabLabel}>
              <TabContentRepository languages={languages} repositories={repositories} />
            </Tab>
            <Tab value={TAB_INDEX_CONTRIBUTION} style={styles.tab} label={contributionTabLabel}>
              <TabContentContribution activities={activities} user={user} />
            </Tab>
            <Tab value={TAB_INDEX_ACTIVITY} style={styles.tab} label={activityTabLabel}>
              <TabContentActivity activities={activities} />
            </Tab>
          </Tabs>
        </div>
        {emptyTab}
      </main>
    )
  }
}

MainTabs.propTypes = {
  user: React.PropTypes.object.isRequired,
  languages: React.PropTypes.array.isRequired,
  repositories: React.PropTypes.array.isRequired,
  activities: React.PropTypes.array.isRequired,
}
