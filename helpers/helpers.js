var dataHelpers = require("../helpers2/data");
var blockHelpers = require("../helpers2/block");
var varHelpers = require("../helpers2/vars");
var stringHelpers = require("../helpers2/string");
var boolHelpers = require("../helpers2/bool");

module.exports = function(handlebars){
    require("./constructor-has-docs.js")(handlebars);
    require("./linkify.js")(handlebars);
    
    handlebars.registerHelper(dataHelpers);
    handlebars.registerHelper(blockHelpers);
    handlebars.registerHelper(varHelpers);
    handlebars.registerHelper(stringHelpers);
    handlebars.registerHelper(boolHelpers);
};
