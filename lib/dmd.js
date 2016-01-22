'use strict'
const DocletTemplate = require('jsdoc-parse-bowie/template')
const clean = require('template-clean')
const gfmt = require('gfmt')
const util = require('util')
const catalogue = require('text-catalogue')
const enGB = require('dmd-locale-en-gb')
const _ = catalogue._
catalogue.extend(enGB)

/**
 * @module markdown
 */

class MarkdownTemplate extends DocletTemplate {
  get anchor () {
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

  get signature () {
    return clean`${this.data.parentName}${this.data.accessSymbol}${this.data.name} ${this.sigSymbol} ${this.sigTypes}  \n`
  }

  description () {
    if (this.data.description) {
      return `${this.data.description}\n\n`
    }
  }

  get params () {
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

  get example () { return '' }

  _render () {
    return clean`${this.anchor}${this.heading()}${this.signature}${this.description()}${this.params}${this.example}`
  }

  static create (doclet, extensions) {
    const map = {
      module: ModuleMarkdownTemplate,
      member: MemberMarkdownTemplate,
      function: FunctionMarkdownTemplate,
      class: ClassMarkdownTemplate,
      enum: EnumMarkdownTemplate,
      event: EventMarkdownTemplate
    }
    const SubClass = map.hasOwnProperty(doclet.kind) && map[doclet.kind]
    return MarkdownTemplate.decorate(SubClass ? new SubClass(doclet) : new MarkdownTemplate(doclet), extensions)
  }
}

class ModuleMarkdownTemplate extends MarkdownTemplate {
  get signature () {
    return clean`${this.data.name}\n`
  }
}

class MemberMarkdownTemplate extends MarkdownTemplate {
  get sigSymbol () {
    return _('symbol.type') + 'YEAH?'
  }
  get sigTypes () {
    return this.data.type && this.data.type.names.join(' | ')
  }
}

class EnumMarkdownTemplate extends MarkdownTemplate {
  get sigSymbol () {
    return _('symbol.type')
  }
  get sigTypes () {
    return 'enum'
  }
}

class FunctionMarkdownTemplate extends MarkdownTemplate {
  get sigSymbol () {
    return this.data.returns && _('symbol.returns')
  }
  get sigTypes () {
    return this.data.returnTypeNames.join(` ${_('symbol.typeSeparator')} `)
  }
}

class ClassMarkdownTemplate extends MarkdownTemplate {
  get sigSymbol () {
    return this.data.augments && this.data.augments.length && _('symbol.extends')
  }
  get sigTypes () {
    return this.data.augments && this.data.augments.length && this.data.augments[0]
  }
}

class EventMarkdownTemplate extends MarkdownTemplate {
  get signature () {
    return clean`"${this.data.name}"\n`
  }
}

module.exports = MarkdownTemplate
