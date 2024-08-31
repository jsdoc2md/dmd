/**
 * @typicalname options
 */
function DmdOptions (options = {}) {
  const arrayify = require('array-back')

  /**
  * The template the supplied documentation will be rendered into. Use the default or supply your own template for full control over the output.
  * @type {string}
  * @default
  */
  this.template = '{{>main}}'

  /**
   * The initial heading depth. For example, with a value of `2` the top-level markdown headings look like `"## The heading"`.
   * @type number
   * @default
   */
  this['heading-depth'] = 2

  /**
   * Specifies the default language used in @example blocks (for [syntax-highlighting](https://help.github.com/articles/github-flavored-markdown/#syntax-highlighting) purposes). In gfm mode, each @example is wrapped in a fenced-code block. Example usage: `--example-lang js`. Use the special value `none` for no specific language. While using this option, you can override the supplied language for any @example by specifying the `@lang` subtag, e.g `@example @lang hbs`. Specifying `@example @lang off` will disable code blocks for that example.
   * @type {string}
   * @default
   */
  this['example-lang'] = 'js'

  /**
   * Format identifier names in the [code](http://daringfireball.net/projects/markdown/syntax#code) style, (i.e. format using backticks or `<code></code>`)
   * @type {string}
   */
  this['name-format'] = undefined

  /**
   * By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax.
   * @type {boolean}
   */
  this['no-gfm'] = false

  /**
   * Put `<hr>` breaks between identifiers. Improves readability on bulky docs.
   * @type {boolean}
   * @default false
   */
  this.separators = false

  /**
   * none, grouped, table, dl
   * @type {string}
   * @default
   */
  this['module-index-format'] = 'dl'

  /**
   * none, grouped, table, dl
   * @type {string}
   * @default
   */
  this['global-index-format'] = 'dl'

  /**
   * Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed.
   * @type {string}
   * @default
   */
  this['param-list-format'] = 'table'

  /**
   * list, table
   * @type {string}
   * @default
   */
  this['property-list-format'] = 'table'

  /**
   * grouped, list
   * @type {string}
   * @default
   */
  this['member-index-format'] = 'grouped'

  /**
   * By default, all {@link} tags are rendered in plain text. If `--clever-links` is set, URL {@link} tags are rendered in plain text, otherwise monospace.
   * @type {boolean}
   * @dafult
   */
  this['clever-links'] = false

  /**
   * By default, all {@link} tags are rendered in plain text. If `--monospace-links` is set, all links are rendered in monospace format. This setting is ignored if `--clever-links` is set.
   * @type {boolean}
   * @default
   */
  this['monospace-links'] = false

  /**
   * Show identifiers marked `@private` in the output.
   * @type {boolean}
   * @default false
   */
  this.private = false

  /**
   * By default results are cached to speed up repeat invocations. Set to true to disable this.
   * @type {boolean}
   * @default false
   */
  this.noCache = false

  Object.assign(this, options)

  /* Group-by settings are currently fixed */
  this['group-by'] = ['scope', 'category']

  /**
   * Use an installed package containing helper and/or partial overrides
   * @type {array}
   */
  this.plugin = arrayify(options.plugin)

  /**
   * handlebars helper files to override or extend the default set
   * @type {array}
   */
  this.helper = arrayify(options.helper)

  /**
   * handlebars partial files to override or extend the default set
   * @type {array}
   */
  this.partial = arrayify(options.partial)

  /**
   * Specify ether `posix` or `win32`. Forces all line endings in the dmd output to use the specified EOL character.
   * @type {string}
   */
  this.EOL = options.EOL
}

module.exports = DmdOptions
