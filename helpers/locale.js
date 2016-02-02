'use strict'
var catalogue = require('dmd-locale-en-gb')
var o = require('object-tools')

/**
@module localisation
*/
exports._ = _
exports.extendCatalogue = function (newCatalogue) {
  catalogue = o.extend(catalogue, newCatalogue)
}

/**
returns the appropriate value from the locale
@returns {string}
*/
function _ (expression) {
  return o.get(catalogue, expression)
}
