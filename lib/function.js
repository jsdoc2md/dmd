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

class Function_ extends MarkdownTemplate {
  sigSymbol () {
    if (this.data.returns) {
      return ' ' + _('symbol.returns')
    } else if (this.data.chainable) {
      return ' ' + _('symbol.chainable')
    }

  }
  sigTypes () {
    return ' ' + this.typeList(this.data.returnTypeNames())
  }
}

module.exports = Function_
