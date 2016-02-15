import React, { PropTypes, Component, } from 'react'
import FontIcon from 'material-ui/lib/font-icon'
import IconButton from 'material-ui/lib/icon-button'
import RaisedButton from 'material-ui/lib/raised-button'

export default class RaisedFontIconButton extends Component {
  render() {
    const { style, label, labelStyle, iconStyle, iconClassName, } = this.props

    /** since RaisedButton doesn't support icon style overriding,
     *  we should wrap it with empty element (e.g span) */
    const icon = (
      <span> <FontIcon style={iconStyle} className={iconClassName} /> </span>
    )

    return (
      <RaisedButton style={style}
                    label={label || (<div></div>)}
                    labelStyle={labelStyle}
                    secondary
                    icon={icon}
        />
    )
  }
}

RaisedFontIconButton.propTypes = {
  style: PropTypes.object,
  label: PropTypes.node,
  labelStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  iconClassName: PropTypes.string,
}
