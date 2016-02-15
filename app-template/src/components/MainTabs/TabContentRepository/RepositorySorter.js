import React, { PropTypes, Component, } from 'react'
import SelectField from 'material-ui/lib/select-field'
import MenuItem from 'material-ui/lib/menus/menu-item'

import moment from 'moment'

function compareDate(date1, date2) { /** latest */
  return moment(date2).valueOf() - moment(date1).valueOf()
}

export const SORTER = [
  { value: 'updated_at', text: 'Recently Updated', comparator: (repo1, repo2) => {
    return compareDate(repo1.updated_at, repo2.updated_at)
  }, },
  { value: 'created_at', text: 'Recently Created', comparator: (repo1, repo2) => {
    return compareDate(repo1.created_at, repo2.created_at)
  }, },
  { value: 'forks_count', text: 'Forks', comparator: (repo1, repo2) => {
    return repo2.forks_count - repo1.forks_count
  }, },
  { value: 'stargazers_count', text: 'Stargazers', comparator: (repo1, repo2) => {
    return repo2.stargazers_count - repo1.stargazers_count
  }, },
  { value: 'open_issues_count', text: 'Issues', comparator: (repo1, repo2) => {
    return repo2.issues_count - repo1.issues_count
  }, },
]

export default class RepositorySorter extends Component {
  constructor(props) {
    super(props)

    this.state = { sorter: SORTER[0], }
  }

  handleSorterChange(event, index) {
    const sorter = SORTER[index]

    this.setState({sorter: sorter,})
    this.props.sortRepository(sorter.comparator)
  }

  render() {
    const { sorter, } = this.state

    const sortMenus = SORTER.map((sorter, index) => {
      return (<MenuItem value={sorter.value} primaryText={sorter.text} key={index} />)
    })

    return (
      <div>
        <SelectField value={sorter.value} onChange={this.handleSorterChange.bind(this)}>
          {sortMenus}
        </SelectField>
      </div>
    )
  }
}

RepositorySorter.propTypes = {
  sortRepository: PropTypes.func.isRequired,
}
