import React, { PropTypes, Component, } from 'react'
import Paper from 'material-ui/lib/paper'

import { MainColors, } from '../../../theme'

const CONST_TILE_HEIGHT = 200

const styles = {
  paperContainer: {
    padding: 15,
  },

  paper: {
    height: CONST_TILE_HEIGHT,
    backgroundColor: MainColors[3],
  },

  sectionTitle: {
    height: 140,
    borderBottom: '1px solid rgba(0,0,0,0.1)',
},

  sectionStat: {
    padding: 5,
  },

  columnStatCount: {
    fontSize: 20,
    fontWeight: 400,
    paddingTop: 2,
  },

  columnStatDesc: {
    fontSize: 10,
    fontWeight: 300,
    paddingTop: 0,
  },
}

class RepositoryTile extends Component {
  constructor(props) {
    super(props)
  }

  renderTitleSection(repository, color) {
    if (!repository || !color) return

    const style = Object.assign({}, styles.sectionTitle, {
      backgroundColor: '#F0F0F0',
    })

    return (<div style={style}>{repository.name}</div>)
  }

  renderStatSection(repository) {
    if (!repository) return

    const style = Object.assign({}, styles.sectionStat, {
      height: CONST_TILE_HEIGHT - styles.sectionTitle.height,
    })

    return (
      <div style={style}>
        <div className='col s4 center'>
          <div style={styles.columnStatCount}>{repository.watchers_count}</div>
          <div style={styles.columnStatDesc}>watchers</div>
        </div>
        <div className='col s4 center'>
          <div style={styles.columnStatCount}>{repository.stargazers_count}</div>
          <div style={styles.columnStatDesc}>stargazers</div>
        </div>
        <div className='col s4 center'>
          <div style={styles.columnStatCount}>{repository.forks_count}</div>
          <div style={styles.columnStatDesc}>forks</div>
        </div>
      </div>
    )
  }

  render() {
    const { repository, titleSectionColor, } = this.props

    return (
      <div className='col s12 m6 l6' style={styles.paperContainer}>
        <Paper rounded={false} zDepth={1} style={styles.paper}>
          {this.renderTitleSection(repository, titleSectionColor)}
          {this.renderStatSection(repository)}
        </Paper>
      </div>
    )
  }
}

export default RepositoryTile

RepositoryTile.propTypes = {
  repository: PropTypes.object.isRequired,
  titleSectionColor: PropTypes.string.isRequired,
}
