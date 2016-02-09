import React, {PropTypes, Component } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import FontIcon from 'material-ui/lib/font-icon'

import { MainColors } from '../theme'

const styles = {
  avatar: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: '25%',
    boxShadow: '0 0 2px rgba(0, 0, 0, .9)'
  },

  statButton: {
    backgroundColor: MainColors[2],
    margin: '5px'
  },

  loginId: {
    fontSize: 24,
    fontWeight: 200,
    fontFamily: 'Roboto',
    marginTop: 0,
    marginBottom: 0
  },

  userInfoBox: {
    backgroundColor: MainColors[1],
    padding: '60px 0 5px 0'
  }
}

class UserInfoBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { user, repositories } = this.props

    const repoStat = repositories.reduce((stat, repo) => {
      stat.starCount += repo.stargazers_count
      stat.watchCount += repo.watchers_count
      stat.forkCount += repo.forks_count
      return stat
    }, {watchCount: 0, starCount: 0, forkCount: 0})

    return (
      <div className='' style={styles.userInfoBox}>
        <div className='container'>
          <div className='row'>
            <div className='col s12 m8 offset-m2 l6 offset-l3 center'>
              <div className='row'> <img style={styles.avatar} src={user.avatar_url} /> </div>
              <div className='row'><h3 style={styles.loginId}>{user.login}</h3></div>

              <div className='row'>
                <a className='waves-effect waves-light btn' style={styles.statButton}>
                  <i className='material-icons left' >star</i>{repoStat.watchCount}
                </a>

                <a className='waves-effect waves-light btn' style={styles.statButton}>
                  <i className='material-icons left' >visibility</i>{repoStat.starCount}
                </a>

                <a className='waves-effect waves-light btn' style={styles.statButton}>
                  <i className='material-icons left' >supervisor_account</i>{repoStat.forkCount}
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfoBox

UserInfoBox.propTypes = {
  user: PropTypes.object.isRequired,
  repositories: PropTypes.array.isRequired
}

