'use strict'
const Composite = require('./composite')

/**
 * The base component interface for a doclet template. A Template instance can contain zero or more other Template instances.
 * @abstract
 */
class TemplateBase extends Composite {
  constructor (docletData) {
    super()

    /**
     * the template data
     * @type {DocletData}
     */
    this.data = docletData
  }

  get signature () { }
  get description () {}
  get type () {}
  get params () {}
  get example () {}

  /**
   * Renders this, and any child templates if present.
   * @returns {string}
   */
  render () {
    return this.children.reduce((prev, curr) => {
      return prev + '\n' + curr.render()
    }, this._render ? this._render() : '')
  }
}

/**
 * @module template-base
 */
module.exports = TemplateBase
