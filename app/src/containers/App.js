// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React from 'react'
import { bindActionCreators, } from 'redux'
import { connect, } from 'react-redux'

import * as ActionCreators from '../actions/ActionCreators'
import Header from '../components/Header'
import MainTabs from '../components/MainTabs'
import Footer from '../components/Footer'

import css from './index.css' /** for sticky footer */

class App extends React.Component {
  constructor(props) {
    super(props)

    this.props.actions.fetchProfile()
  }

  render() {
    const { profile, actions, } = this.props
    const { user, languages, repositories, activities, _$meta, } = profile

    return (
      <div className={css.container}>
        <div className={css.content}>
          <Header user={user} repositories={repositories} />
          <MainTabs
                    actions={actions}
                    languages={languages}
                    repositories={repositories}
                    activities={activities} />
        </div>
        <Footer user={user} meta={_$meta} />
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
  actions: React.PropTypes.object.isRequired,
  profile: React.PropTypes.object.isRequired,
}
