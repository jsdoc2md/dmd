var a = require("array-tools");
var util = require("util");
var dataHelpers = require("./data");

/**
helpers which return booleans
@module
*/
exports.isClass = isClass;
exports.isConstructor = isConstructor;
exports.isFunction = isFunction;
exports.isConstant = isConstant;
exports.isEvent = isEvent;
exports.isEnum = isEnum;
exports.isTypedef = isTypedef;
exports.isCallback = isCallback;
exports.isModule = isModule;
exports.isMixin = isMixin;
exports.showMainIndex = showMainIndex;

/**
@context {identifier}
@returns {boolean}
*/
function isClass(){
    return this.kind === "class";
}
function isConstructor(){
    return this.kind === "constructor";
}
function isFunction(){
    return this.kind === "function";
}
function isConstant(){
    return this.kind === "constant";
}
function isEvent(){
    return this.kind === "event";
}
function isEnum(){
    return this.isEnum;
}
function isTypedef(){
    return this.kind === "typedef" && this.type.names[0] !== "function";
}
function isCallback(){
    return this.kind === "typedef" && this.type.names[0] === "function";
}
function isModule(){
    return this.kind === "module";
}
function isMixin(){
    return this.kind === "mixin";
}
function showMainIndex(options){
    return dataHelpers.orphans.call(this, options).length > 1;
}
