import React, {PropTypes, Component } from 'react';

import AppBar from 'material-ui/lib/app-bar';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 300,
    marginLeft: "0px"
  }
};

class Header extends Component {
  render() {
    const { user } = this.props;

    return (
      <AppBar
        className=""
        title="Github Profile"
        titleStyle={styles.title}
        iconElementRight={
          <IconButton tooltip="Go Github"
                      touch tooltipPosition="bottom-left"
                      href={"https://github.com/" + user.login}
                      linkButton>
            <FontIcon className="fa fa-github" />
          </IconButton>
          }
      />
    );
  }
}

export default Header;

Header.propTypes = {
  user: PropTypes.object.isRequired
};
