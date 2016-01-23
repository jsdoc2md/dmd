'use strict'
// const DocletTemplate = require('./doclet-template')
const DocletTemplate = require('jsdoc-parse-bowie/doclet-template')
const MarkdownTemplate = require('./dmd')

class DocletTemplateDecorator extends MarkdownTemplate {
  constructor (template) {
    super()
    // this.template = template.template || template
    this.template = template
    this.data = template.data
    this.parent = template.parent
    this.children = template.children
  }

  anchor () { return this.template.anchor() }
  heading () { return this.template.heading() }
  signature () { return this.template.signature() }
  sigSymbol () { return this.template.sigSymbol() }
  sigTypes () { return this.template.sigTypes() }
  description () { return this.template.description() }
  type () { return this.template.type() }
  params () { return this.template.params() }
  example () { return this.template.example() }

  // render () { return this.template.render() }
  // _render () { return this.template._render() }
}

/**
 * @module template-decorator
 */
module.exports = DocletTemplateDecorator
