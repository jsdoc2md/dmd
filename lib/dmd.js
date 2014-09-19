"use strict";
var boil = require("boil-js"),
    fs = require("fs"),
    path = require("path"),
    o = require("object-tools");

/**
@module
*/
module.exports = dmd;

/**
Transforms doclet data into markdown documentation
@param {object} - The render options
@param {string} [options.template] - A handlebars template to insert your documentation into. 
@param {number} [options.heading-depth] - the heading depth to begin the docs from (e.g. `2` starts from a markdown heading of `##`). Defaults to `2`. 
@param {string | string[]} [options.partial] - overrides
@param {string | string[]} [options.helper] - overrides
@param {string | string[]} [options.plugin] - packages containing overrides
@return {stream} A transform stream - pipe doclet data in to receive rendered markdown.
@alias module:dmd
*/
function dmd(options){
    options = o.extend({
        "heading-depth": 1,
        template: "{{>main}}",
        _headingDepth: 0,
        _indexDepth: 0
    }, options);

    
    /* dmd ui */
    if(options.partials){
        boil._handlebars.registerPartial(options.partials);
        require("../helpers/helpers")(boil._handlebars);

    /* node */
    } else {
        boil.registerPartials(path.resolve(__dirname, "..", "partials/**/*.hbs"));
        require("../helpers/helpers")(boil._handlebars);
        
        if(options.partial) boil.registerPartials(options.partial);
        if(options.helper) boil.registerHelpers(options.helper);
        if(options.plugin){
            options.plugin.forEach(function(plugin){
                var found = false;
                var dirs = process.cwd().split(path.sep);
                for (var i = 0; i < dirs.length; i++) {
                    var basedir = i < dirs.length - 1
                        ? dirs.slice(0, dirs.length - i).join(path.sep)
                        : path.sep;
                    var modulePath = path.join(basedir, "node_modules", plugin);
                    if (fs.existsSync(modulePath)){
                        require(modulePath)(boil);
                        found = true;
                        break;
                    }
                }
            
                if (found === false){
                    throw new Error("dmd plugin not found: " + plugin);
                }
            });
        }
    }
    
    return boil.renderStream(options);
};
