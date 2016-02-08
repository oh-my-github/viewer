import React, { PropTypes, Component } from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
}

class TabContentContrib extends Component {
  render() {

    const { activities } = this.props

    return (
      <div className='container'>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    )
  }
}

export default TabContentContrib

TabContentContrib.propTypes = {
  activities: PropTypes.array.isRequired
}
