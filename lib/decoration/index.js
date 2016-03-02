'use strict'

module.exports = function (SuperClass) {
  return class Index extends SuperClass {
    index () {
      let output = ''
      /*
      only show a member-index if
      - there'll be more than 2 items in it and
      - this is the top-level, exported value
      - this is not the exported value
      */
      if (this.getDescendentCount() > 2 && (!this.data.isExported || (this.data.isExported && this.level() === 1))) {
        const startLevel = this.level()
        for (let doclet of this) {
          output += this.constructor.indent(`* ${indexItem.call(doclet)}`, doclet.level() - startLevel)
        }
        return `\n${output}\n`
      }
    }
  }
}

function indexItem () {
  return this.getSignature({ skipParentName: true, link: false })
}
