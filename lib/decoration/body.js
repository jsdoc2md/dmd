'use strict'
const clean = require('template-clean')
const gfmt = require('gfmt')

module.exports = function (SuperClass) {
  return class Body extends SuperClass {
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
  }
}
