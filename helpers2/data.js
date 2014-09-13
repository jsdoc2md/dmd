var a = require("array-tools");

/**
helpers which return data
@module
*/
exports.parents = parents;

/**
Returns an array of the parent elements
@returns {array} 
*/
function parents(options){
    return a.where(options.data.root, {
        "!kind": /module|package/,
        memberof: undefined,
        "!longname": /^module:/
    }).concat(a.where(options.data.root, {
        kind: "module"
    }));
}

function identifiers(options){
    
}
