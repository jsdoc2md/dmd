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

class Class extends MarkdownTemplate {
  sigSymbol () {
    return this.data.augments && this.data.augments.length && _('symbol.extends')
  }
  sigTypes () {
    return this.data.augments && this.data.augments.length && this.data.augments[0]
  }
}

module.exports = Class
