exports.definitions = [
  { name: 'heading-depth', type: Number, alias: 'd', defaultValue: 2,
    description: 'root heading depth, defaults to 2 (`##`).'
  },
  { name: 'param-list-format', type: String, alias: 'p',
    description: "Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed. "
  }
]
