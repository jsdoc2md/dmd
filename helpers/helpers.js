"use strict";
var ddata = require("ddata");
var a = require("array-tools");
var handlebars = require("stream-handlebars");
var s = require("string-tools");
var util = require("util");
var _ = require("./locale")._;

/**
A library of helpers used exclusively by dmd.. dmd also registers helpers from ddata.
@module
*/
exports.escape = escape;
exports.inlineLinks = inlineLinks;
exports.tableHead = tableHead;
exports.tableHeadHtml = tableHeadHtml;
exports.tableRow = tableRow;
exports.deprecated = deprecated;
exports.groupBy = groupBy;
exports._groupBy = _groupBy;
exports._addGroup = _addGroup;
exports.add = add;
exports.kindInThisContext = kindInThisContext;
exports.titleCase = titleCase;
exports.parseType = parseType;
exports.params = params;
exports.examples = examples;
exports.scopeText = scopeText;
exports.sig = sig;
exports.returnSig2 = returnSig2;
exports.showMainIndex = showMainIndex;
exports.link = link;

/**
Escape special markdown characters
*/
function escape(input){
    if (typeof input !== "string") return null;
    return input.replace(/([\*|])/g, "\\$1");
}

/**
replaces {@link} tags with markdown links in the suppied input text
*/
function inlineLinks(text, options){
    if (text){
        var links = ddata.parseLink(text);
        links.forEach(function(link){
            var linked = ddata._link(link.url, options);
            if (link.caption === link.url) link.caption = linked.name;
            if (linked.url) link.url = linked.url;
            text = text.replace(link.original, "[" + link.caption + "](" + link.url + ")");
        });
    }
    return text;
}

/**
returns a gfm table header row.. only columns which contain data are included in the output
*/
function tableHead(){
    var args = a.arrayify(arguments);
    var data = args.shift();
    if (!data) return;
    var options = args.pop();
    var cols = args;
    var colHeaders = cols.map(function(col){
        var spl = col.split("|");
        return spl[1] || spl[0];
    });
    cols = cols.map(function(col){
        return col.split("|")[0];
    });
    var toSplice = [];
    cols = cols.filter(function(col, index){
        var hasValue = data.some(function(row){
            return typeof row[col] !== "undefined";
        });
        if (!hasValue) toSplice.push(index);
        return hasValue;
    });
    toSplice.reverse().forEach(function(index){
        colHeaders.splice(index, 1);
    });

    var table = "| " + colHeaders.join(" | ") + " |\n";
    table += cols.reduce(function(p){ return p + " --- |" }, "|") + "\n";
    return table;
}

function containsData(rows, col){
    return rows.some(function(row){
        return typeof row[col] !== "undefined";
    });
}

/**
returns a gfm table row.. only columns which contain data are included in the output
*/
function tableRow(){
    var args = a.arrayify(arguments);
    var rows = args.shift();
    if (!rows) return;
    var options = args.pop();
    var cols = args;
    var output = "";
    var self = this;

    if (options.data){
        var data = handlebars.createFrame(options.data);
        cols.forEach(function(col, index){
            var colNumber = index + 1;
            data["col" + colNumber] = containsData(rows, col)
        });
    }
    rows.forEach(function(row){
        output += options.fn(row, { data: data });
    });
    return output;
}

/**
@example
{{#each (tableHeadHtml params "name|Param" "type|Type" )}}<td>{{this}}</td>{{/each}}
*/
function tableHeadHtml(){
    var args = a.arrayify(arguments);
    var data = args.shift();
    if (!data) return;
    var options = args.pop();
    var cols = args;
    var colHeaders = cols.map(function(col){
        var spl = col.split("|");
        return spl[1] || spl[0];
    });
    cols = cols.map(function(col){
        return col.split("|")[0];
    });
    var toSplice = [];
    cols = cols.filter(function(col, index){
        var hasValue = data.some(function(row){
            return typeof row[col] !== "undefined";
        });
        if (!hasValue) toSplice.push(index);
        return hasValue;
    });
    toSplice.reverse().forEach(function(index){
        colHeaders.splice(index, 1);
    });

    return colHeaders;
}

function deprecated(options){
    if (this.deprecated){
        if (ddata.optionEquals("no-gfm", true, options) || options.hash["no-gfm"]){
            return "<del>" + options.fn(this) + "</del>";
        } else {
            return "~~" + options.fn(this) + "~~";
        }
    } else {
        return options.fn(this);
    }
}

/**

*/
function groupBy(groupByFields, options){
    return handlebars.helpers.each(_groupChildren.call(this, groupByFields, options), options);
}

function _addGroup(identifiers, groupByFields){
    return identifiers.map(function(identifier){
        identifier._group = groupByFields.map(function(field){
            return typeof identifier[field] === "undefined" ? null : identifier[field];
        });
        return identifier
    });
}

function _groupChildren(groupByFields, options){
    var children = ddata._children.call(this, options);
    return _groupBy(children, groupByFields);
}

/**
takes the children of this, groups them, inserts group headings..
*/
function _groupBy(identifiers, groupByFields){
    /* don't modify the input array */
    groupByFields = groupByFields.slice(0);

    groupByFields.forEach(function(group){
        var groupValues = a.unique(identifiers.filter(function(identifier){
            /* exclude constructors from grouping.. re-implement to work off a `null` group value */
            return identifier.kind !== "constructor";
        }).map(function(i){ return i[group]; }));
        if (groupValues.length <= 1) groupByFields = a.without(groupByFields, group);
    });
    identifiers = _addGroup(identifiers, groupByFields);

    var inserts = [];
    var prevGroup = [];
    var level = 0;
    identifiers.forEach(function(identifier, index){
        if (!deepEqual(identifier._group, prevGroup)){
            var common = a.commonSequence(identifier._group, prevGroup);
            level = common.length;
            identifier._group.forEach(function(group, i){
                if (group !== common[i] && group !== null){
                    inserts.push({
                        index: index,
                        _title: group,
                        level: level++
                    });
                }
            });
        }
        identifier.level = level;
        prevGroup = identifier._group;
        delete identifier._group;
    });

    /* insert title items */
    inserts.reverse().forEach(function(insert){
        identifiers.splice(insert.index, 0, { _title: insert._title, level: insert.level });
    });
    return identifiers;
}

function add(){
    var args = a.arrayify(arguments);
    args.pop();
    return args.reduce(function(p, c){ return p + (c || 0); }, 0);
}

function deepEqual(a, b){
    return JSON.stringify(a) === JSON.stringify(b);
}

/**
returns a more appropriate 'kind', depending on context
@return {string}
*/
function kindInThisContext(){
    if (this.kind === "function" && this.memberof){
        return "method";
    } else if (this.kind === "member" && !this.isEnum && this.memberof){
        return "property";
    } else if (this.kind === "member" && this.isEnum && this.memberof){
        return "enum property";
    } else if (this.kind === "member" && this.isEnum && !this.memberof){
        return "enum";
    } else if (this.kind === "member" && this.scope === "global"){
        return "variable";
    } else {
        return this.kind;
    }
}

function titleCase(string){
    return string[0].toUpperCase() + string.slice(1);
}

/**
@returns {{ type: string, description: string }}
*/
function parseType(string){
    if (!string) return;
    var matches = string.match(/({(.*?)})?([\s\S]*)/);
    if (matches){
        return { type: matches[2], description: matches[3] };
    }
}

/**
block helper.. provides the data to render the @params tag
*/
function params(options){
    if (this.params){
        var list = this.params.map(function(param){
            var nameSplit = param.name.split(".");
            var name = a(nameSplit).last();
            if (nameSplit.length > 1) name = "." + name;
            if (param.variable) name = "..." + name;
            if (param.optional) name = "[" + name + "]";
            return {
                indent: s.repeat("  ", nameSplit.length - 1),
                name: name,
                type: param.type,
                defaultvalue: param.defaultvalue,
                description: param.description
            };
        });
        return options.fn(list);
    }
}


function examples(options){
    if (this.examples){
        return this.examples.reduce(function(prev, example){
            var exampleLangOptions = ddata.option("example-lang", options);
            var matches = example.match(/@lang\s+(\w+)\s*/);
            if (matches){
                var exampleLangSubtag = matches[1];
                example = example.replace(matches[0], "");
            }
            var exampleLang = exampleLangSubtag || exampleLangOptions;

            if (!(/```/.test(example) || exampleLang === "off" )){
                example = util.format("```%s\n%s\n```", exampleLang, example);
            }
            return prev + options.fn(example);
        }, "");
    }
}

function scopeText(options){
    var heading = localeFormat("%s%s%s%s ", "md.bold", "tag.Kind", "tag.:", "md.bold");
    var output;
    options.hash.to = this.memberof;
    
    if (this.scope){
        if (ddata.isEvent.call(this)){
            output = heading += this.memberof
                ? util.format(_("tag.event emitted by <parent>"), link(options))
                : _("tag.event");
        } else {
            if (this.memberof){
                if (this.virtual){
                    output = heading += util.format(
                        _("tag.<scope> abstract <kind> of <parent>"),
                        this.scope,
                        kindInThisContext.call(this),
                        link(options)
                    );
                } else {
                    output = heading += util.format(
                        _("tag.<scope> <kind> of <parent>"),
                        this.scope,
                        kindInThisContext.call(this),
                        link(options)
                    );
                }
            } else {
                if (this.virtual){
                    output = heading += util.format(
                        _("tag.<scope> abstract <kind>"),
                        this.scope,
                        kindInThisContext.call(this)
                    );
                } else {
                    output = heading += util.format(
                        "%s %s",
                        this.scope,
                        kindInThisContext.call(this)
                    );
                }
            }
        }
    } else {
        if (this.isExported){
            output = heading += util.format(_("tag.exported <kind>"), this.kind);
        }
    }
    if (output) return output += "  \n";
}

function localeFormat(){
    var args = a.arrayify(arguments);
    var fmt = args.shift();
    var fmtArgs = args.map(function(arg){
        return _(arg);
    });
    fmtArgs.unshift(fmt);
    return util.format.apply(util, fmtArgs);
}

/**
@static
@returns {{symbol: string, types: array}}
@category Block helper: util
*/
function returnSig2(options){
    if (!ddata.isConstructor.call(this)){
        if (this.returns){
            var typeNames = a.arrayify(this.returns).map(function(ret){
                return ret.type && ret.type.names;
            });
            typeNames = typeNames.filter(function(name){
                return name;
            });
            if (typeNames.length){
                return options.fn({
                    symbol: _("symbol.returns"),
                    types: a.flatten(typeNames)
                });
            } else {
                return options.fn({
                    symbol: null,
                    types: null
                });
            }
        } else if ((this.type || this.kind === "namespace") && this.kind !== "event"){
            if (this.kind === "namespace"){
                return options.fn({
                    symbol: _("symbol.type"),
                    types: [ "object" ]
                });
            } else {
                return options.fn({
                    symbol: _("symbol.type"),
                    types: this.type.names
                });
            }
        }
    }
}

/**
@category Block helper: util
*/
function sig(options){
    var data;

    if (options.data) {
        data = handlebars.createFrame(options.data || {});
    }

    data.prefix = this.kind === "constructor" ? "new" : "";
    data.parent = null;
    data.accessSymbol = null;
    data.name = ddata.isEvent.call(this) ? '"' + this.name + '"' : this.name;
    data.methodSign = null;
    data.returnSymbol = null;
    data.returnTypes = null;
    data.suffix = this.isExported ? _("symbol.exported") : ddata.isPrivate.call(this) ? _("symbol.private") : "";
    data.depOpen = null;
    data.depClose = null;
    data.codeOpen = null;
    data.codeClose = null;

    var mSig = ddata.methodSig.call(this);
    if (ddata.isConstructor.call(this) || ddata.isFunction.call(this)){
        data.methodSign = "(" + mSig + ")";
    } else if (ddata.isEvent.call(this)){
        if (mSig) data.methodSign = "(" + mSig + ")";
    }

    if (!ddata.isEvent.call(this)){
        data.parent = ddata.parentName.call(this, options);
        data.accessSymbol = (this.scope === "static" || this.scope === "instance") ? "." : this.scope === "inner" ? "~" : "";
    }

    if (!ddata.isConstructor.call(this)){
        if (this.returns){
            data.returnSymbol = _("symbol.returns");
            var typeNames = a.arrayify(this.returns)
                .map(function(ret){
                    return ret.type && ret.type.names;
                })
                .filter(function(name){
                    return name;
                });
            if (typeNames.length){
                data.returnTypes = a.flatten(typeNames);
            }
        } else if ((this.type || this.kind === "namespace") && this.kind !== "event"){
            data.returnSymbol = _("symbol.type");

            if (ddata.isEnum.call(this)){
                data.returnTypes = [ "enum" ];
            } else if (this.kind === "namespace"){
                data.returnTypes = [ "object" ];
            } else {
                data.returnTypes = this.type.names;
            }
        } else if (this.chainable){
            data.returnSymbol = _("symbol.chainable");
        } else if (this.augments){
            data.returnSymbol = _("symbol.extends");
            data.returnTypes = [this.augments[0]];
        }
    }

    if (this.deprecated){
        if (ddata.optionEquals("no-gfm", true, options) || options.hash["no-gfm"]){
            data.depOpen = "<del>";
            data.depClose = "</del>";
        } else {
            data.depOpen = "~~";
            data.depClose = "~~";
        }
    }

    if (ddata.option("name-format", options) && !ddata.isClass.call(this) && !ddata.isModule.call(this)){
        data.codeOpen = "`";
        data.codeClose = "`";
    }

    return options.fn(this, { data: data })
}

/**
True if there at least two top-level identifiers (i.e. globals or modules)
@category returns boolean
@returns {boolean}
@static
*/
function showMainIndex(options){
    return ddata._orphans(options).length > 1;
}

/**
options: to, html, caption
*/
function link(options){
    var to = options.hash.to;
    var html = options.hash.html;
    var caption = options.hash.caption;
    var l = ddata._link(to, options);
    if (l.name) l.name = handlebars.Utils.escapeExpression(l.name);
    var output = "";
    
    if (html){
        output = l.url 
            ? util.format("<code><a href='%s'>%s</a></code>", l.url, caption || l.name)
            : util.format("<code>%s</code>", caption || l.name);
    } else {
        output = l.url 
            ? util.format("<code>[%s](%s)</code>", escape(caption || l.name), l.url)
            : util.format("<code>%s</code>", escape(caption || l.name));
    }
    return new handlebars.SafeString(output);
}
