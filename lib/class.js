'use strict'
const MarkdownTemplate = require('./dmd')
const DocletTemplate = require('jsdoc-parse-template/doclet-template')
const clean = require('template-clean')
const gfmt = require('gfmt')
const util = require('util')
const arrayify = require('array-back')
const catalogue = require('text-catalogue')
const enGB = require('dmd-locale-en-gb')
const _ = catalogue._
catalogue.extend(enGB)

/**
 * Tweaks for class doclets
 * @extends module:dmd
 */
class Class extends MarkdownTemplate {
  /**
   * show the augments symbol
   */
  sigSymbol () {
    return this.data.augments && this.data.augments.length && _('symbol.extends')
  }
  /**
   * show the augments type list
   */
  sigTypes () {
    return this.data.augments && this.data.augments.length && this.data.augments[0]
  }
}

module.exports = Class
