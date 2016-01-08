${
  doclets
    .filterByKind('module')
    .map(d => d.render())
    .join('\n')
}
