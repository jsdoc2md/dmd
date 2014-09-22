var a = require("array-tools");
var util = require("util");

/**
helpers which return single identifiers
@module
*/
exports.exported = exported;

/**
returns the exported identifier of this module
@context {identifier} - only works on a module
@returns {identifier}
*/
function exported(options){
    var exported = a.findWhere(options.data.root, { "!kind": "module", id: this.id });
    return exported || this;
}
