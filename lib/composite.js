'use strict'

class Composite {
  constructor () {
    /**
     * children
     * @type {Array}
     */
    this._children = []
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
  get children () {
    return this._children
  }

  get level () {
    let count = 0
    function countParent (composite) {
      if (composite.parent) {
        count++
        countParent(composite.parent)
      }
    }
    countParent(this)
    return count
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
