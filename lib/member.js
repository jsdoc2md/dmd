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

class Member extends MarkdownTemplate {
  sigSymbol () {
    return this.data.type && ` ${_('symbol.type')}`
  }
  sigTypes () {
    return ' ' + this.data.typeNames()
      .map(n => '`' + n + '`')
      .join(` ${_('symbol.typeSeparator')} `)
  }
}

module.exports = Member
