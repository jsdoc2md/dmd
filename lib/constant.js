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

class Constant extends MarkdownTemplate {
  sigSymbol () {
    return this.data.type && ` ${_('symbol.type')}`
  }
  sigTypes () {
    return ' ' + this.data.returnTypeNames().join(` ${_('symbol.typeSeparator')} `)
  }
}

module.exports = Constant
