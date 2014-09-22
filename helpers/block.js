"use strict";
var util = require("util");
var listHelpers = require("./list");
var boil = require("boil-js");

exports.identifiers = identifiers;
exports.orphans = orphans;
exports.globals = globals;
exports.modules = modules;
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
render the supplied block for each module
*/
function modules(options){
    options.hash = { kind: "module" };
    return boil._handlebars.helpers.each(listHelpers.identifiers(options), options);
}

/**
render the supplied block for each orphan with no scope set
*/
function misc(options){
    options.hash = { scope: undefined, "!kind": /module|constructor/, "!isExported": true };
    return boil._handlebars.helpers.each(listHelpers.identifiers(options), options);
}
