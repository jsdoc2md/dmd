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

class Member extends MarkdownTemplate {
  sigSymbol () {
    return _('symbol.type') + 'YEAH?'
  }
  sigTypes () {
    return this.data.type && this.data.type.names.join(' | ')
  }
}

module.exports = Member
