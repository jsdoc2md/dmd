'use strict'
// const TemplateDecorator = require('jsdoc-parse-bowie/doclet-template-decorator')
const TemplateDecorator = require('./doclet-template-decorator')

class Yeah extends TemplateDecorator {
  description () {
    return 'DAT FUNCTION\n'
  }
}

module.exports = Yeah
