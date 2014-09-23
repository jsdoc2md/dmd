var a = require("array-tools");
var util = require("util");

/**
helpers which return data
@module
*/
exports.orphans = orphans;
exports.identifiers = identifiers;
exports.children = children;
exports.descendants = descendants;

/**
Returns an array of the top-level elements which have no parents
@returns {array}
*/
function orphans(options){
    return a.where(options.data.root, {
        memberof: undefined
    });
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
    if (sortBy === "none"){
        return array;
    } else if (sortBy === "kind"){
        return array.sort(sortByKind);
    } else if (sortBy === "scope"){
        return array.sort(sortByScope);
    } else if (sortBy === "kind,scope"){
        return array.sort(sortByKindScope);
    } else if (sortBy === "scope,kind"){
        return array.sort(sortByScopeKind);
    } else {
        return array.sort(sortByProperty(sortBy));
    }
}

var order = {
    kind: ["constructor", "member", "function", "namespace", "constant", "typedef", "event", "class"],
    scope: ["instance", "static", "global", "inner"]
};

function sortByKind(a, b){
    return order.kind.indexOf(a.kind) - order.kind.indexOf(b.kind);
}
function sortByKindScope(a, b){
    var result = order.kind.indexOf(a.kind) - order.kind.indexOf(b.kind);
    return result === 0 ? sortByScope(a, b) : result;
}
function sortByScope(a, b){
    return order.scope.indexOf(a.scope) - order.scope.indexOf(b.scope);
}
function sortByScopeKind(a, b){
    var result = order.scope.indexOf(a.scope) - order.scope.indexOf(b.scope);
    return result === 0 ? sortByKind(a, b) : result;
}
function  sortByProperty(property){
    return function(a, b){
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    };
}

/**
return the indentifiers which are a `memberof` this one
@params [sortBy] {string} - "kind"
@params [min] {number} - only returns if there are `min` children
@context {identifier}
@returns {identifier[]}
*/
function children(options){
    var min = options.hash.min;
    delete options.hash.min;
    options.hash.memberof = this.id;
    var output = identifiers(options);
    if (output.length >= (min || 0)) return output;
}

/**
return a flat list containing all decendants
@params [sortBy] {string} - "kind"
@params [min] {number} - only returns if there are `min` children
@context {identifier}
@returns {identifier[]}
*/
function descendants(options){
    var min = options.hash.min;
    delete options.hash.min;
    options.hash.memberof = this.id;
    var output = [];
    function iterate(childrenList){
        if (childrenList.length){
            childrenList.forEach(function(child){
                output.push(child);
                iterate(children.call(child, options));
            });
        }
    }
    iterate(children.call(this, options));
    if (output.length >= (min || 0)) return output;
}
