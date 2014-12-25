"use strict";
var ddata = require("ddata");

exports.escape = escape;
exports.linkify = linkify;

/**
Escape special markdown characters
*/
function escape(input){
    return input.replace(/\*/g, "\\*");
}

function linkify(text){
    if (text){
        var links = ddata.parseLink(text);
        links.forEach(function(link){
            text = text.replace(link.original, "[" + link.caption + "](" + link.url + ")");
        });
    }
    return text;
}