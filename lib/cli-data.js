exports.definitions = [
  { name: 'heading-depth', type: Number, alias: 'd', defaultValue: 2,
    description: 'root heading depth, defaults to 2 (`##`).'
  },
  { name: 'param-list-format', type: String, alias: 'p',
    description: "Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed. "
  },
  { name: 'skip-heading', type: Boolean },
  { name: 'separators', type: Boolean },
  { name: 'example-lang', type: String, alias: 'l',
    description: 'Specifies the default language used in @example blocks (for syntax-highlighting purposes). In gfm mode, each @example is wrapped in a fenced-code block. Example usage: `--example-lang js`. Use the special value `none` for no specific language. While using this option, you can override the supplied language for any @example by specifying the `@lang` subtag, e.g `@example @lang hbs`. Specifying `@example @lang off` will disable code blocks for that example.'
  }
]
