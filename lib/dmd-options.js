'use strict'

/**
 * @module dmd-options
 */
module.exports = DmdOptions

/**
 * @class
 * @classdesc All dmd options and their defaults
 * @alias module:dmd-options
 */
function DmdOptions () {
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
   * Use an installed package containing helper and/or partial overrides
   * @type {array}
   */
  this.plugin = []

  /**
   * handlebars helper files to override or extend the default set
   * @type {array}
   */
  this.helper = []

  /**
   * handlebars partial files to override or extend the default set
   * @type {array}
   */
  this.partial = []

  /**
   * Format identifier names in the [code](http://daringfireball.net/projects/markdown/syntax#code) style, (i.e. format using backticks or `<code></code>`)
   * @type {string}
   */
  this['name-format']

  /**
   * By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax.
   * @type {boolean}
   */
  this['no-gfm']

  /**
   * Put `<hr>` breaks between identifiers. Improves readability on bulky docs.
   * @type {boolean}
   * @default
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
   * a list of fields to group member indexes by
   * @type {array}
   * @default
   */
  this['group-by'] = [ 'scope', 'category' ]
}
