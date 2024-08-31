const handlebars = require('handlebars')
const path = require('path')
const fs = require('fs')

class HandlebarsTemplate {
  handlebars = handlebars

  async registerPartialFile (file) {
    handlebars.registerPartial(
      path.basename(file, '.hbs'),
      fs.readFileSync(file, 'utf8') || ''
    )
  }

  generate (template, templateData) {
    const compiled = handlebars.compile(template, {
      preventIndent: true,
      strict: false
    })
    return compiled(templateData)
  }
}

module.exports = HandlebarsTemplate
