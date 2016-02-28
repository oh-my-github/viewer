import React from 'react'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import Tooltip from 'material-ui/lib/tooltip'

import Humanize from 'humanize-plus'

import SectionFavorite from './SectionFavorite'
import SectionOther from './SectionOther'

const FAVORITE_LANG_COUNT = 5

export const styles = {
  tabContent: {
    paddingTop: '30px',
    paddingBottom: '10px',
  },

  sectionRepo: {
    fontSize: 20,
    fontWeight: 200,
  },

  containerProgressBar: {
    marginTop: '25px',
    marginBottom: '15px',
  },
}

export default class TabContentLanguage extends React.Component {

  render() {

    const { languages, } = this.props
    let repoLangs = languages
    let linePerLang = new Map()

    /** create Map<name, line> */
    for (let repoLang of repoLangs) {
      if (!(repoLang.languages === void 0))
        for(let lang of repoLang.languages) {
          if (linePerLang.get(lang.name) === void 0) linePerLang.set(lang.name, 0)

          linePerLang.set(lang.name, linePerLang.get(lang.name) + lang.line)
        }
    }

    /** create a sorted (by line) Array<{ name, line }> from Array<[name, line]> */
    let sortedRepoLangs = Array.from(linePerLang)
      .sort((a, b) => { return b[1] - a[1] /** order by desc (line) */ })
      .map(arraized => {
        return {name: arraized[0], line: arraized[1],}
      })

    /** add humanized labels */
    sortedRepoLangs = sortedRepoLangs.map(lang => {
      lang.label = Humanize.compactInteger(lang.line, 1)
      return lang
    })

    const favoriteLangs = sortedRepoLangs.slice(0, FAVORITE_LANG_COUNT)
    const otherLangs = sortedRepoLangs.slice(FAVORITE_LANG_COUNT)

    return (
      <div className='container' style={styles.tabContent} >
        <SectionFavorite languages={favoriteLangs} />
        <SectionOther languages={otherLangs} />
      </div>
    )
  }
}

TabContentLanguage.propTypes = {
  languages: React.PropTypes.array.isRequired,
}
