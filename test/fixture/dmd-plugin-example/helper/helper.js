exports.generatedDate = function () {
  return new Date().toUTCString()
}

exports.orphans = function () {
  return 'Orphans Override.\n'
}
