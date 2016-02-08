import React, { PropTypes, Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

import ProgressBar from '../ProgressBar';

const barChartColors = {
  colors: function(idx){
    return [
      "#E3EACF",
      "#ADD8C7",
      "#8CCCBE",
      "#7AC1C4",
      "#70AFC4"
    ][idx];
  }
};

class TabContentLanguage extends Component {
  render() {

    const { languages } = this.props;

    console.log(languages);

    return (
      <div className="container">
        <div className="col s12 center">
          <ProgressBar width="60%" color="#E3EACF" />
          <ProgressBar width="60%" color="#ADD8C7" />
          <ProgressBar width="60%" color="#8CCCBE" />
          <ProgressBar width="60%" color="#7AC1C4" />
          <ProgressBar width="60%" color="#70AFC4" />
        </div>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    );
  }
}

export default TabContentLanguage;

TabContentLanguage.propTypes = {
  languages: PropTypes.array.isRequired
};
