import React from 'react'

export default class ActivityBadge extends React.Component {
    render() {
      const { type, payload, } = this.props

      return (
        <div>badge</div>
      )
    }
}

ActivityBadge.propTypes = {
  type: React.PropTypes.string.isRequired,
  payload: React.PropTypes.object.isRequired,
}
