"use strict";
var ddata = require("ddata");
var a = require("array-tools");
var handlebars = require("boil")._handlebars;

/**
A library of helpers used exclusively by dmd.. dmd also registers helpers from ddata and boil.
@module
*/

exports.escape = escape;
exports.linkify = linkify;
exports.tableHead = tableHead;
exports.tableHeadHtml = tableHeadHtml;
exports.tableRow = tableRow;
exports.deprecated = deprecated;

/**
Escape special markdown characters
*/
function escape(input){
    if (typeof input !== "string") return null;
    return input.replace(/([\*|])/g, "\\$1");
}

function linkify(text, options){
    if (text){
        var links = ddata.parseLink(text);
        links.forEach(function(link){
            var linked = ddata._link(link.url, options);
            if (link.caption === link.url) link.caption = linked.name;
            if (linked.url) link.url = linked.url;
            text = text.replace(link.original, "[" + link.caption + "](" + link.url + ")");
        });
    }
    return new handlebars.SafeString(text);
}

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
