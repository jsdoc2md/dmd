'use strict'

class Composite {
  constructor () {
    /**
     * children
     * @type {Array}
     */
    this.children = []
    /**
     * parent
     * @type {Composite}
     */
    this.parent = null
  }

  /**
   * Add a child
   */
  add (child) {
    this.children.push(child)
  }

  /**
   * default iterator
   */
  * [Symbol.iterator] () {
    yield this
    for (let child of this.children) {
      yield* child
    }
  }
}

module.exports = Composite
