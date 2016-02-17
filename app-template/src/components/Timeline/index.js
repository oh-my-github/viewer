import React, { PropTypes, Component, } from 'react'

const styles = {

}

import style from './index.css'

export default class TimeLine extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.timeline}>
          <div className={style['timeline-event']}>
            <div className={`card ${style['timeline-content']}`}>
              <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>Tile<i className='material-icons right'>more_vert</i></span>
                <p>Content <a href='#'>This is a link</a></p>
              </div>
              <div className='card-reveal'>
                <span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
            <div className={`${style['timeline-badge']} blue white-text`}><i className='material-icons'>language</i></div>
          </div>
          <div className={style['timeline-event']}>
            <div className={`${style['timeline-content']} card`}>
              <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>Tile<i className='material-icons right'>more_vert</i></span>
                <p>Content <a href='#'>This is a link</a></p>
              </div>
              <div className='card-reveal'>
                <span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
            <div className={`${style['timeline-badge']} red white-text`}><i className='material-icons'>work</i></div>
          </div>
          <div className={style['timeline-event']}>
            <div className={`${style['timeline-content']} card`}>
              <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>Tile<i className='material-icons right'>more_vert</i></span>
                <p>Content <a href='#'>This is a link</a></p>
              </div>
              <div className='card-reveal'>
                <span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
            <div className={`${style['timeline-badge']} green white-text`}><i className='material-icons'>person</i></div>
          </div>
        </div>
      </div>
    )
  }
}

