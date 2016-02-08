import React, { PropTypes, Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

const colorMaterialCyan = "#00bcd4";

const styles = {
  emptyTabContainer: {
    padding: 0,
    margin: 0,
    border: 0,
    minHeight: "0 px",
    left: 0
  },

  emptyTabs: {
    width: 0,
    float: "left"
  },

  emptyTabsInkBar: {
    backgroundColor: colorMaterialCyan,
    minHeight: "0px"
  },

  emptyTab: {
    color: colorMaterialCyan,
    backgroundColor: colorMaterialCyan,
    cursor: "default"
  }
};

class EmptyTabs extends Component {
  render() {
    return (
      <div className="col s0 m1 l2 cyan" style={styles.emptyTabContainer}>
        <Tabs inkBarStyle={styles.emptyTabsInkBar} style={styles.emptyTabs}>
          <Tab style={styles.emptyTab} label="l" />
        </Tabs>
      </div>
    );
  }
}

export default EmptyTabs;
