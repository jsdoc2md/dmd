'use strict'
const u = require('./util')
const DocletTemplate = require('jsdoc-parse-bowie/doclet-template')
const clean = require('template-clean')
const gfmt = require('gfmt')
const util = require('util')
const arrayify = require('array-back')
const catalogue = require('text-catalogue')
const enGB = require('dmd-locale-en-gb')
const _ = catalogue._
catalogue.extend(enGB)

/**
 * @module markdown
 */

class MarkdownTemplate extends DocletTemplate {
  static classMap () {
    return {
      root: require('./root'),
      module: require('./module'),
      member: require('./member'),
      function: require('./function'),
      class: require('./class'),
      constructor: require('./constructor'),
      enum: require('./enum'),
      event: require('./event')
    }
  }

  anchor () {
    if (this.data.inherited) {
      return 'the anchor of the super class'
    }
    const anchorName = util.format(
      '%s%s%s',
      this.data.isExported ? 'exp_' : '',
      this.data.isConstructor() ? 'new_' : '',
      this.data.id
        .replace(/:/g, '_')
        .replace(/~/g, '..')
        .replace(/\(\)/g, '_new')
        .replace(/#/g, '+')
    )

    return `<a href="#${anchorName}"></a>\n`
  }

  heading () {
    return `${'#'.repeat(this.level)} `
  }

  signature () {
    return clean`${this.data.parentName()}${this.data.accessSymbol()}${this.data.name} ${this.sigSymbol()} ${this.sigTypes()}  \n`
  }

  description () {
    if (this.data.description) {
      return `${this.data.description}\n\n`
    }
  }

  params () {
    let params = this.data.params
    if (params) {
      params = params.map(p => {
        return {
          name: p.name,
          type: 'TYPE',
          description: p.description
        }
      })
      return `**Params**\n\n${gfmt(params)}\n`
    }
  }

  example () { return '' }

  _render () {
    return clean`${this.anchor()}${this.heading()}${this.signature()}${this.description()}${this.params()}${this.example()}`
  }
}

module.exports = MarkdownTemplate
