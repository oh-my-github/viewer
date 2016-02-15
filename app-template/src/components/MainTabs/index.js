import React, { PropTypes, Component, } from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import FlatButton from 'material-ui/lib/flat-button'
import FontIcon from 'material-ui/lib/font-icon'

import { MainColors, } from '../../theme'
import EmptyTabs from './EmptyTabs'
import { LanguageTabLabel, RepositoryTabLabel, ActivityTabLabel, } from './MainTabLabel'
import TabContentLanguage from './TabContentLanguage'
import TabContentRepository from './TabContentRepository'
import TabContentActivity from './TabContentActivity'

const TAB_HEIGHT = '50px'
const TAB_COLOR = MainColors[2]

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
  },
}


class MainTabs extends Component {
  render() {
    const { languages, repositories, activities, } = this.props

    return (
      <div className='row'>
        <EmptyTabs tabHeight={TAB_HEIGHT} tabColor={TAB_COLOR} />
        <div className='col s12 m10 l8' style={styles.tabContainer}>
          <Tabs>
            <Tab style={styles.tab} label={<ActivityTabLabel />}>
              <TabContentActivity activities={activities} />
            </Tab>
            <Tab style={styles.tab} label={<LanguageTabLabel />}>
              <TabContentLanguage languages={languages} />
            </Tab>
            <Tab style={styles.tab} label={<RepositoryTabLabel />}>
              <TabContentRepository languages={languages} repositories={repositories} />
            </Tab>
          </Tabs>
        </div>
        <EmptyTabs tabHeight={TAB_HEIGHT} tabColor={TAB_COLOR} />
      </div>
    )
  }
}

export default MainTabs

MainTabs.propTypes = {
  languages: PropTypes.array.isRequired,
  repositories: PropTypes.array.isRequired,
  activities: PropTypes.array.isRequired,
}
