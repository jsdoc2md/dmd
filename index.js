const path = require('path')
const fs = require('fs')
const Cache = require('cache-point')
const DmdOptions = require('./lib/dmd-options')
const FileSet = require('file-set')
const os = require('os')
const partialCache = require('./partials/partial-cache.js')
const arrayify = require('array-back')
const walkBack = require('walk-back')
const HandlebarsTemplate = require('./lib/handlebars-template.js')

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, './package.json'), 'utf8'))
const dmdVersion = pkg.version

/**
 * @module dmd
 */

/**
 * Transforms jsdoc-parse data into markdown documentation.
 * @param {object[]}
 * @param [options] {module:dmd-options} - The render options
 * @return {Promise<string>}
 * @alias module:dmd
 */
async function dmd (templateData = [], options) {
  options = new DmdOptions(options)
  if (skipCache(options)) {
    return generate(templateData, options)
  } else {
    try {
      const result = await dmd.cache.read([templateData, options, dmdVersion])
      return result
    } catch (err) {
      /* cache miss */
      return generate(templateData, options)
    }
  }
}

/* Expose cache so `jsdoc2md --clear` command can access it */
dmd.cache = new Cache({ dir: path.join(os.tmpdir(), 'dmd') })

async function loadPartialFiles (paths) {
  const fileSet = new FileSet()
  await fileSet.add(paths)
  return fileSet.files.map(file => {
    return [
      path.basename(file, '.hbs'),
      fs.readFileSync(file, 'utf8') || ''
    ]
  })
}

async function loadHelperFiles (helpers) {
  const fileSet = new FileSet()
  await fileSet.add(helpers)
  return fileSet.files.map(file => {
    return require(path.resolve(process.cwd(), file))
  })
}

function validateIncomingTemplateData (templateData) {
  const moduleTagRequired = templateData.filter(d => d.id === 'module.exports' && d.memberof === 'module')
  if (moduleTagRequired.length) {
    for (const doclet of moduleTagRequired) {
      console.warn(`Module tag required in this file: ${doclet.meta.path}${path.sep}${doclet.meta.filename}`)
      console.warn('See the wiki for an explanation: https://github.com/jsdoc2md/jsdoc-to-markdown/wiki/How-to-document-an-ES2015-module-(single-default-export)')
    }
  }
}

async function generate (templateData, options) {
  validateIncomingTemplateData(templateData)
  const handlebarsTemplate = new HandlebarsTemplate()

  /* Copy input data */
  const inputData = templateData.map(row => Object.assign({}, row))
  const inputOptions = Object.assign({}, options)

  /* used by helpers.headingDepth */
  options._depth = 0
  /* used by helpers.indexDepth */
  options._indexDepth = 0
  /* This gives all helper code access to the dmd options */
  templateData.options = options

  /* state module, for sharing data between the helpers - functions as a global object */
  const state = require('./lib/state')
  state.templateData = templateData
  state.options = options

  /* if plugins were specified, register the helpers/partials from them too */
  if (options.plugin) {
    for (let i = 0; i < options.plugin.length; i++) {
      const plugin = options.plugin[i]
      let modulePath = ''

      /* user supplied an existing path */
      if (fs.existsSync(path.resolve(plugin))) {
        modulePath = path.resolve(plugin)
      /* else user supplied a module name, search npm installed modules */
      } else {
        modulePath = walkBack(process.cwd(), path.join('node_modules', plugin))
      }

      if (modulePath) {
        /* load the plugin options */
        const pluginOptions = require(modulePath)(options)
        options.partial = options.partial.concat(pluginOptions.partial)
        options.helper = options.helper.concat(pluginOptions.helper)
      } else {
        throw new Error('Cannot find plugin: ' + plugin)
      }
    }
  }

  /* register all internal and external dmd partials. */
  const internalPartials = Array.from(partialCache)
  const externalPartials = await loadPartialFiles(options.partial)
  for (const [name, content] of [...internalPartials, ...externalPartials]) {
    handlebarsTemplate.handlebars.registerPartial(name, content)
  }

  /* Register internal helpers first so they can be overriden by user-defined helpers */
  const internalHelpers = [require('./helpers/helpers.js'), require('./helpers/ddata.js'), require('./helpers/selectors.js')]
  const externalHelpers = await loadHelperFiles(options.helper)
  for (const helper of [...internalHelpers, ...externalHelpers]) {
    handlebarsTemplate.handlebars.registerHelper(helper)
  }

  let output = handlebarsTemplate.generate(options.template, templateData)

  if (options.EOL) {
    output = output.replace(/\r?\n/gm, options.EOL === 'posix' ? '\n' : '\r\n')
  }

  dmd.cache.writeSync([inputData, inputOptions, dmdVersion], output)
  return output
}

/* always skip the cache when custom plugins, partials or helpers are used */
function skipCache (options) {
  return options.noCache || options.plugin.length || options.partial.length || options.helper.length
}

module.exports = dmd
