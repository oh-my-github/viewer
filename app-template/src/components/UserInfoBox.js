import React, {PropTypes, Component } from 'react';

import Paper from 'material-ui/lib/paper';

const styles = {
  avatarStyle: {
    height: 100,
    width: 100,
    margin: 10,
    //textAlign: 'center',
    //display: 'inline-block',
    borderRadius: '50%',
    boxShadow: '0 0 2px rgba(0, 0, 0, .9)'
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};

import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import ActionAndroid from 'material-ui/lib/svg-icons/action/android';

class UserInfoBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { user, repositories } = this.props;

    const repoStat = repositories.reduce((stat, repo) => {
      stat.starCount += repo.stargazers_count;
      stat.watchCount += repo.watchers_count;
      stat.forkCount += repo.forks_count;
      return stat;
    }, {watchCount: 0, starCount: 0, forkCount: 0});

    return (
      <div className="cyan lighten-5" style={{paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="container">
          <div className="row">
            <div className="col s12 m8 offset-m2 l6 offset-l3 center">
              <div className="row"> <img style={styles.avatarStyle} src={user.avatar_url} /> </div>
              <div className="row"> Github ID: {user.login} </div>
              <div className="row"> Email: {user.email} </div>
              <div className="row"> starCount: {repoStat.starCount} </div>
              <div className="row"> watchCount: {repoStat.watchCount} </div>
              <div className="row"> forkCount: {repoStat.forkCount} </div>
              <FlatButton label="Choose an Image"
                          icon={<ActionAndroid />}
                >
                <input type="file" style={styles.exampleImageInput} />
              </FlatButton>

              <FlatButton
                label="Label after"
                labelPosition="after"
                primary={true}
                style={styles.button}
                icon={<ActionAndroid />}
                />

              <FlatButton
                label="GitHub Link"
                linkButton={true}
                href="https://github.com/callemall/material-ui"
                secondary={true}
                icon={<FontIcon className="muidocs-icon-custom-github" />}
                />
              <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</a>
              <a className="cyan waves-effect waves-light btn"><i className="material-icons right">android</i>button</a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfoBox;

UserInfoBox.propTypes = {
  user: PropTypes.object.isRequired,
  repositories: PropTypes.array.isRequired
};

