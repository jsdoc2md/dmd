'use strict'
const TemplateBase = require('./template-base')

class TemplateDecorator extends TemplateBase {
  constructor (template) {
    super()
    this.template = template
    this.data = template.data
    this.parent = template.parent
  }

  get anchor () { return this.template.anchor }
  heading () { return this.template.heading.call(this) }
  get signature () { return this.template.signature }
  description () { return this.template.description.call(this) }
  get type () { return this.template.type }
  get params () { return this.template.params }
  get example () { return this.template.example }

  render () { return this.template.render.call(this) }
  _render () { return this.template._render.call(this) }
}

/**
 * @module template-decorator
 */
module.exports = TemplateDecorator
