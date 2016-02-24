import React from 'react'
import TextField from 'material-ui/lib/text-field'

export default class Filter extends React.Component {
  render() {
    const { floatingLabel, } = this.props

    return (
      <div>
        <TextField onChange={this.props.handler} floatingLabelText={floatingLabel || 'Insert Filter'} />
      </div>
    )
  }
}

Filter.propTypes = {
  handler: React.PropTypes.func.isRequired,
  floatingLabel: React.PropTypes.string.isRequired,
}
