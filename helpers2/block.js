var util = require("util");
var dataHelpers = require("./data");
var marked = require("marked");

exports.link = link;
exports.identifiers = identifiers;
exports.md = md;
exports.eachChildren = eachChildren;

/**
Returns a markdown anchor-link to the 
@context {identifier}
@returns {string}
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
@returns {string}
*/
function md(options){
    return marked(options.fn(this).toString());
}

/**
render the supplied block for each identifier in the query
@returns {string}
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
@returns {string}
*/
function eachChildren(options){
    var c = dataHelpers.children.call(this, options);
    return c.reduce(function(prev, curr){
        return prev + options.fn(curr);
    }, "");
}
