'use strict'
const u = require('./util')
const DocletTemplate = require('jsdoc-parse-bowie/doclet-template')
const clean = require('template-clean')
const gfmt = require('gfmt')
const arrayify = require('array-back')
const catalogue = require('text-catalogue')
const util = require('util')
const enGB = require('dmd-locale-en-gb')
const _ = catalogue._
catalogue.extend(enGB)

/**
 * @module markdown
 */

class Default extends DocletTemplate {
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
    return `<span id="${this.data.anchorName()}"></span>\n`
  }

  headingDepth () {
    return this.level()
  }
  heading () {
    return `${'#'.repeat(this.headingDepth())} `
  }

  /**
   * @param [options] {object}
   * @param [options] {object}
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

  separator () {
    return '\n\n* * *\n\n'
  }

  _render () {
    const output = [
      this.anchor(),
      this.heading(),
      this.signature(),
      this.description(),
      this.params(),
      this.example(),
      this.index(),
      this.separator()
    ].join('')
    return clean`${output}`
  }
}

module.exports = Default
