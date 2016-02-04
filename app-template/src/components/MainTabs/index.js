import React, { PropTypes, Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';

import EmptyTabs from "./EmptyTabs";
import MainTabLabel from "./MainTabLabel";
import TabContentLanguage from "./TabContentLanguage";
import TabContentRepository from "./TabContentRepository";
import TabContentContrib from "./TabContentContrib";

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
  },

  centerTab: {
    textDecoration: "none",
    paddingBottom: 0
  }
};

const LanguageTabLabel = () => (<MainTabLabel icon="fa fa-code fa-fw" label="LANGUAGE" />);
const RepositoryTabLabel = () => (<MainTabLabel icon="fa fa-folder-open-o fa-fw" label="REPOSITORY" />);
const ContribTabLabel = () => (<MainTabLabel icon="fa fa-bar-chart fa-fw" label="CONTRIB" />);

class MainTabs extends Component {

  render() {
    return (
      <div className="row">
        <EmptyTabs />
        <div className="col s12 m10 l6" style={styles.centerTabsContainer}>
          <Tabs>
            <Tab style={styles.centerTab}
                 label={<LanguageTabLabel />}>
              <TabContentLanguage />
            </Tab>
            <Tab style={styles.centerTab}
                 label={<RepositoryTabLabel />}>
              <TabContentRepository />
            </Tab>
            <Tab style={styles.centerTab}
                 label={<ContribTabLabel />}>
              <TabContentContrib />
            </Tab>
          </Tabs>
        </div>
        <EmptyTabs />
      </div>
    );
  }
}

export default MainTabs;
