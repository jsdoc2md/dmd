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
const entities = require('entities')

/**
 * @module dmd
 */

/**
 * A DocletTemplate for generating markdown documentation for a doclet.
 * @extends modules:jsdoc-parse-template~doclet-template
 */
class Dmd extends DocletTemplate {
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
      constant: require('./constant')
    }
  }

  /**
   * @param {string[]} - list of type names
   */
  static typeList (names) {
    return ' ' + names
      .map(n => '`' + n + '`')
      .join(` ${_('symbol.typeSeparator')} `)
  }

  /**
   * An anchor member-index items can link to
   * @example
   * <a name="#ExampleClass"></a>
   */
  anchor () {
    return `<a name="${this.data.anchorName()}"></a>\n`
  }

  headingDepth () {
    return this.level()
  }

  /**
   * the doclet heading.
   * @example
   * # new ExampleClass(one, two) <= EventEmitter
   */
  heading () {
    return `${'#'.repeat(this.headingDepth())} ${this.signature()}`
  }

  /**
   * @param [options] {object}
   * @param [options] {object}
   * @example
   * new ExampleClass(one, two) <= EventEmitter
   */
  signature (options) {
    options = options || {}

    let methodSig = [
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
      this.sigTypes()
    ].join('')
    return output + '  \n'
  }

  sigSymbol () { return '' }
  sigTypes () { return '' }

  /**
   * Returns the method signature, e.g. `(options, [onComplete])`
   * @returns {string}
   */
  sigMethodSig () {
    if (this.data.params && this.data.params.length) {
      const args = arrayify(this.data.params).filter(param => {
        return param.name && !/\./.test(param.name)
      }).map(param => {
        if (param.variable) {
          return param.optional ? '[...' + param.name + ']' : '...' + param.name
        } else {
          return param.optional ? '[' + param.name + ']' : param.name
        }
      }).join(', ')
      return `(${args})`
    }
  }

  description () {
    if (this.data.description) {
      return `${this.data.description}\n\n`
    }
  }

  scope () {
    let output = ''
    if (this.data.scope) {
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
          Type: Dmd.typeList(p.type && p.type.names),
          Description: p.description
        }
      })
      return `\n${gfmt(params)}\n\n`
    }
  }

  properties () {
    let properties = this.data.properties
    if (properties && properties.length) {
      properties = properties.map(p => {
        return {
          Property: p.name,
          Type: Dmd.typeList(p.type && p.type.names),
          Default: '`' + String(JSON.stringify(p.defaultvalue)) + '`',
          Description: p.description
        }
      })
      // console.error(properties)
      return `\n${gfmt(properties)}\n`
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

  index () {
    let output = ''
    if (this.children.length > 1) {
      const startLevel = this.level()
      for (let doclet of this) {
        output += u.indent(`* ${doclet.memberIndexItem()}`, doclet.level() - startLevel)
      }
      return clean`\n${output}\n`
    }
  }

  memberIndexItem () {
    return this.signature({ skipParentName: true, link: true })
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

  render () {
    const output = [
      this.anchor(),
      this.heading(),
      this.description(),
      this.scope(),
      this.params(),
      this.properties(),
      this.example(),
      this.index()
    ].join('')
    return clean`${output}`
  }
}

module.exports = Dmd
