"use strict";
var ddata = require("ddata");
var a = require("array-tools");
var handlebars = require("boil")._handlebars;

module.exports = function(handlebars){

    function ting(options){
        var result = "";
        options.data.root.forEach(function(identifier){
            result += options.fn(identifier);
        });
        return result;
    }

    handlebars.registerHelper("ting", ting);
}
