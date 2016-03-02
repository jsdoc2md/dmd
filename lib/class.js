'use strict'
const Dmd = require('./dmd')

/**
 * Tweaks for class doclets
 * @module class
 */

/**
 * @extends {module:dmd}
 * @alias module:class
 */
class Class extends Dmd {
  /**
   * show the augments symbol
   */
  sigSymbol () {
    return this.data.augments && this.data.augments.length && ` ⇐`
  }
  /**
   * show the augments type list
   */
  sigTypes () {
    return this.data.augments && this.data.augments.length && ` ${this.data.augments[0]}`
  }
}

module.exports = Class
