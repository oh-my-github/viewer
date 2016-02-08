import React, { PropTypes, Component } from 'react';

import styles from "./index.css";

const ProgressDivStyles = [styles.progress].join(" ");
const ProgressBarDivStyles = [styles.bar].join(" ");

/** ref: http://cssdeck.com/labs/twitter-bootstrap-progress-bars */
class ProgressBar extends Component {

  render() {
    const { width, color } = this.props;

    return (
      <div>
        <div className={ProgressDivStyles}>
          <div className={ProgressBarDivStyles} style={{width, backgroundColor: color}}>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;

ProgressBar.propTypes = {
  width: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
