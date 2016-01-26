// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserInfoBox from '../components/UserInfoBox';
import Header from "../components/Header";
import * as ActionCreators from '../actions/ActionCreators';

class App extends React.Component {
  render() {

    return (
      <div>
        <Header />
        <UserInfoBox />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  profileAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    profileAppState: state.profileAppState
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
