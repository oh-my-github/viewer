import React from 'react'
import { t, propTypes, } from 'tcomb-react'

const styles = {

}

import css from './index.css'

export default class TimeLine extends React.Component {

  createTimeLineEvent(tile, badge, index) {
    return (
      <div className={css['timeline-event']} key={index}>
        <div className={css['timeline-content']}>
          {tile}
        </div>
        <div className={css['timeline-badge']}>
          {badge}
        </div>
      </div>
    )
  }

  renderTest() {
    const events = []

    events.push(
      <div className={css['timeline-event']}>
        <div className={css['timeline-content']}>
          <div className='card-image waves-effect waves-block waves-light'>
          </div>
          <div className='card-reveal'>
            <span className='card-title grey-text text-darken-4'>Card Title</span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
        <div className={css['timeline-badge']}><i className='material-icons'>language</i></div>
      </div>
    )

    events.push(
      <div className={css['timeline-event']}>
        <div className={css['timeline-content']}>
          <div className='card-image waves-effect waves-block waves-light'>
          </div>
          <div className='card-reveal'>
            <span className='card-title grey-text text-darken-4'>Card Title</span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
        <div className={css['timeline-badge']}><i className='material-icons'>language</i></div>
      </div>
    )

    return events
  }

  render() {
    const { tiles, badges, containerStyle, } = this.props

    const timelineEvents = tiles.map((tile, index) => {
      return this.createTimeLineEvent(tile, badges[0], index)
    })

    return (
      <div style={containerStyle}>
        <div className={css.timeline}>

          {timelineEvents}
        </div>
      </div>
    )
  }
}

TimeLine.propTypes = propTypes({
  containerStyle: t.Object,
  tiles: t.Array,
  badges: t.Array,
})
