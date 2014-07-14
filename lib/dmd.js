"use strict";
var boil = require("boil-js"),
    path = require("path");

/**
@module
*/
module.exports = dmd;

/**
Transforms doclet data into markdown documentation
@param {object} - The render options
@param {string} [options.template] - A handlebars template to insert your documentation into. 
@param {string | string[]} [options.partial] - overrides
@param {string | string[]} [options.helper] - overrides
@param {string | string[]} [options.plugin] - packages containing overrides
@param {number} [options.heading-depth] - Root heading depth, defaults to 2.
@return {stream} A readable stream containing the rendered markdown
@alias module:dmd
*/
function dmd(options){
    options = options || {};
    options["heading-depth"] = options["heading-depth"] || 1;
    options.template = options.template || "{{>main}}";
    options._headingDepth = 0;
    options._indexDepth = 0;

    boil.registerPartials(path.resolve(__dirname, "..", "partials/**/*.hbs"));
    boil.registerHelpers(path.resolve(__dirname, "..", "helpers/**/*.js"));
    
    if(options.partial) boil.registerPartials(options.partial);
    if(options.helper) boil.registerHelpers(options.helper);
    if(options.plugin){
        options.plugin.forEach(function(plugin){
            require(plugin)(boil);
        });
    }
    
    return boil.renderStream(options);
};
