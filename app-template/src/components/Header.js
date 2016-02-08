import React, {PropTypes, Component } from 'react';

import AppBar from 'material-ui/lib/app-bar';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';

const styles = {
  title: {
    fontSize: 23,
    fontWeight: 300
  }
};

class Header extends Component {
  render() {
    const { user } = this.props;
    const login = user.login;

    return (
      <AppBar
        className=""
        title="Github Profile"
        titleStyle={styles.title}
        iconElementLeft={
          <IconButton tooltip={`https://github.com/${login}`}
                      touch tooltipPosition="bottom-right"
                      target="_blank"
                      href={`https://github.com/${login}`}
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
