import React, { PropTypes, Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

const styles = {
  emptyTabContainer: {
    padding: 0,
    margin: 0,
    border: 0,
    minHeight: "0 px",
    left: 0
  },

  emptyTab: {
    width: 0,
    float: "left"
  }
};

class EmptyTabs extends Component {
  render() {
    return (
      <div className="col s0 m2 l3 cyan" style={styles.emptyTabContainer}>
        <Tabs style={styles.emptyTab}>
          <Tab label=""> <div> </div> </Tab>
          <Tab label=""> <div> </div> </Tab>
        </Tabs>
      </div>
    );
  }
}

export default EmptyTabs;
