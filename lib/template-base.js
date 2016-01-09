'use strict'
const DocletData = require('./doclet-data')

/**
 * The base component interface for a doclet template. A Template instance can contain zero or more other Template instances.
 * @abstract
 */
class TemplateBase {
  constructor (data) {
    /**
     * the template data
     * @type {DocletData}
     */
    this.data = new DocletData(data)

    /**
     * any child members (if this template is an object, class, module etc.)
     */
    this.children = []

    /**
     * link to the parent Template instance
     */
    this.parent = null
  }

  /**
   * Add a child template
   */
  add (template) {
    this.children.push(template)
  }

  get signature () {}
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
    }, this._render())
  }
}

/**
 * @module template-base
 */
module.exports = TemplateBase
