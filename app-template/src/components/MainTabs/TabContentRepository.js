import React, { PropTypes, Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

class TabContentRepository extends Component {
  render() {
    return (
      <div className="container">
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    );
  }
}

export default TabContentRepository;
