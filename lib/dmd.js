'use strict'
const DocletTemplate = require('jsdoc-parse-template')
const t = require('typical')
const clean = require('template-clean')
const gfmt = require('gfmt')
const arrayify = require('array-back')

/**
 * @module dmd
 */

/**
 * A DocletTemplate for generating markdown documentation for a doclet.
 * @extends {external:DocletTemplate}
 * @alias module:dmd
 */
class Dmd extends DocletTemplate {
  static getDataClass () { return require('./data/doclet') }

  /**
   * if tweaks are to be made per kind, add a ref to the sub-class here.
   */
  static getSubclassMap () {
    return {
      root: require('./kind/root'),
      module: require('./kind/module'),
      member: require('./kind/member'),
      enum: require('./kind/enum'),
      event: require('./kind/event'),
      namespace: require('./kind/namespace'),
      group: require('./kind/group')
    }
  }

  static indent (input, level, indentWith) {
    level = t.isDefined(level) ? level : 1
    indentWith = t.isDefined(indentWith) ? indentWith : '    '
    return indentWith.repeat(level) + input
  }

  static indentLines (input, level, indentWith) {
    if (input && input.split) {
      return input.split(/\n/).map(l => this.indent(l, level, indentWith)).join('\n')
    } else {
      return ''
    }
  }

  static createMDLink (text, url) {
    // text = isCode ? this.formatType(text) : text
    return `[${text}](${url})`
  }

  static formatType (type) {
    return '`' + type + '`'
  }

  findById (id) {
    return Array.from(this.root()).find(d => d.data.id === id || d.data.longname === id)
  }

  /**
   * @param {string[]} - list of type names
   */
  typeList (names) {
    if (names && names.length) {
      return names
        .map(n => this.createNamepathLink(n))
        .join(' | ')
    }
  }

  anchor () { return '' }

  createNamepathLink (namepath) {
    const dataLinkedTo = this.findById(namepath)
    if (dataLinkedTo) {
      return this.constructor.createMDLink(
        dataLinkedTo.data.getName() || namepath,
        '#' + dataLinkedTo.anchor()
      )
    } else {
      // return this.constructor.formatType(namepath)
      return namepath
    }
  }

  headingDepth () { return this.level() }
  headingSymbol () { return this.headingDepth() ? '#'.repeat(this.headingDepth()) + ' ' : '' }

  render () {
    const output = [
      this.preHeading(),
      this.heading(),
      this.body(),
      this.index()
    ].join('')
    return clean`${output}`
  }

  /**
   * @category hook-point
   */
  preHeading () { return '' }

  /**
   * the doclet heading.
   * @example
   * # new ExampleClass(one, two) <= EventEmitter
   */
  heading () {
    const output = [
      this.headingSymbol(),
      this.signature(),
    ].join('')
    return clean`${output}`
  }

  body () { if (this.data.description) return this.data.description + '\n' }

  index () { return '' }

  signature () { return 'signature\n' }
}

module.exports = Dmd

/**
 * @external DocletTemplate
 * @see https://github.com/jsdoc2md/jsdoc-parse-template/blob/master/doclet-data.js
 */
