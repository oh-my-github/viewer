// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserInfoBox from '../components/UserInfoBox';
import Header from '../components/Header';
import MainTab from '../components/MainTab';
import * as ActionCreators from '../actions/ActionCreators';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.actions.fetchProfile();
  }

  render() {
    const { profile } = this.props;

    return (
      <div>
        <Header />
        <UserInfoBox user={profile.user} />
        <MainTab />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
