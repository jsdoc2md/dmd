"use strict";
var util = require("util");
var listHelpers = require("./list");
var singleHelpers = require("./single");
var boil = require("boil-js");

exports.identifiers = identifiers;
exports.orphans = orphans;
exports.globals = globals;
exports.modules = modules;
exports.module = module;
exports.classes = classes;
exports.class = class_;
exports.misc = misc;

/**
render the supplied block for each identifier in the query
*/
function identifiers(options){
    return boil._handlebars.helpers.each(listHelpers.identifiers(options), options);
}

/**
render the supplied block for each parent (global identifier, or module)
*/
function orphans(options){
    return boil._handlebars.helpers.each(listHelpers.orphans(options), options);
}

/**
render the supplied block for each parent (global identifier, or module)
*/
function globals(options){
    options.hash = { scope: "global" };
    return boil._handlebars.helpers.each(listHelpers.identifiers(options), options);
}

/**
render the supplied block for each module
*/
function modules(options){
    options.hash = { kind: "module" };
    return boil._handlebars.helpers.each(listHelpers.identifiers(options), options);
}

/**
render the supplied block for the specified module
*/
function module(options){
    options.hash.kind = "module";
    var result = listHelpers.identifiers(options)[0];
    return result ? options.fn(result) : "ERROR, Cannot find module. Query: ";
}

/**
render the block for each class
*/
function classes(options){
    options.hash = { kind: "class" };
    return boil._handlebars.helpers.each(listHelpers.identifiers(options), options);
}

/**
render the supplied block for the specified class
*/
function class_(options){
    options.hash.kind = "class";
    var result = listHelpers.identifiers(options)[0];
    return result ? options.fn(result) : "ERROR, Cannot find class. Query: ";
}


/**
render the supplied block for each orphan with no scope set
*/
function misc(options){
    options.hash = { scope: undefined, "!kind": /module|constructor/, "!isExported": true };
    return boil._handlebars.helpers.each(listHelpers.identifiers(options), options);
}
