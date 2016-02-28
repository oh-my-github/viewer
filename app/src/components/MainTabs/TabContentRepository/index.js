import React from 'react'

import RepositoryTile from './RepositoryTile'
import Paginator from '../../Paginator'
import Filter from './../../Filter'
import Sorter from './../../Sorter'
import { sortRecentItemByDate, sortByLargeNumber, } from '../../../util'

/** since react-paginate support css style only, we need a stylesheet */
import css from './index.css'

const styles = {
  title: {
    fontSize: 22,
    marginTop: 35,
    fontWeight: 200,
  },
}

export const SORTING_STRATEGIES = [
  { value: 'updated_at', text: 'Recently Updated', comparator: (repo1, repo2) => {
    return sortRecentItemByDate(repo1.updated_at, repo2.updated_at)
  }, },
  { value: 'created_at', text: 'Recently Created', comparator: (repo1, repo2) => {
    return sortRecentItemByDate(repo1.created_at, repo2.created_at)
  }, },
  { value: 'forks_count', text: 'Forks', comparator: (repo1, repo2) => {
    return sortByLargeNumber(repo1.forks_count, repo2.forks_count)
  }, },
  { value: 'stargazers_count', text: 'Stargazers', comparator: (repo1, repo2) => {
    return sortByLargeNumber(repo1.stargazers_count, repo2.stargazers_count)
  }, },
  { value: 'open_issues_count', text: 'Issues', comparator: (repo1, repo2) => {
    return sortByLargeNumber(repo1.issues_count, repo2.issues_count)
  }, },
]

const ITEM_COUNT_PER_PAGE = 4
const INITIAL_PAGE_OFFSET = 0

export default class TabContentRepository extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      /** used to sort */
      sortComparator: SORTING_STRATEGIES[0].comparator,

      /** used to filter */
      filterKeyword: '',

      /** used to paginate */
      currentPageOffset: INITIAL_PAGE_OFFSET,
    }
  }

  handleFilterChange(event) {
    const filterKeyword = event.target.value.trim().toLowerCase()
    this.setState({filterKeyword: filterKeyword, currentPageOffset: INITIAL_PAGE_OFFSET,})
  }

  handleSorterChange(comparator) {
    this.setState({sortComparator: comparator, })
  }

  handlePageChange(currentPageOffset) {
    this.setState({currentPageOffset: currentPageOffset, })
  }

  renderTitle(repositories) {
    const titleText = (repositories === void 0 || repositories.length === 0) ? 'No Repository' :
      (repositories.length === 1) ? '1 Repository' : `${repositories.length} Repositories`

    return (<div style={styles.title}>{titleText}</div>)
  }

  renderPageItems(repos, currentPageOffset) {

    const currentItemOffset = currentPageOffset * ITEM_COUNT_PER_PAGE

    const sliced = repos.slice(currentItemOffset, currentItemOffset + ITEM_COUNT_PER_PAGE)

    const items = sliced.map((repo, index) => {
      return (<RepositoryTile key={index}
                              repository={repo} />
      )
    })

    return (<div> {items} </div>)
  }

  render() {
    const { repositories, } = this.props
    const { sortComparator, filterKeyword, currentPageOffset, } = this.state

    const filtered = repositories
      .filter(repo => { /** return true if keyword is included in name or lang of repo */
        if (repo.name.toLowerCase().includes(filterKeyword)) return true

        const lang = repo.language
        if (lang && lang.toLowerCase().includes(filterKeyword)) return true

        return false
      })

    const sorted = filtered.slice().sort(sortComparator)

    return (
      <div className='container'>
        {this.renderTitle(sorted)}
        <Filter handler={this.handleFilterChange.bind(this)} floatingLabel='INSERT FILTER' />
        <Sorter handler={this.handleSorterChange.bind(this)} sortingStrategies={SORTING_STRATEGIES} />
        <br/>

        <div className='row'>
          {this.renderPageItems(sorted, currentPageOffset)}
        </div>
        <div className='row center'>
          <Paginator handler={this.handlePageChange.bind(this)}
                     totalItemCount={sorted.length}
                     itemCountPerPage={ITEM_COUNT_PER_PAGE}
                     currentPageOffset={currentPageOffset} />
        </div>
      </div>
    )
  }
}

TabContentRepository.propTypes = {
  repositories: React.PropTypes.array.isRequired,
  languages: React.PropTypes.array.isRequired,
}
