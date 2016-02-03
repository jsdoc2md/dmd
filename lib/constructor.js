'use strict'
const MarkdownTemplate = require('./dmd')
const DocletTemplate = require('jsdoc-parse-bowie/doclet-template')
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
    return this.data.returns && _('symbol.returns')
  }
  sigTypes () {
    return this.data.returnTypeNames().join(` ${_('symbol.typeSeparator')} `)
  }
}

module.exports = Function_
