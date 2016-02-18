import React, { PropTypes, Component, } from 'react'
import createFragment from 'react-addons-create-fragment'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import TimeLine from '../../TimeLine'
import ActivityTile from './ActivityTile'
import Filter from '../../Filter' // TODO convert autocomplete-filter

const styles = {
  title: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },

  container: {
    marginBottom: 25,
  },

  timelineContainer: {
    marginTop: 25,
  },
}

export default class TabContentActivity extends Component {

  handleFilterChange() {
    console.log(`TODO: handleFilterChange`)
  }

  createActivityTile(activity, index) {
    return (
      <ActivityTile activity={activity} key={index} />
    )
  }

  createActivityBadge(activity, index) {
    return (
      <div key={index}>{activity.type}</div>
    )
  }

  render() {

    const { activities, } = this.props

    /**
     * since React doesn't support an object as the ReactElement,
     * we should split TimeLine events to separated arrays (contents, badges)
     */
    const tiles = []
    const badges = []

    activities.map((activity, index) => {
      tiles.push(this.createActivityTile(activity, index))
      badges.push(this.createActivityBadge(activity, index))
    })

    return (
      <div className='container' style={styles.container}>
        <Filter handler={this.handleFilterChange.bind(this)} floatingLabel='INSERT FILTER' />
        <TimeLine containerStyle={styles.timelineContainer} tiles={tiles} badges={badges} />
      </div>
    )
  }
}

TabContentActivity.propTypes = {
  activities: PropTypes.array.isRequired,
}
