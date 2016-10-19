'use strict'

/**
 * @module dmd
 */
module.exports = dmd

var path = require('path')
var Cache = require('cache-point')
var DmdOptions = require('./dmd-options')

/**
 * Transforms doclet data into markdown documentation.
 * @param {object[]}
 * @param [options] {module:dmd-options} - The render options
 * @return {string}
 * @alias module:dmd
 */
function dmd (templateData, options) {
  options = new DmdOptions(options)
  if (skipCache(options)) {
    return generate(templateData, options)
  } else {
    var cached = dmd.cache.readSync([ templateData, options ])
    if (cached) {
      return cached
    } else {
      return generate(templateData, options)
    }
  }
}

dmd.async = function (templateData, options) {
  options = new DmdOptions(options)
  if (skipCache(options)) {
    return Promise.resolve(generate(templateData, options))
  } else {
    return dmd.cache.read([ templateData, options ])
      .catch(function () {
        return generate(templateData, options)
      })
  }
}

dmd.cache = new Cache({ dir: path.join(require('os').tmpdir(), 'dmd') })

function generate (templateData, options) {
  require('core-js/modules/es6.object.assign')
  require('core-js/modules/es6.string.repeat')
  var fs = require('fs')
  var path = require('path')
  var arrayify = require('array-back')
  var handlebars = require('handlebars')
  var walkBack = require('walk-back')
  var DmdOptions = require('./dmd-options')
  var FileSet = require('file-set')

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

  /* Register handlebars helper modules */
  ;[ '../helpers/helpers', '../helpers/ddata', '../helpers/selectors' ].forEach(function (modulePath) {
    handlebars.registerHelper(require(modulePath))
  })

  var inputData = templateData.map(function (row) {
    return Object.assign({}, row)
  })
  var inputOptions = Object.assign({}, options)

  templateData = arrayify(templateData)
  options = Object.assign(new DmdOptions(), options)
  options.plugin = arrayify(options.plugin)
  options._depth = 0
  options._indexDepth = 0

  /* state module, for sharing with the helpers */
  var state = require('./state')
  state.templateData = templateData
  state.options = options

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
  templateData.options = options
  var output = compiled(templateData)
  dmd.cache.writeSync([ inputData, inputOptions ], output)
  return output
}

function skipCache (options) {
  return options.noCache || options.plugin.length || options.partial.length || options.helper.length
}
