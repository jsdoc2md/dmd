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

class Event extends MarkdownTemplate {
  signature () {
    return clean`"${this.data.name}"\n`
  }
}

module.exports = Event
