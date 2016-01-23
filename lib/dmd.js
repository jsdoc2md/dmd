'use strict'
const DocletTemplate = require('jsdoc-parse-bowie/doclet-template')
const clean = require('template-clean')
const gfmt = require('gfmt')
const util = require('util')
const catalogue = require('text-catalogue')
const arrayify = require('array-back')
const enGB = require('dmd-locale-en-gb')
const _ = catalogue._
catalogue.extend(enGB)

/**
 * @module markdown
 */

class MarkdownTemplate extends DocletTemplate {
  anchor () {
    if (this.data.inherited) {
      return 'the anchor of the super class'
    }
    const anchorName = util.format(
      '%s%s%s',
      this.data.isExported ? 'exp_' : '',
      this.data.isConstructor ? 'new_' : '',
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
    return clean`${this.data.parentName}${this.data.accessSymbol}${this.data.name} ${this.sigSymbol()} ${this.sigTypes()}  \n`
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

  static create (doclet, extensions) {
    const map = {
      module: Module,
      member: Member,
      function: Function_,
      class: Class,
      enum: Enum,
      event: Event
    }
    const extMap = {
      'param-list-format-list': require('./param-list-format-list'),
      yeah: require('./yeah')
    }
    extensions = arrayify(extensions).map(e => extMap[e])
    const SubClass = map.hasOwnProperty(doclet.kind) && map[doclet.kind]
    return MarkdownTemplate.decorate(SubClass ? new SubClass(doclet) : new MarkdownTemplate(doclet), extensions)
  }
}

class Module extends MarkdownTemplate {
  signature () {
    return clean`${this.data.name}\n`
  }
}

class Member extends MarkdownTemplate {
  sigSymbol () {
    return _('symbol.type') + 'YEAH?'
  }
  sigTypes () {
    return this.data.type && this.data.type.names.join(' | ')
  }
}

class Enum extends MarkdownTemplate {
  sigSymbol () {
    return _('symbol.type')
  }
  sigTypes () {
    return 'enum'
  }
}

class Function_ extends MarkdownTemplate {
  sigSymbol () {
    return this.data.returns && _('symbol.returns')
  }
  sigTypes () {
    return this.data.returnTypeNames.join(` ${_('symbol.typeSeparator')} `)
  }
}

class Class extends MarkdownTemplate {
  sigSymbol () {
    return this.data.augments && this.data.augments.length && _('symbol.extends')
  }
  sigTypes () {
    return this.data.augments && this.data.augments.length && this.data.augments[0]
  }
}

class Event extends MarkdownTemplate {
  signature () {
    return clean`"${this.data.name}"\n`
  }
}

module.exports = MarkdownTemplate
