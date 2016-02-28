import React, { PropTypes, Component, } from 'react'
import SelectField from 'material-ui/lib/select-field'
import MenuItem from 'material-ui/lib/menus/menu-item'

import moment from 'moment'

const EMPTY_COMPARATOR = (a, b) => { return 0 }

export default class Sorter extends Component {
  constructor(props) {
    super(props)

    const { sortingStrategies, } = this.props
    const EMPTY_SORTING_STRATEGY = Sorter.createSortingStrategy()

    /** use an empty strategy if provided one is undefined */
    const defaultSortingStrategies = (!sortingStrategies) ?
      EMPTY_SORTING_STRATEGY : (!sortingStrategies[0]) ?
        EMPTY_SORTING_STRATEGY : sortingStrategies[0]

    this.state = {
      strategy: defaultSortingStrategies,
    }
  }

  static createSortingStrategy(value, text, comparator) {
    return {
      value: value || 'EMPTY VALUE',
      text: text || 'EMPTY TEXT',
      comparator: comparator || EMPTY_COMPARATOR,
    }
  }

  handleSorterChange(event, index) {
    const { sortingStrategies, handler, } = this.props
    const sorter = sortingStrategies[index]

    this.setState({strategy: sorter,})

    if (handler) handler(sorter.comparator)
  }

  render() {
    const { strategy, } = this.state
    const { sortingStrategies, } = this.props

    const sortMenus = sortingStrategies.map((strategy, index) => {
      return (<MenuItem value={strategy.value} primaryText={strategy.text} key={index} />)
    })

    return (
      <div>
        <SelectField value={strategy.value} onChange={this.handleSorterChange.bind(this)}>
          {sortMenus}
        </SelectField>
      </div>
    )
  }
}

Sorter.propTypes = {
  handler: PropTypes.func.isRequired,
  sortingStrategies: PropTypes.array.isRequired,
}
