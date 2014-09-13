var a = require("array-tools");

/**
helpers which return data
@module
*/
exports.parents = parents;
exports.identifiers = identifiers;

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
    var query = {};
    for (var prop in options.hash){
        query[prop] = options.hash[prop];
    }
    return a.where(options.data.root, query).sort(groupByKind);
}

function groupByKind(a, b){
    var order = ["member", "function", "namespace", "constant", "typedef", "event", "class"];

    return order.indexOf(a.kind) - order.indexOf(b.kind);
}
