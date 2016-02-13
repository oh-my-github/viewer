import React, { PropTypes, Component, } from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import TextField from 'material-ui/lib/text-field'

import ReactPaginate from 'react-paginate'
import RandomColor from 'randomcolor'

import RepositoryTile from './RepositoryTile'
import RepositoryFilter from './RepositoryFilter'
import RepositorySorter from './RepositorySorter'

const styles = {
  title: {
    fontSize: 20,
    marginTop: 35,
    fontWeight: 200,
  },
}

const CONST_ITEM_COUNT_PER_PAGE = 4

class TabContentRepository extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repositories: [],

      /** used to sort */
      sortComparator: () => 0,

      /** used to paginate */
      currentPageNumber: 0,
      currentItemOffset: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { repositories, } = nextProps
    const currentPageNumber = Math.ceil( repositories.length / CONST_ITEM_COUNT_PER_PAGE)
    this.setState({currentPageNumber: currentPageNumber, repositories: repositories, })
  }

  handlePageChange(data) {
    const offset = Math.ceil(data.selected * CONST_ITEM_COUNT_PER_PAGE)
    this.setState({currentItemOffset: offset, })
  }

  handleFilterChange(event) {
    const filterKeyword = event.target.value
    const allRepos = this.props.repositories
    const { sortComparator, } = this.state

    const filtered = allRepos
      .filter(repo => { /** return true if keyword is included in name or lang of repo */
        if (repo.name.toLowerCase().includes(filterKeyword.toLowerCase())) return true

        const lang = repo.language
        if (lang && lang.toLowerCase().includes(filterKeyword.toLowerCase())) return true

        return false
      })

    const sorted = filtered.sort(sortComparator)

    const currentPageNumber = Math.ceil( sorted.length / CONST_ITEM_COUNT_PER_PAGE)
    this.setState({repositories: sorted, currentPageNumber: currentPageNumber, })
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

    const { repositories, currentItemOffset, } = this.state
    const sliced = repositories.slice(currentItemOffset, currentItemOffset + CONST_ITEM_COUNT_PER_PAGE)

    // TODO: pass color as props
    const colors = RandomColor({
      hue: 'blue', count: CONST_ITEM_COUNT_PER_PAGE * 5,
    }).sort().reverse()

    const items = sliced.map((repo, index) => {
      return (<RepositoryTile key={index}
                              repository={repo}
                              languageColor={colors[index % CONST_ITEM_COUNT_PER_PAGE + CONST_ITEM_COUNT_PER_PAGE]} />
      )
    })

    return (<div> {items} </div>)
  }

  renderPaginator() {
    const { currentPageNumber, } = this.state

    return(
      <ReactPaginate previousLabel={"previous"}
                     nextLabel={"next"}
                     breakLabel={<li className='break'><a href=''>...</a></li>}
                     pageNum={currentPageNumber}
                     marginPagesDisplayed={1}
                     pageRangeDisplayed={3}
                     clickCallback={this.handlePageChange.bind(this)}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"active"} />
    )
  }

  render() {

    return (
      <div className='container'>
        {this.renderTitle()}
        <RepositoryFilter handleFilterChange={this.handleFilterChange.bind(this)} />
        <RepositorySorter sortRepository={this.sortRepository.bind(this)} />

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

export default TabContentRepository

TabContentRepository.propTypes = {
  repositories: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
}
