const path = require('path')
const Cache = require('cache-point')
const DmdOptions = require('./lib/dmd-options')
const FileSet = require('file-set')
const os = require('os')
const fs = require('fs')
const partialCache = require('./partials/partial-cache.js')

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, './package.json'), 'utf8'))
const dmdVersion = pkg.version

/**
 * Transforms doclet data into markdown documentation.
 * @param {object[]}
 * @param [options] {module:dmd-options} - The render options
 * @return {Promise<string>}
 * @alias module:dmd
 */
async function dmd (templateData, options) {
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

dmd.cache = new Cache({ dir: path.join(os.tmpdir(), 'dmd') })

async function generate (templateData, options) {
  const fs = require('fs')
  const path = require('path')
  const arrayify = require('array-back')
  const handlebars = require('handlebars')
  const walkBack = require('walk-back')
  const DmdOptions = require('./lib/dmd-options')

  async function registerPartials (paths) {
    const fileSet = new FileSet()
    await fileSet.add(paths)
    for (const file of fileSet.files) {
      handlebars.registerPartial(
        path.basename(file, '.hbs'),
        fs.readFileSync(file, 'utf8') || ''
      )
    }
  }

  async function registerHelpers (helpers) {
    const fileSet = new FileSet()
    await fileSet.add(helpers)
    for (const file of fileSet.files) {
      handlebars.registerHelper(require(path.resolve(process.cwd(), file)))
    }
  }

  /* Register handlebars helper modules */
  ;['./helpers/helpers', './helpers/ddata', './helpers/selectors'].forEach(function (modulePath) {
    handlebars.registerHelper(require(modulePath))
  })

  const inputData = templateData.map(function (row) {
    return Object.assign({}, row)
  })
  const inputOptions = Object.assign({}, options)

  templateData = arrayify(templateData)
  options = Object.assign(new DmdOptions(), options)
  options.plugin = arrayify(options.plugin)
  options._depth = 0
  options._indexDepth = 0

  /* state module, for sharing with the helpers */
  const state = require('./lib/state')
  state.templateData = templateData
  state.options = options

  /* register all internal dmd partials. */
  for (const [name, content] of partialCache) {
    handlebars.registerPartial(name, content)
  }

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

  /* if additional partials/helpers paths were specified, register them too */
  if (options.partial.length) await registerPartials(options.partial)
  if (options.helper.length) await registerHelpers(options.helper)

  const compiled = handlebars.compile(options.template, {
    preventIndent: true,
    strict: false
  })
  templateData.options = options
  const output = compiled(templateData)
  dmd.cache.writeSync([inputData, inputOptions, dmdVersion], output)
  return output
}

/* always skip the cache when custom plugins, partials or helpers are used */
function skipCache (options) {
  return options.noCache || options.plugin.length || options.partial.length || options.helper.length
}

module.exports = dmd
