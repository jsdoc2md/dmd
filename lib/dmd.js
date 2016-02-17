'use strict'
const u = require('./util')
const DocletTemplate = require('jsdoc-parse-template/doclet-template')
const clean = require('template-clean')
const gfmt = require('gfmt')
const arrayify = require('array-back')
const catalogue = require('text-catalogue')
const util = require('util')
const enGB = require('dmd-locale-en-gb')
const _ = catalogue._
catalogue.extend(enGB)
// const entities = require('entities')

/**
 * @module dmd
 */

/**
 * A DocletTemplate for generating markdown documentation for a doclet.
 * @extends {DocletTemplate}
 * @alias module:dmd
 */
class Dmd extends DocletTemplate {
  /**
   * if tweaks are to be made per kind, add a ref to the sub-class here.
   */
  static getSubclassMap () {
    return {
      root: require('./root'),
      module: require('./module'),
      member: require('./member'),
      function: require('./function'),
      class: require('./class'),
      constructor: require('./constructor'),
      enum: require('./enum'),
      event: require('./event'),
      namespace: require('./namespace'),
      constant: require('./constant'),
      group: require('./group')
    }
  }

  /**
   * @param {string[]} - list of type names
   */
  typeList (names) {
    if (names && names.length) {
      return names
        .map(n => {
          return this.createNamepathLink(n)
        })
        .join(` | `)
    }
  }

  createNamepathLink (namepath) {
    const dataLinkedTo = this.root().data.findById(namepath)
    if (dataLinkedTo) {
      return u.createMDLink(
        dataLinkedTo.getName() || namepath,
        '#' + dataLinkedTo.anchorName(),
        true
      )
    } else {
      return '`' + namepath + '`'
    }
  }

  getMethodSig () {
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

  /**
   * @param [options] {object}
   * @param [options] {object}
   * @example
   * new ExampleClass(one, two) <= EventEmitter
   */
  getSignature (options) {
    options = options || {}

    let methodSig = [
      this.sigPrefix(),
      options.skipParentName ? '' : this.data.parentName(),
      this.data.accessSymbol(),
      this.data.getName(),
      this.sigMethodSig()
    ].join('')

    if (options.link) {
      methodSig = u.createMDLink(methodSig, '#' + this.data.anchorName())
    }

    const output = [
      methodSig,
      this.sigSymbol(),
      this.sigTypes(),
      this.sigSuffix()
    ].join('')

    return output + '\n'
  }

  getDescendentCount () {
    return Array.from(this).length
  }

  render () {
    const output = [
      this.anchor(),
      this.heading(),
      this.description(),
      this.scope(),
      this.params(),
      this.properties(),
      this.example(),
      this.category(),
      this.index()
    ].join('')
    return clean`${output}`
  }

  indexGrouped () {
    let output = ''
    if (this.getDescendentCount() > 2 && (!this.data.isExported || (this.data.isExported && this.level() === 1))) {
      const startLevel = this.level()
      for (let doclet of this) {
        output += u.indent(`* ${doclet.memberIndexItem()}`, doclet.level() - startLevel)
      }
      return `\n${output}\n`
    }
  }

  index () {
    let output = ''
    if (this.getDescendentCount() > 2 && (!this.data.isExported || (this.data.isExported && this.level() === 1))) {
      const startLevel = this.level()
      for (let doclet of this) {
        output += u.indent(`* ${doclet.memberIndexItem()}`, doclet.level() - startLevel)
      }
      return `\n${output}\n`
    }
  }

  memberIndexItem () {
    return this.getSignature({ skipParentName: true, link: true })
  }
  /*
  SIG-LINK
  {{#if virtual}}*{{/if}}
  {{#with (parentObject)}}
    {{#if virtual}}*{{/if~}}
  {{/with~}}
  {{#if name}}
    {{#sig~}}
      {{{@depOpen}~}}
      [{{{@codeOpen}~}}
      {{#if @prefix}}{{@prefix}} {{/if~}}
      {{#if (isClassMember)}}{{@parent~}}{{/if~}} <-- only for member-index-format=list
      {{@accessSymbol}}
      {{#if (isEvent)}}
        "{{{name}}}"
      {{else}}
        {{{name}}}
      {{/if~}}
      {{~#if @methodSign}}
        {{#if (isEvent)}} {{@methodSign}}{{else}}{{@methodSign}}{{/if}}
      {{/if~}}
      {{{@codeClose}}}](#{{{anchorName}}})
      {{~#if @returnSymbol}} {{@returnSymbol}}{{/if~}}
      {{#if @returnTypes}} {{linkedTypeList types=@returnTypes delimiter=" &#124; " }}{{/if~}}
      {{#if @suffix}} {{@suffix}}{{/if~}}
      {{{@depClose}~}}
    {{~/sig}}
  {{/if~}}
  {{#if virtual}}*{{/if}}
  {{#with (parentObject)}}
    {{#if virtual}}*{{/if~}}
  {{/with~}}
  */

  /**
   * An anchor member-index items can link to
   * @example
   * <a name="#ExampleClass"></a>
   */
  anchor () {
    const anchorName = this.data.anchorName()
    if (anchorName) return `<a name="${anchorName}"></a>\n`
  }

  headingDepth () { return this.level() }

  /**
   * the doclet heading.
   * @example
   * # new ExampleClass(one, two) <= EventEmitter
   */
  heading () {
    const headingSymbol = this.headingDepth() ? '#'.repeat(this.headingDepth()) + ' ' : ''
    return `${headingSymbol}${this.signature()}`
  }

  signature () {
    return this.getSignature({ skipParentName: false, link: false })
  }

  sigSymbol () { return '' }
  sigTypes () { return '' }
  sigPrefix () { return '' }

  /**
   * Returns the method signature, e.g. `(options, [onComplete])`
   * @returns {string}
   */
  sigMethodSig () { return '' }

  sigSuffix () {
    return this.data.isExported ? ' ⏏' : this.data.isPrivate() ? ' ℗' : ''
  }

  description () {
    if (this.data.description) {
      return `${this.data.description}\n\n`
    }
  }

  scope () {
    let output = ''
    if (this.data.scope) {
      const memberof = this.data.memberof ? ` of ${this.createNamepathLink(this.data.memberof)}` : ''
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
          example = util.format('```%s\n%s\n```', exampleLang, example)
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
}

module.exports = Dmd

/**
 * @typedef DocletTemplate
 * @see https://github.com/jsdoc2md/jsdoc-parse-template/blob/master/doclet-data.js
 */
