'use strict'
const catalogue = require('dmd-locale-en-gb')
const get = require('object-get')

/**
@module localisation
*/
exports._ = _
exports.extendCatalogue = function (newCatalogue) {
  /* rewrite using Object.assign */
  catalogue = o.extend(catalogue, newCatalogue)
}

/**
returns the appropriate value from the locale
@returns {string}
*/
function _ (expression) {
  return get(catalogue, expression)
}
