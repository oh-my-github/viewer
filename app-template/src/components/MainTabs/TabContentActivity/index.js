import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import LazyLoad from 'react-lazy-load'

import TimeLine from '../../TimeLine'
import ActivityTile from './ActivityTile'
import ActivityBadge from './ActivityBadge'
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

const lazyLoadOffsetVertical = 1000

export default class TabContentActivity extends React.Component {

  handleFilterChange() {
    console.log(`TODO: handleFilterChange`)
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
      tiles.push(
        <LazyLoad offsetVertical={1500}>
          <ActivityTile activity={activity} key={index} />
        </LazyLoad>
      )
      badges.push(
        <LazyLoad offsetVertical={1500}>
          <ActivityBadge eventType={activity.type} key={index} />
        </LazyLoad>
      )
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
  activities: React.PropTypes.array.isRequired,
}
