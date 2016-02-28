import React from 'react'
import TextField from 'material-ui/lib/text-field'

export default class Filter extends React.Component {

  handleFilterChange(event) {
    const { handler, } = this.props
    const filterKeyword = event.target.value.trim()

    if (handler) handler(filterKeyword)
  }

  render() {
    const { floatingLabel, } = this.props

    return (
      <div>
        <TextField onChange={this.handleFilterChange.bind(this)}
                   floatingLabelText={floatingLabel || 'Insert Filter'} />
      </div>
    )
  }
}

Filter.propTypes = {
  handler: React.PropTypes.func.isRequired,
  floatingLabel: React.PropTypes.string.isRequired,
}
