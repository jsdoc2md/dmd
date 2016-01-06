'use strict'

/**
 * The base component interface for a doclet rendering template.
 * @abstract
 */
class DocletBase {
  constructor (data, locale) {
    this.data = data
    this.children = null
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
    if (this.children) {
      return this.children.reduce((prev, curr) => {
        return prev.render() + curr.render()
      })
    } else {
      return this._render()
    }
  }
}

/**
 * @module doclet-base
 */
module.exports = DocletBase
