// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, { PropTypes, } from 'react'
import { bindActionCreators, } from 'redux'
import { connect, } from 'react-redux'

import * as ActionCreators from '../actions/ActionCreators'
import UserInfoBox from '../components/UserInfoBox'
import Header from '../components/Header'
import MainTabs from '../components/MainTabs'
import Footer from '../components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.props.actions.fetchProfile()
  }

  render() {
    const { profile, actions, } = this.props
    const { languages, repositories, activities, } = profile

    return (
      <div>
        <Header user={profile.user} />
        <UserInfoBox user={profile.user} repositories={profile.repositories} />
        <MainTabs actions={actions} languages={languages} repositories={repositories} activities={activities}
          />
        <Footer user={profile.user} meta={profile._$meta} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

App.propTypes = {
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}
