import React, { PropTypes, Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import EmptyTabs from "./EmptyTabs";

import LanguageTabContent from "./LanguageTabContent";
import RepositoryTabContent from "./RepositoryTabContent";
import ContributionTabContent from "./ContributionTabContent";

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  centerTabsContainer: {
    padding: 0,
    border: 0
  }
};

class MainTabs extends Component {

  render() {
    return (
      <div className="row">
        <EmptyTabs />
        <div className="col s12 m8 l6" style={styles.centerTabsContainer}>
          <Tabs>
            <Tab label="Language">
              <LanguageTabContent />
            </Tab>
            <Tab label="Repository">
              <RepositoryTabContent />
            </Tab>
            <Tab label="Contribution">
              <ContributionTabContent />
            </Tab>
          </Tabs>
        </div>
        <EmptyTabs />
      </div>
    );
  }
}

export default MainTabs;
