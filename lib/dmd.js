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
 * @extends {DocletTemplate}
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
      function: require('./kind/function'),
      class: require('./kind/class'),
      constructor: require('./kind/constructor'),
      enum: require('./kind/enum'),
      event: require('./kind/event'),
      namespace: require('./kind/namespace'),
      constant: require('./kind/member'),
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

  static createMDLink (text, url, isCode) {
    text = isCode ? this.formatType(text) : text
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
        '#' + dataLinkedTo.anchor(),
        true
      )
    } else {
      return this.constructor.formatType(namepath)
    }
  }

  signature () {
    return this.getSignature({ skipParentName: false, link: false })
  }

  sigSymbol () { return '' }
  sigTypes () { return '' }
  sigPrefix () { return '' }

  sigSuffix () {
    return this.data.isExported ? ' ⏏' : this.data.isPrivate() ? ' ℗' : ''
  }

  /**
   * Returns the method signature, e.g. `(options, [onComplete])`
   * @returns {string}
   */
  paramSig () {
    let params = arrayify(this.data.params)
    if (params.length) {
      const args = params
        .filter(p => p.name && !/\./.test(p.name))
        .map(p => p.getAnnotatedName())
        .join(', ')
      return `(${args})`
    } else {
      return '()'
    }
  }

  methodSig (options) {
    options = options || {}
    let methodSig = [
      this.sigPrefix(),
      options.skipParentName ? '' : this.data.parentName(),
      this.data.accessSymbol(),
      this.data.getName(),
      this.paramSig()
    ].join('')
    // if (options.link) {
    //   methodSig = this.constructor.createMDLink(methodSig, '#' + this.anchor())
    // }
    return methodSig
  }

  /**
   * A signature and its composition:
   *
   * new exampleModule.ExampleClass(one, two) <= `EventEmitter` ℗
   *
   * - `new` - `sigPrefix()`
   * - `exampleModule` - `data.parentName()`
   * - `.` - `data.accessSymbol()`
   * - `ExampleClass` - `data.getName`
   * - `(one, two)` - `sigMethodSig()`
   * - `<=` - `sigSymbol()`
   * - `EventEmitter` - sigTypes()
   * - `℗` - sigSuffix()
   *
   * @param [options] {object}
   * @param [options] {object}
   * @example
   * new ExampleClass(one, two) <= EventEmitter ℗
   */
  getSignature (options) {
    options = options || {}

    const output = [
      this.methodSig(options),
      this.sigSymbol(),
      this.sigTypes(),
      this.sigSuffix()
    ].join('')

    return output + '\n'
  }

  getDescendentCount () {
    return Array.from(this).length
  }

  index () { return '' }

  headingDepth () { return this.level() }
  headingSymbol () { return this.headingDepth() ? '#'.repeat(this.headingDepth()) + ' ' : '' }

  description () {
    if (this.data.description) {
      return `${this.data.description}\n\n`
    }
  }

  /**
   * @example
   * **Kind**: static method of FurQ
   */
  scope () {
    let output = ''
    if (this.data.scope) {
      // const memberof = this.data.memberof ? ` of ${this.createNamepathLink(this.data.memberof)}` : ''
      const memberof = this.data.memberof ? ` of ${this.data.memberof}` : ''
      const virtual = this.data.virtual ? 'abstract ' : ''
      output = `**Kind**: ${this.data.scope} ${virtual}${this.data.kindInThisContext()}${memberof}`
    } else {
      if (this.data.isExported) {
        output = `**Kind**: Exported ${this.data.kind}`
      }
    }
    return output + '  \n'
  }

  params () {
    let params = this.data.params
    if (params) {
      params = params.map(p => {
        return {
          Param: p.name,
          Type: this.typeList(p.type && p.type.names),
          Description: p.description
        }
      })
      return `\n${gfmt(params, { ignoreEmptyColumns: true })}\n\n`
    }
  }

  properties () {
    let properties = this.data.properties
    if (properties && properties.length) {
      properties = properties.map(p => {
        return {
          Property: p.name,
          Type: this.typeList(p.type && p.type.names),
          Default: '`' + String(JSON.stringify(p.defaultvalue)) + '`',
          Description: p.description
        }
      })
      return `\n${gfmt(properties, { ignoreEmptyColumns: true })}\n`
    }
  }

  example () {
    if (this.data.examples) {
      return this.data.examples.reduce((prev, example) => {
        var lines = example.split('\n')
        var matches = lines[0].match(/\s*<caption>(.*?)<\/caption>\s*/)
        var caption

        if (matches) {
          caption = matches[1]
          example = lines.slice(1).join('\n')
        }

        var exampleLangOptions = 'js'
        matches = example.match(/@lang\s+(\w+)\s*/)

        if (matches) {
          var exampleLangSubtag = matches[1]
          example = example.replace(matches[0], '')
        }

        var exampleLang = exampleLangSubtag || exampleLangOptions

        if (!(/```/.test(example) || exampleLang === 'off')) {
          const tick = '```'
          example = `${tick}${exampleLang}\n${example}\n${tick}`
        }

        caption = caption ? ` _${caption}_` : ''
        const output = `**Example**${caption}\n${example}\n`
        return prev + output
      }, '')
    }
  }

  category () {
    if (this.data.category) {
      return `**Category**: ${this.data.category}  \n`
    }
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

  body () {
    const output = [
      this.description(),
      this.scope(),
      this.params(),
      this.properties(),
      this.example(),
      this.category()
    ].join('')
    return clean`${output}`
  }

  render () {
    const output = [
      this.preHeading(),
      this.heading(),
      this.body(),
      this.index()
    ].join('')
    return clean`${output}`
  }
}

module.exports = Dmd

/**
 * @typedef DocletTemplate
 * @see https://github.com/jsdoc2md/jsdoc-parse-template/blob/master/doclet-data.js
 */
