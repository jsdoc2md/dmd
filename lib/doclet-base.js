'use strict'

/**
 * The base component interface for a doclet rendering template.
 * @abstract
 */
class DocletBase {
  constructor (data, locale) {
    this.data = data
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
    if (this.children.length === 0) {
      return this._render()
    } else if (this.children.length === 1) {
      return this._render() + this.children[0].render()
    } else if (this.children.length > 1) {
      return this._render() + this.children.reduce((prev, curr) => {
        // console.log(this.data.id, prev.data.id, curr.data.id);
        // console.log(prev);
        return prev + curr.render()
      }, '')
    }
  }
}

/**
 * @module doclet-base
 */
module.exports = DocletBase
