import React, { PropTypes, Component, } from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

import ReactPaginate from 'react-paginate'
import RandomColor from 'randomcolor'

import Color from 'color-js'

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

export default class TabContentRepository extends Component {
  constructor(props) {
    super(props)

    this.state = {
      /** filtered repositories */
      repositories: [],

      /** color per language */
      languageToColor: {},

      /** used to sort */
      sortComparator: SORTING_STRATEGIES[0].comparator,

      /** used to paginate */
      totalPageCount: 0,
      currentItemOffset: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { repositories, } = nextProps
    const totalPageCount = Math.ceil( repositories.length / CONST_ITEM_COUNT_PER_PAGE)

    const sorted = repositories.slice().sort(this.state.sortComparator)

    /** color per language */
    const languageToColor = {}
    const languages = Array.from(new Set(sorted.map(repo => repo.language)))
    const colors = RandomColor({
      luminosity: 'dark', format: 'rgba', count: languages.length,
    }).map(rgbString => { return Color(rgbString).setAlpha(0.60).toString() })

    for (let index = 0; index < languages.length; index++) {
      languageToColor[languages[index]] = colors[index]
    }

    this.setState({totalPageCount: totalPageCount, repositories: sorted, languageToColor: languageToColor, })
  }

  handlePageChange(data) {
    const offset = Math.ceil(data.selected * CONST_ITEM_COUNT_PER_PAGE)
    this.setState({currentItemOffset: offset,})
  }

  handleFilterChange(event) {
    const filterKeyword = event.target.value.trim().toLowerCase()
    const allRepos = this.props.repositories
    const { sortComparator, } = this.state

    const filtered = allRepos
      .filter(repo => { /** return true if keyword is included in name or lang of repo */
        if (repo.name.toLowerCase().includes(filterKeyword)) return true

        const lang = repo.language
        if (lang && lang.toLowerCase().includes(filterKeyword)) return true

        return false
      })

    const sorted = filtered.sort(sortComparator)

    const totalPageCount = Math.ceil( sorted.length / CONST_ITEM_COUNT_PER_PAGE)
    this.setState({repositories: sorted, totalPageCount: totalPageCount, currentItemOffset: 0,})
  }

  sortRepository(comparator) {
    const sorted = this.state.repositories.slice().sort(comparator)
    this.setState({repositories: sorted, sortComparator: comparator, })
  }

  renderTitle() {
    const { repositories, } = this.state

    const titleText = (repositories === void 0 || repositories.length === 0) ? 'No Repository' :
      (repositories.length === 1) ? '1 Repository' : `${repositories.length} Repositories`

    return (<h2 style={styles.title}>{titleText}</h2>)
  }

  renderPageItems() {
    const { languageToColor, repositories, currentItemOffset, } = this.state
    const sliced = repositories.slice(currentItemOffset, currentItemOffset + CONST_ITEM_COUNT_PER_PAGE)

    const items = sliced.map((repo, index) => {
      return (<RepositoryTile key={index}
                              repository={repo}
                              languageColor={languageToColor[repo.language]} />
      )
    })

    return (<div> {items} </div>)
  }

  /** since react-paginate doesn't support es6 class, we can't extract it as an independent class */
  renderPaginator() {
    const { totalPageCount, currentItemOffset, } = this.state
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

    return (
      <div className='container'>
        {this.renderTitle()}
        <Filter handler={this.handleFilterChange.bind(this)} floatingLabel='INSERT FILTER' />
        <Sorter callback={this.sortRepository.bind(this)} sortingStrategies={SORTING_STRATEGIES} />

        <div className='row'>
          {this.renderPageItems()}
        </div>
        <div className='row center'>
          {this.renderPaginator()}
        </div>
      </div>
    )
  }
}

TabContentRepository.propTypes = {
  repositories: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
}
