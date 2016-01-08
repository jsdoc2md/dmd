'use strict'
const DocletData = require('./doclet-data')

/**
 * The base component interface for a doclet rendering template.
 * @abstract
 */
class TemplateBase {
  constructor (data, locale) {
    this.data = new DocletData(data)
    this.children = []
    this.parent = null
    this.locale = locale
  }

  add (doclet) {
    this.children.push(doclet)
  }

  get signature () {}
  get description () {}
  get type () {}
  get params () {}
  get example () {}


  /**
   * default template
   */
  render () {
    return this.children.reduce((prev, curr) => {
      return prev + '\n' + curr.render()
    }, this._render())
  }
}

/**
 * @module doclet-base
 */
module.exports = TemplateBase
