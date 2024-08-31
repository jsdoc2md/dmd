const handlebars = require('handlebars')

class HandlebarsTemplate {
  handlebars = handlebars

  generate (template, templateData) {
    const compiled = handlebars.compile(template, {
      preventIndent: true,
      strict: false
    })
    return compiled(templateData)
  }
}

module.exports = HandlebarsTemplate
