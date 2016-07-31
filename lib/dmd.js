'use strict'
var handlebars = require('handlebars')
var FileSet = require('file-set')
var fs = require('fs')
var path = require('path')
var o = require('object-tools')
var arrayify = require('array-back')
var walkBack = require('walk-back')
var DmdOptions = require('./dmd-options')

/* Register handlebars helper modules */
;[ '../helpers/helpers', 'ddata', 'handlebars-string', 'handlebars-regexp', 'handlebars-comparison', 'handlebars-json', 'handlebars-array' ].forEach(function (modulePath) {
  handlebars.registerHelper(require(modulePath))
})

/**
 * @module dmd
 */
module.exports = dmd

/**
 * Transforms doclet data into markdown documentation.
 * @param {object[]}
 * @param [options] {module:dmd-options} - The render options
 * @return {string}
 * @alias module:dmd
 */
function dmd (jsdocParseData, options) {
  jsdocParseData = arrayify(jsdocParseData)
  options = o.extend(new DmdOptions(), options)
  options.plugin = arrayify(options.plugin)
  options._depth = 0
  options._indexDepth = 0

  /* register all dmd partials. */
  registerPartials(path.resolve(__dirname, '..', 'partials/**/*.hbs'))

  /* if plugins were specified, register the helpers/partials from them too */
  if (options.plugin) {
    for (var i = 0; i < options.plugin.length; i++) {
      var plugin = options.plugin[i]
      var modulePath = ''

      /* user supplied an existing path */
      if (fs.existsSync(path.resolve(plugin))) {
        modulePath = path.resolve(plugin)
      /* else user supplied a module name, search npm installed modules */
      } else {
        modulePath = walkBack(process.cwd(), path.join('node_modules', plugin))
      }

      if (modulePath) {
        /* load the plugin options */
        var pluginOptions = require(modulePath)(options)
        options.partial = options.partial.concat(pluginOptions.partial)
        options.helper = options.helper.concat(pluginOptions.helper)
      } else {
        throw new Error('Cannot find plugin: ' + plugin)
      }
    }
  }

  /* if additional partials/helpers paths were specified, register them too */
  if (options.partial.length) registerPartials(options.partial)
  if (options.helper.length) registerHelpers(options.helper)

  var compiled = handlebars.compile(options.template, {
    preventIndent: true,
    strict: false
  })
  jsdocParseData.options = options
  return compiled(jsdocParseData)
}

function registerPartials (paths) {
  var fileSet = new FileSet(paths)
  fileSet.files.forEach(function (file) {
    handlebars.registerPartial(
      path.basename(file, '.hbs'),
      fs.readFileSync(file, 'utf8') || ''
    )
  })
}

function registerHelpers (helpers) {
  var fileSet = new FileSet(helpers)
  fileSet.files.forEach(function (file) {
    handlebars.registerHelper(require(path.resolve(process.cwd(), file)))
  })
}

/**
 * @external Transform
 * @see http://nodejs.org/api/stream.html#stream_class_stream_transform
 */
