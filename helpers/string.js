"use strict";
var a = require("array-tools");
var o = require("object-tools");
var util = require("util");
var url = require("url");
var marked = require("marked");

/**
helpers which return strings
@module
*/
exports.linkTo = linkTo;
exports.anchorName = anchorName;
exports.md = md;
exports.md2 = md2;
exports.methodSig = methodSig;
exports.linkify = linkify;
exports.parentName = parentName;

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
    if (!this.id) throw new Error("[anchorName helper] cannot create a link without a id: " + JSON.stringify(this));
    return util.format(
        "%s%s%s",
        this.isExported ? "exp_" : "",
        this.kind === "constructor" ? "new_" : "",
        this.id.replace(/:/g, "_").replace(/~/g, "..")
    );
}

/**
converts the supplied text to markdown
*/
function md(options){
    var output = marked(options.fn(this).toString());
    return output.replace("lang-js", "language-javascript");
}
function md2(options){
    return marked.inlineLexer(options.fn(this).toString(), []);
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


function linkify(text, options) {
    if (!text) return "";
    
    var linksRx = /(\[.+\])?\{@link\s+.*?\}/gmi,
        targetRx = /(?:\[(.+)\])?{@link(code|plain)?\s+?(?:(?:([^|]+)\|(.*))|(.+?)(?:\s+(.*))?)\}/mi,
        linkTags,
        links = {};
    if (!(linkTags = text.match(linksRx))) {
        return text;
    }
    linkTags.forEach(function (linkTag) {
        var parsedLink = linkTag.match(targetRx);
        var caption = parsedLink[1] || parsedLink[4] || parsedLink[6];
        var style = !!parsedLink[2];
        var target = parsedLink[3] || parsedLink[5];
        options.hash = o.extend({}, options.hash, {style: style, caption: caption});
        links[parsedLink[0]] = handlebars.helpers.linkTo.call(this, target, options);
    });
    for (var link in links) {
        if (links.hasOwnProperty(link)) {
            text = text.replace(link, links[link]);
        }
    }
    return text;
}

/**
returns the parent name, instantiated if necessary
@context {identifier}
@returns {string}
*/
function parentName(options){
    function instantiate(input){
        return input.charAt(0).toLowerCase() + input.slice(1);
    }
    
    /* don't bother with a parentName for exported identifiers */
    if (this.isExported) return "";
    
    if (this.memberof && this.kind !== "constructor"){
        var parent = a.findWhere(options.data.root, { id: this.memberof });
        if (parent) {
            // if (this.kind === "class" && parent.kind === "module" && this.scope !== "inner") return "";
            var name = parent.typicalname || parent.name;
            return this.scope === "instance"
                ? instantiate(name) : name;
        } else {
            return this.memberof;
        }
    }
}
