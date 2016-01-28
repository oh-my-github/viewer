import React, { PropTypes, Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

class MainTab extends Component {

  render() {
    return (
      <div className="row">
        <Tabs>
          <Tab label="Language">
            <div>
              <h2 style={styles.headline}>Tab One</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
              <Slider name="slider0" defaultValue={0.5} />
            </div>
          </Tab>
          <Tab label="Repository" >
            <div>
              <h2 style={styles.headline}>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab
            label="Contribution">
            <div>
              <h2 style={styles.headline}>Tab Three</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
        </div>
    );
  }
}

export default MainTab;

