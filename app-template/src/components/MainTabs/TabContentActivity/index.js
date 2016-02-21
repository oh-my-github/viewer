import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import LazyLoad from 'react-lazy-load'

import moment from 'moment'

import TimeLine from '../../TimeLine'
import ActivityTile from './ActivityTile'
import ActivityBadge from './ActivityBadge'
import Filter from '../../Filter'

const styles = {
  title: {
    fontSize: 22,
    marginTop: 35,
    fontWeight: 200,
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

  constructor(props) {
    super(props)

    this.state = {
      activities: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    const { activities, } = nextProps

    /** recently occurred events first */
    const sorted = activities.slice().sort((act1, act2) => { /** latest */
      return moment(act2.created_at).valueOf() - moment(act1.created_at).valueOf()
    })

    this.setState({ activities: sorted, })
  }

  handleFilterChange(event) {
    const filterKeyword = event.target.value.trim().toLowerCase()
    const allActivities = this.props.activities

    const filtered = allActivities.filter(activity => {
      (activity.repo.toLowerCase().includes(filterKeyword)
        || activity.type.toLowerCase().includes(filterKeyword))
    })

    this.setState({ activities: filtered, })
  }

  renderTitle() {
    const { activities, } = this.state

    const titleText = (activities === void 0) ? 'No Activity' :
      (activities.length < 2) ? `${activities.length} Activity` :
        `${activities.length} Activities`


    return (
      <div style={styles.title}>{titleText}</div>
    )
  }

  render() {
    /**
     * since React doesn't support to passing an object as the ReactElement,
     * we should split TimeLine events to separated arrays (contents, badges)
     */
    const tiles = []
    const badges = []
    const { activities, } = this.state

    activities.map((activity, index) => {
      tiles.push(
        <LazyLoad offsetVertical={lazyLoadOffsetVertical}>
          <ActivityTile activity={activity} key={index} />
        </LazyLoad>
      )
      badges.push(
        <LazyLoad offsetVertical={lazyLoadOffsetVertical}>
          <ActivityBadge eventType={activity.type} key={index} />
        </LazyLoad>
      )
    })

    return (
      <div className='container' style={styles.container}>
        {this.renderTitle()}
        <Filter handler={this.handleFilterChange.bind(this)} floatingLabel='INSERT FILTER' />
        <TimeLine containerStyle={styles.timelineContainer} tiles={tiles} badges={badges} />
      </div>
    )
  }
}

TabContentActivity.propTypes = {
  activities: React.PropTypes.array.isRequired,
}
