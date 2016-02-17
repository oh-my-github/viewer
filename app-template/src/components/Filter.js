import React, { PropTypes, Component, } from 'react'
import TextField from 'material-ui/lib/text-field'

export default class Filter extends Component {
  render() {
    return (
      <div>
        <TextField onChange={this.props.handler} floatingLabelText='Insert Filter' />
      </div>
    )
  }
}

Filter.propTypes = {
  handler: PropTypes.func.isRequired,
}
