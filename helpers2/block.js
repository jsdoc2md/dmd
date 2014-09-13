var util = require("util");
var dataHelpers = require("./data");

exports.link = link;
exports.identifiers = identifiers;

/**
Returns a markdown link to the 
*/
function link(options){
    return util.format(
        "[%s](#%s)", 
        options.fn(this), 
        handlebars.helpers.anchorName.call(this, options)
    );
}

function identifiers(options){
    var identifiers = dataHelpers.identifiers(options);
    return identifiers.reduce(function(prev, curr){
        return prev + options.fn(curr);
    }, "");
}
