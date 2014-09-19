"use strict";

var a = require("array-tools");
var util = require("util");
var url = require("url");

/**
helpers which return strings
@module
*/
exports.linkTo = linkTo;
exports.anchorName = anchorName;

/**
@params id {string} - the id to convert into a link
@params options.hash.style {string} - `plain` or `code`
@returns {string}
*/
function linkTo(id, options){
    if (!id) return "";

    var re = /<(.*)>/;
    var fullName = "";
    if (Array.isArray(id)){
        return id.map(function(name){
            return linkTo(name, options);
        });
    } else {
        if (re.test(id)){
            fullName = id;
            id = id.match(re)[1];
        }

        var builtInType = /^(string|object|number|boolean|array|regexp|date)$/i.test(id);

        if (builtInType){
            return options.hash.style !== "plain" ? "`" + (fullName || id) + "`" : fullName || id;
        } else {
            var linked = a.findWhere(options.data.root, { id: id }),
                mask;
            if (linked){
                linked.isConstructor = false;
                if (fullName) fullName = fullName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                var linkText = fullName ? fullName.replace(id, linked.name) : linked.name;
                mask = options.hash.style === "code" ? "<code>[%s](#%s)</code>" : "[%s](#%s)";
                return util.format(mask, linkText, anchorName.call(linked, options));
            } else {
                if (url.parse(fullName || id).protocol) {
                    switch (options.hash.style) {
                        case "code":
                            mask = "<code>[%s](%s)</code>";
                            break;
                        case "plain":
                        default:
                            mask = "[%s](%s)";
                    }
                    return util.format(mask, options.hash.caption || fullName || id, fullName || id);
                }
                return options.hash.style !== "plain" ? "`" + (fullName || id) + "`" : fullName || id;
            }
        }
    }
}

/**
returns a unique ID string suitable for use as an `href`.
@context {identifier}
@returns {string}
*/
function anchorName(options){
    if (!this.id) throw new Error("[anchorName helper] cannot create a link without a id");
    return util.format(
        "%s%s%s",
        this.isExported ? "exp_" : "",
        this.kind === "constructor" ? "new_" : "",
        this.id.replace(/:/g, "_").replace(/~/g, "..")
    );
}
