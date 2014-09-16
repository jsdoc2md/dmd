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
exports.children = children;
exports.exported = exported;

/**
Returns an array of the top-level elements which have no parents
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
@returns {array}
*/
function identifiers(options){
    var query = {};
    var sortBy = options.hash.sortBy;
    delete options.hash.sortBy;
    
    for (var prop in options.hash){
        query[prop] = options.hash[prop];
    }
    return sort(a.where(options.data.root, query), sortBy);
}

function sort(array, sortBy){
    if (sortBy === "kind"){
        return array.sort(sortByKind);
    } else {
        return array;
    }
}

function sortByKind(a, b){
    var order = ["member", "function", "namespace", "constant", "typedef", "event", "class"];
    return order.indexOf(a.kind) - order.indexOf(b.kind);
}

/**
@context {identifier}
@returns {boolean}
*/
function isExported(options){
    var output =
        this.kind !== "module" &&
        a.exists(options.data.root, { kind: "module", longname: this.longname });
    return output;
}

/**
returns a unique ID string suitable for use as an `href`.
@context {identifier}
@returns {string}
*/
function anchorName(options){
    if (!this.longname) throw new Error("[anchorName helper] cannot create a link without a longname");
    return util.format(
        "%s%s%s", 
        isExported.call(this, options) ? "exp_" : "",
        this.isConstructor ? "new_" : "", 
        this.longname.replace(/:/g, "_").replace(/~/g, "..")
    );
}

/**
return the indentifiers which are a `memberof` this one
@params [sortBy] {string} - "kind"
@context {identifier}
@returns {identifier[]}
*/
function children(options){
    if (this.kind === "module"){
        var exp = exported.call(this, options);
        if (exp.kind === "class"){
            return [];
        } else {
            return sort(a.where(options.data.root, { memberof: this.longname }), options.hash.sortBy);
        }
    } else {
        return sort(a.where(options.data.root, { memberof: this.longname }), options.hash.sortBy);
    }
}

/**
returns the exported identifier of this module
@context {identifier} - only works on a module
@returns {identifier}
*/
function exported(options){
    var exported = a.findWhere(options.data.root, { "!kind": "module", name: this.longname });
    return exported || this;
}
