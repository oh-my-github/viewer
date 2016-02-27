import React from 'react'

import ReactPaginate from 'react-paginate'
import RandomColor from 'randomcolor'

import RepositoryTile from './RepositoryTile'
import Filter from './../../Filter'
import Sorter, {compareByRecentDate, compareByLargeNumber,}  from './../../Sorter'

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
    return compareByRecentDate(repo1.updated_at, repo2.updated_at)
  }, },
  { value: 'created_at', text: 'Recently Created', comparator: (repo1, repo2) => {
    return compareByRecentDate(repo1.created_at, repo2.created_at)
  }, },
  { value: 'forks_count', text: 'Forks', comparator: (repo1, repo2) => {
    return compareByLargeNumber(repo1.forks_count, repo2.forks_count)
  }, },
  { value: 'stargazers_count', text: 'Stargazers', comparator: (repo1, repo2) => {
    return compareByLargeNumber(repo1.stargazers_count, repo2.stargazers_count)
  }, },
  { value: 'open_issues_count', text: 'Issues', comparator: (repo1, repo2) => {
    return compareByLargeNumber(repo1.issues_count, repo2.issues_count)
  }, },
]

const CONST_ITEM_COUNT_PER_PAGE = 4

export default class TabContentRepository extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      /** used to sort */
      sortComparator: SORTING_STRATEGIES[0].comparator,

      /** used to filter */
      filterKeyword: '',

      /** used to paginate */
      currentItemOffset: 0,
    }
  }

  handlePageChange(data) {
    const offset = Math.ceil(data.selected * CONST_ITEM_COUNT_PER_PAGE)
    this.setState({currentItemOffset: offset,})
  }

  handleFilterChange(event) {
    const filterKeyword = event.target.value.trim().toLowerCase()
    this.setState({filterKeyword: filterKeyword, })
  }

  sortRepository(comparator) {
    this.setState({sortComparator: comparator, })
  }

  renderTitle() {
    const { repositories, } = this.state

    const titleText = (repositories === void 0 || repositories.length === 0) ? 'No Repository' :
      (repositories.length === 1) ? '1 Repository' : `${repositories.length} Repositories`

    return (<h2 style={styles.title}>{titleText}</h2>)
  }

  renderPageItems(repos) {

    const { currentItemOffset, } = this.state

    const sliced = repos.slice(currentItemOffset, currentItemOffset + CONST_ITEM_COUNT_PER_PAGE)

    const items = sliced.map((repo, index) => {
      return (<RepositoryTile key={index}
                              repository={repo} />
      )
    })

    return (<div> {items} </div>)
  }

  /** since react-paginate doesn't support es6 class, we can't extract it as an independent class */
  renderPaginator(totalPageCount) {
    const { currentItemOffset, } = this.state
    const currentPage = Math.ceil(currentItemOffset/ CONST_ITEM_COUNT_PER_PAGE)

    return(
      <ReactPaginate previousLabel={"prev"}
                     nextLabel={"next"}
                     breakLabel={<li className='break'><a href=''>...</a></li>}
                     forceSelected={currentPage}
                     pageNum={totalPageCount}
                     marginPagesDisplayed={1}
                     pageRangeDisplayed={3}
                     clickCallback={this.handlePageChange.bind(this)}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={css['paginator-active-label']} />
    )
  }

  render() {

    const { repositories, } = this.props
    const { sortComparator, filterKeyword, } = this.state

    const filtered = repositories
      .filter(repo => { /** return true if keyword is included in name or lang of repo */
        if (repo.name.toLowerCase().includes(filterKeyword)) return true

        const lang = repo.language
        if (lang && lang.toLowerCase().includes(filterKeyword)) return true

        return false
      })

    const sorted = filtered.slice().sort(sortComparator)

    const totalPageCount = Math.ceil(sorted.length / CONST_ITEM_COUNT_PER_PAGE)

    return (
      <div className='container'>
        {this.renderTitle()}
        <Filter handler={this.handleFilterChange.bind(this)} floatingLabel='INSERT FILTER' />
        <Sorter callback={this.sortRepository.bind(this)} sortingStrategies={SORTING_STRATEGIES} />

        <div className='row'>
          {this.renderPageItems(sorted)}
        </div>
        <div className='row center'>
          {this.renderPaginator(totalPageCount)}
        </div>
      </div>
    )
  }
}

TabContentRepository.propTypes = {
  repositories: React.PropTypes.array.isRequired,
  languages: React.PropTypes.array.isRequired,
}
