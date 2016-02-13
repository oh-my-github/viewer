import React, { PropTypes, Component, } from 'react'
import TextField from 'material-ui/lib/text-field'

export default class RepositoryFilter extends Component {
  render() {
    return (
      <div>
        <TextField onChange={this.props.handleFilterChange} floatingLabelText='Insert Filter' />
      </div>
    )
  }
}

RepositoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
}
