'use strict'

/**
 * @module dmd
 */
module.exports = dmd

var path = require('path')
var Cache = require('cache-point')
/**
 * The [cache-point](https://github.com/75lb/cache-point) instance used when `cache: true` is specified on `.explain()`, `.explainSync()` or `.createExplainStream()`.
 * @type {external:cache-point}
 */
dmd.cache = new Cache({ dir: path.join(require('os').tmpdir(), 'dmd') })


/**
 * Transforms doclet data into markdown documentation.
 * @param {object[]}
 * @param [options] {module:dmd-options} - The render options
 * @return {string}
 * @alias module:dmd
 */
function dmd (jsdocParseData, options) {
  var cached = dmd.cache.readSync([ jsdocParseData, options ])
  if (cached) {
    return cached
  } else {
    return generate(jsdocParseData, options)
  }
}

dmd.async = function (jsdocParseData, options) {
  return dmd.cache.read([ jsdocParseData, options ])
    .catch(() => generate(jsdocParseData, options))
}


function generate (jsdocParseData, options) {
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
  ;[ '../helpers/helpers', '../helpers/ddata', 'handlebars-string', 'handlebars-regexp', 'handlebars-comparison', 'handlebars-json', 'handlebars-array' ].forEach(function (modulePath) {
    handlebars.registerHelper(require(modulePath))
  })

  var inputData = jsdocParseData.map(function (row) {
    return Object.assign({}, row)
  })
  var inputOptions = Object.assign({}, options)

  jsdocParseData = arrayify(jsdocParseData)
  options = Object.assign(new DmdOptions(), options)
  options.plugin = arrayify(options.plugin)
  options._depth = 0
  options._indexDepth = 0

  /* state module, for sharing with the helpers */
  var state = require('./state')
  state.jsdocParseData = jsdocParseData
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
  jsdocParseData.options = options
  var output = compiled(jsdocParseData)
  dmd.cache.writeSync([ inputData, inputOptions ], output)
  return output
}
