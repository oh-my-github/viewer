import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import LazyLoad from 'react-lazy-load'

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

const lazyLoadOffsetVertical = 3000

export default class TabContentActivity extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      /** used to filter*/
      filterKeyword: '',
    }
  }

  handleFilterChange(event) {
    const filterKeyword = event.target.value.trim().toLowerCase()
    this.setState({ filterKeyword: filterKeyword, })
  }

  renderTitle(activities) {
    const titleText = (activities === void 0) ? 'No Activity' :
      (activities.length < 2) ? `${activities.length} Activity` :
        `${activities.length} Activities`

    return (
      <div style={styles.title}>{titleText}</div>
    )
  }

  renderLazily(element, index) {
    if (index < 10) return element

    return (
      <LazyLoad offsetVertical={lazyLoadOffsetVertical}>
        {element}
      </LazyLoad>
    )
  }

  render() {
    /**
     * since React doesn't support to passing an object as the ReactElement,
     * we should split TimeLine events to separated arrays (contents, badges)
     */
    const { activities, } = this.props
    const { filterKeyword, } = this.state

    const filtered = activities.filter(activity => {
      return (activity.repo.toLowerCase().includes(filterKeyword)
      || activity.type.toLowerCase().includes(filterKeyword))
    })

    let tiles = []
    let badges = []

    filtered.map((activity, index) => {
      tiles.push(
        this.renderLazily(<ActivityTile activity={activity} key={index} />, index)
      )
      badges.push(
        this.renderLazily(<ActivityBadge eventType={activity.type} key={index} />, index)
      )
    })

    return (
      <div className='container' style={styles.container}>
        {this.renderTitle(filtered)}
        <Filter handler={this.handleFilterChange.bind(this)} floatingLabel='INSERT FILTER' />
        <TimeLine containerStyle={styles.timelineContainer} tiles={tiles} badges={badges} />
      </div>
    )
  }
}

TabContentActivity.propTypes = {
  activities: React.PropTypes.array.isRequired,
}
