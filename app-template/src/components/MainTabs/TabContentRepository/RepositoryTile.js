import React, { PropTypes, Component, } from 'react'
import Paper from 'material-ui/lib/paper'
import ListItem from 'material-ui/lib/lists/list-item'
import IconButton from 'material-ui/lib/icon-button'
import FontIcon from 'material-ui/lib/font-icon'

import ReactTooltip from 'react-tooltip'

import moment from 'moment'

import { MainColors, BatteryColors, SameColor, } from '../../../theme'

const HEIGHT_TILE = 225
const HEIGHT_SECTION_REPO = 130
const HEIGHT_SECTION_REPO_NAME = 70
const HEIGHT_SECTION_REPO_DESC = HEIGHT_SECTION_REPO -HEIGHT_SECTION_REPO_NAME
const HEIGHT_SECTION_LANG = 35
const HEIGHT_SECTION_STAT = HEIGHT_TILE - HEIGHT_SECTION_REPO - HEIGHT_SECTION_LANG
const MAX_DESCRIPTION_TEXT_LENGTH = 85

const BATTERY_ICON_TYPES = [
  'fa-battery-0',
  'fa-battery-1',
  'fa-battery-2',
  'fa-battery-3',
  'fa-battery-4',
]

const styles = {
  paperContainer: {
    padding: 15,
  },

  paper: {
    height: HEIGHT_TILE,
    backgroundColor: MainColors[3],
  },

  sectionLang: {
    height: HEIGHT_SECTION_LANG,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },

  sectionLangText: {
    padding: '8px 0 7px 14px',
    textShadow: '2px 2px 1px rgba(0, 0, 0, 0.1)',
    fontSize: 13,
    fontFamily: 'Ubuntu, sans-serif',
    fontWeight: 500,
    color: MainColors[4],
  },

  sectionRepo: {
    height: HEIGHT_SECTION_REPO,
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    backgroundColor: MainColors[4],
  },

  sectionRepoName: {
    fontSize: 15,
    fontWeight: 300,
    height: HEIGHT_SECTION_REPO_NAME,
  },

  sectionRepoDesc: {
    height: HEIGHT_SECTION_REPO_DESC,
  },

  sectionRepoDescLeftColumn: {
    fontSize: 11,
    fontFamily: 'Ubuntu, sans-serif',
    fontWeight: 200,
    paddingRight: 0,
  },

  sectionRepoDescRightColumn: {

  },

  sectionStat: {
    height: HEIGHT_SECTION_STAT,
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

  render() {
    const { repository, languageColor, } = this.props

    return (
      <div className='col s12 m6 l6' style={styles.paperContainer}>
        <Paper rounded={false} zDepth={1} style={styles.paper}>
          {this.renderLangSection(repository, languageColor)}
          {this.renderRepoSection(repository)}
          {this.renderStatSection(repository)}
        </Paper>
      </div>
    )
  }

  renderLangSection(repository, color) {
    const style = Object.assign({}, styles.sectionLang, {
      backgroundColor: color,
    })

    return (
      <div style={style}>
        <div style={styles.sectionLangText}>
          {repository.language || 'None'}
        </div>
      </div>
    )
  }

  renderRepoSectionBattery(repository) {
    const now = moment(new Date())
    const createdAt = moment(repository.created_at)
    const updatedAt = moment(repository.updated_at)
    const sinceCreatedAt = moment.duration(now.diff(createdAt))
    const sinceUpdatedAt = moment.duration(now.diff(updatedAt))

    const daysAfterCreatedAt = Math.floor(sinceCreatedAt.asDays())
    const daysAfterUpdatedAt = Math.floor(sinceUpdatedAt.asDays())

    const batteryIconTypeIndex =
      (daysAfterUpdatedAt <= 15) ? 4 :
        (daysAfterUpdatedAt <= 45) ? 3 :
          (daysAfterUpdatedAt <= 90) ? 2 :
            (daysAfterUpdatedAt <= 180) ? 1 : 0

    return (
      <IconButton
        iconStyle={{color: BatteryColors[batteryIconTypeIndex], fontSize: 12,}}
                  style={{paddingLeft: 7, paddingTop: '1.5px', cursor: 'default', }}
                  linkButton>
        <FontIcon className={`fa ${BATTERY_ICON_TYPES[batteryIconTypeIndex]}`} />
      </IconButton>
    )
  }

  renderRepoSection(repository) {

    const secondaryText = (
      <div style={{fontSize: 12,}}>
        <div style={{float: 'left',}}>{moment(repository.updated_at).format('MMM DD, YYYY')}</div>
        <div>{this.renderRepoSectionBattery(repository)}</div>
      </div>
    )

    const leftAvatar = (
      <IconButton href={`https://github.com/${repository.full_name}`}
                  target='_blank'
                  iconStyle={{color: MainColors[5], fontSize: 35, paddingLeft: 3,}}
                  style={{paddingLeft: 7, paddingTop: 4,}}
                  linkButton>
        <FontIcon className='fa fa-github' />
      </IconButton>
    )

    const descriptionText = (repository.description === void 0 || repository.description === '') ?
      'No Description' : (repository.description.length >= MAX_DESCRIPTION_TEXT_LENGTH) ?
      repository.description.slice(0, MAX_DESCRIPTION_TEXT_LENGTH) + '...' : repository.description

    return (
      <div style={styles.sectionRepo}>
        <ListItem
          leftAvatar={leftAvatar}
          primaryText={repository.name}
          secondaryText={secondaryText}
          disabled
          style={styles.sectionRepoName}
          />
        <div style={styles.sectionRepoDesc}>
          <div className='col s12' style={styles.sectionRepoDescLeftColumn}>
            {descriptionText}
          </div>
        </div>
      </div>
    )
  }

  renderStatSection(repository) {
    if (!repository) return

    return (
      <div style={styles.sectionStat}>
        <div className='col s4 center'>
          <div style={styles.columnStatCount}>{repository.open_issues_count}</div>
          <div style={styles.columnStatDesc}>issues</div>
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
}

export default RepositoryTile

RepositoryTile.propTypes = {
  repository: PropTypes.object.isRequired,
  languageColor: PropTypes.string.isRequired,
}
