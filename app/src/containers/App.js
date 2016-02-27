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
    const { actions, meta, user, languages, repositories, activities, } = this.props

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
        <Footer user={user} meta={meta} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { /** flatten profile */
    meta: state.profile.meta,
    user: state.profile.user,
    languages: state.profile.languages,
    repositories: state.profile.repositories,
    activities: state.profile.activities,
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
  meta: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
  languages: React.PropTypes.array.isRequired,
  repositories: React.PropTypes.array.isRequired,
  activities: React.PropTypes.array.isRequired,
}
