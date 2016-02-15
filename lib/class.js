'use strict'
const Dmd = require('./dmd')
const _ = require('text-catalogue')._

/**
 * Tweaks for class doclets
 * @extends module:dmd
 */
class Class extends Dmd {
  /**
   * show the augments symbol
   */
  sigSymbol () {
    return this.data.augments && this.data.augments.length && ` ${_('symbol.extends')}`
  }
  /**
   * show the augments type list
   */
  sigTypes () {
    return this.data.augments && this.data.augments.length && ` ${this.data.augments[0]}`
  }
}

module.exports = Class
