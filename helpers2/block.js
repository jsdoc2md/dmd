var util = require("util");
var dataHelpers = require("./data");
var marked = require("marked");

exports.link = link;
exports.identifiers = identifiers;
exports.md = md;
exports.eachChildren = eachChildren;
exports.ifClass = ifClass;
exports.ifConstructor = ifConstructor;
exports.ifConstant = ifConstant;
exports.ifEvent = ifEvent;
exports.ifEnum = ifEnum;
exports.ifTypedef = ifTypedef;
exports.ifCallback = ifCallback;

/**
Returns a markdown anchor-link to the 
@context {identifier}
@example
`{{#link}}{{>name}}{{/link}}` returns 
*/
function link(options){
    return util.format(
        "[%s](#%s)", 
        options.fn(this), 
        dataHelpers.anchorName.call(this, options)
    );
}

/**
converts the supplied text to markdown
*/
function md(options){
    return marked(options.fn(this).toString());
}

/**
render the supplied block for each identifier in the query
*/
function identifiers(options){
    var identifiers = dataHelpers.identifiers(options);
    return identifiers.reduce(function(prev, curr){
        return prev + options.fn(curr);
    }, "");
}

/**
render the supplied block for each child of the current identifier
@context {identifier}
*/
function eachChildren(options){
    var c = dataHelpers.children.call(this, options);
    return c.reduce(function(prev, curr){
        return prev + options.fn(curr);
    }, "");
}

function ifClass(options){
    if (this.kind === "class") return options.fn(this);
}
function ifConstructor(options){
    if (this.kind === "constructor") return options.fn(this);
}
function ifConstant(options){
    if (this.kind === "constant") return options.fn(this);
}
function ifEvent(options){
    if (this.kind === "event") return options.fn(this);
}
function ifEnum(options){
    if (this.isEnum) return options.fn(this);
}
function ifTypedef(options){
    if (this.kind === "typedef" && this.type.names[0] !== "function") return options.fn(this);
}
function ifCallback(options){
    if (this.kind === "typedef" && this.type.names[0] === "function") return options.fn(this);
}
