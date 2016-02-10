import React, { PropTypes, Component, } from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import ReactPaginate from 'react-paginate'
import RandomColor from 'randomcolor'

import RepositoryTile from './RepositoryTile'

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
      pageCount: 0,
      offset: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { repositories, } = nextProps
    const { offset, } = this.state
    const pageCount = Math.ceil( repositories.length / CONST_ITEM_COUNT_PER_PAGE)

    const sliced = repositories.slice(offset, offset + CONST_ITEM_COUNT_PER_PAGE)
    this.setState({repositories: sliced, pageCount: pageCount, })
  }

  handlePageClick (data) {
    const offset = Math.ceil(data.selected * CONST_ITEM_COUNT_PER_PAGE)
    const { repositories, } = this.props

    if (repositories) { /** slice repositories in props to render */
      const sliced = repositories.slice(offset, offset + CONST_ITEM_COUNT_PER_PAGE)
      this.setState({offset: offset, repositories: sliced, })
    }
  }

  renderPageItems(repositories) {
    if (!repositories) return

    // TODO: pass color as props
    const colors = RandomColor({
      luminosity: 'light', hue: 'random', count: CONST_ITEM_COUNT_PER_PAGE * 10,
    }).sort().reverse()

    const items = repositories.map((repo, index) => {
      return (<RepositoryTile key={index}
                              repository={repo}
                              titleSectionColor={colors[index % CONST_ITEM_COUNT_PER_PAGE]} />
      )
    })

    return (<div> {items} </div>)
  }

  renderPaginator(pageCount) {
    if (pageCount <= 0) return

    return (
      <ReactPaginate previousLabel={"previous"}
                     nextLabel={"next"}
                     breakLabel={<li className='break'><a href=''>...</a></li>}
                     pageNum={pageCount}
                     marginPagesDisplayed={1}
                     pageRangeDisplayed={3}
                     clickCallback={this.handlePageClick.bind(this)}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"active"} />
    )
  }

  render() {
    const { repositories, pageCount, } = this.state
    const allRepositories = this.props.repositories

    const titleText = (allRepositories === void 0 || allRepositories.length === 0) ? 'No Repository' :
      (allRepositories.length === 1) ? '1 Repository' : `${allRepositories.length} Repositories`

    return (
      <div className='container'>
        <h2 style={styles.title}>{titleText}</h2>
        <div className='row'>
          {this.renderPageItems(repositories)}
        </div>
        <div className='row center'>
          {this.renderPaginator(pageCount)}
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
