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
exports.isClass = isClass;
exports.isConstructor = isConstructor;
exports.isFunction = isFunction;
exports.isConstant = isConstant;
exports.isEvent = isEvent;
exports.isEnum = isEnum;
exports.isTypedef = isTypedef;
exports.isCallback = isCallback;
exports.isModule = isModule;
exports.methodSig = methodSig;
exports.aliasName = aliasName;
exports.parentName = parentName;

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
    var exported = a.findWhere(options.data.root, { "!kind": "module", longname: this.longname });
    return exported || this;
}

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

/**
Returns the method signature, e.g. `(options, [onComplete])`
@context {identifier}
@returns {string}
*/
function methodSig(){
    return a.arrayify(this.params).filter(function(param){
        return param.name && !/\w+\.\w+/.test(param.name);
    }).map(function(param){
        if (param.variable){
            return param.optional ? "[..." + param.name + "]" : "..." + param.name;
        } else {
            return param.optional ? "[" + param.name + "]" : param.name;
        }
    }).join(", ");
}

/**
Returns the `alias` of this identifiers parent module, else `this.name`
@deprecated
@context {identifier}
@returns {string}
*/
function aliasName(options){
    var alias = a.findWhere(options.data.root, { longname: this.longname, kind: "module" });
    var name = "";
    if (alias){
        name = alias.alias || alias.name;
    } else {
        name = this.name;
    }
    if (/module:/.test(this.name)) name = this.codeName;
    return name;
}

function instantiate(input){
    return input.charAt(0).toLowerCase() + input.slice(1);
}

/**
returns the parent name, instantiated if necessary
@context {identifier}
@returns {string}
*/
function parentName(options){
    if (this.memberof && this.kind !== "constructor"){
        var parentClass = a.findWhere(options.data.root, { longname: this.memberof });
        if (parentClass) {
            var name = parentClass.alias || parentClass.name;
            return this.scope === "instance"
                ? instantiate(name) : name;
        } else {
            return this.memberof;
        }
    }
}
