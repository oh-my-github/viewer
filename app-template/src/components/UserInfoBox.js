import React, {PropTypes, Component } from 'react';

import Paper from 'material-ui/lib/paper';
const avatarStyle = {
  height: 100,
  width: 100,
  margin: 10,
  //textAlign: 'center',
  //display: 'inline-block',
  borderRadius: '50%',
  boxShadow: '0 0 2px rgba(0, 0, 0, .9)'
};

class UserInfoBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { user } = this.props;
    return (
      <div className="cyan lighten-5" style={{paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="container">
          <div className="row">
            <div className="col s12 m8 offset-m2 l6 offset-l3">
              <div className="row">
                <img style={avatarStyle} src={user.avatar_url} />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default UserInfoBox;

UserInfoBox.propTypes = {
  user: PropTypes.object.isRequired
};

