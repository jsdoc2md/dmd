'use strict'
var handlebars = require('handlebars')
var ddata = require('./ddata')

exports.identifiers = identifiers
exports.identifier = identifier
exports.orphans = orphans
exports.globals = globals
exports.modules = modules
exports.module = module
exports.classes = classes
exports.class = class_
exports.functions = functions
exports.function = function_
exports.namespace = namespace
exports.enum = enum_
exports.misc = misc

/**
render the supplied block for each identifier in the query
@static
@category Block helper: selector
*/
function identifiers (options) {
  return handlebars.helpers.each(ddata._identifiers(options), options)
}

/**
render the supplied block for each parent (global identifier, or module)
@static
@category Block helper: selector
*/
function orphans (options) {
  return handlebars.helpers.each(ddata._orphans(options), options)
}

/**
render the supplied block for each parent (global identifier, or module)
@static
@category Block helper: selector
*/
function globals (options) {
  return handlebars.helpers.each(ddata._globals(options), options)
}

/**
render the supplied block for each module
@static
@category Block helper: selector
*/
function modules (options) {
  options.hash.kind = 'module'
  // console.log(ddata._identifiers(options))
  return handlebars.helpers.each(ddata._identifiers(options), options)
}

/**
render the supplied block for the specified module
@static
@category Block helper: selector
*/
function module (options) {
  options.hash.kind = 'module'
  var result = ddata._identifiers(options)[0]
  return result ? options.fn(result) : 'ERROR, Cannot find module.'
}

/**
render the supplied block for the specified identifier
@static
@category Block helper: selector
*/
function identifier (options) {
  var result = ddata._identifier(options)
  return result ? options.fn(result) : 'ERROR, Cannot find identifier.'
}

/**
render the block for each class
@static
@category Block helper: selector
*/
function classes (options) {
  options.hash.kind = 'class'
  return handlebars.helpers.each(ddata._identifiers(options), options)
}

/**
render the block for each function/method
@static
@category Block helper: selector
*/
function functions (options) {
  options.hash.kind = 'function'
  return handlebars.helpers.each(ddata._identifiers(options), options)
}

/**
render the supplied block for the specified class
@category Block helper: selector
*/
function class_ (options) {
  options.hash.kind = 'class'
  var result = ddata._identifier(options)
  return result ? options.fn(result) : 'ERROR, Cannot find class.'
}

/**
render the supplied block for the specified function
@category Block helper: selector
*/
function function_ (options) {
  options.hash.kind = 'function'
  var result = ddata._identifier(options)
  return result ? options.fn(result) : 'ERROR, Cannot find function.'
}

/**
render the supplied block for the specified function
@category Block helper: selector
*/
function namespace (options) {
  options.hash.kind = 'namespace'
  var result = ddata._identifier(options)
  return result ? options.fn(result) : 'ERROR, Cannot find namespace.'
}

/**
render the supplied block for the specified enum
@category Block helper: selector
*/
function enum_ (options) {
  options.hash.kind = 'member'
  options.hash.isEnum = true
  var result = ddata._identifier(options)
  return result ? options.fn(result) : 'ERROR, Cannot find enum.'
}

/**
render the supplied block for each orphan with no scope set
@static
@category Block helper: selector
*/
function misc (options) {
  options.hash.scope = undefined
  options.hash['!kind'] = /module|constructor|external/
  options.hash['!isExported'] = true
  return handlebars.helpers.each(ddata._identifiers(options), options)
}
