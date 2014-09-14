var a = require("array-tools");
var util = require("util");

/**
helpers which return data
@module
*/
exports.parents = parents;
exports.identifiers = identifiers;
exports.isExported = isExported;
exports.anchorName = anchorName;

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

/**
Returns an array of identifiers matching the query
@params [sortBy] {string} - "kind" will sort by kind
*/
function identifiers(options){
    var query = {};
    var sortBy = options.hash.sortBy;
    delete options.hash.sortBy;
    
    for (var prop in options.hash){
        query[prop] = options.hash[prop];
    }
    var output = a.where(options.data.root, query);
    if (sortBy === "kind") output = output.sort(sortByKind);
    return output;
}

function sortByKind(a, b){
    var order = ["member", "function", "namespace", "constant", "typedef", "event", "class"];
    return order.indexOf(a.kind) - order.indexOf(b.kind);
}

function isExported(options){
    var output =
        this.kind !== "module" &&
        a.exists(options.data.root, { kind: "module", longname: this.longname });
    return output;
}

function anchorName(options){
    if (!this.longname) throw new Error("[anchorName helper] cannot create a link without a longname");
    return util.format(
        "%s%s%s", 
        isExported.call(this, options) ? "exp_" : "",
        this.isConstructor ? "new_" : "", 
        this.longname.replace(/:/g, "_").replace(/~/g, "..")
    );
}
