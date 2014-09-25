"use strict";
var boil = require("boil-js");
var fs = require("fs");
var path = require("path");
var o = require("object-tools");
var ddata = require("ddata");

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
        "heading-depth": 2,
        template: "{{>main}}",
        _depth: 0,
        "sort-by": "scope,kind"
    }, options);

    boil._handlebars.registerHelper(ddata);

    /* dmd ui */
    if(options.partials){
        boil._handlebars.registerPartial(options.partials);

    /* node */
    } else {
        boil.registerPartials(path.resolve(__dirname, "..", "partials/**/*.hbs"));
        
        if(options.partial) boil.registerPartials(options.partial);
        if(options.helper) boil.registerHelpers(options.helper);
        if(options.plugin){
            options.plugin.forEach(function(plugin){
                var modulePath = moduleSearch(plugin);
                if (modulePath) require(modulePath)(boil);
            });
        }
    }
    return boil.renderStream(options);
};

function moduleSearch(moduleName){
    var dirs = process.cwd().split(path.sep);
    for (var i = 0; i < dirs.length; i++) {
        var basedir = i < dirs.length - 1
            ? dirs.slice(0, dirs.length - i).join(path.sep)
            : path.sep;
        var modulePath = path.join(basedir, "node_modules", moduleName);
        if (fs.existsSync(modulePath)){
            return modulePath;
        }
    }
}

dmd.cliOptions = [
    { name: "template", alias: "t", type: String,
      description: "A custom handlebars template to insert the rendered documentation into"
    },
    { name: "verbose", alias: "v", type: Boolean,
      description: "More verbose error reporting"
    },
    { name: "help", alias: "h", type: Boolean,
      description: "Print usage information"
    },
    { name: "heading-depth", type: Number,
      description: "root heading depth, defaults to 1 (`#`)."
    },
    { name: "plugin", type: Array, alias: "p",
      description: "Use an installed package containing helper and/or partial overrides"
    },
    { name: "helper", type: Array,
      description: "handlebars helper files to override or extend the default set"
    },
    { name: "partial", type: Array,
      description: "handlebars partial files to override or extend the default set"
    },
    { name: "sort-by", type: String,
      description: "none | kind | scope | kind,scope | scope,kind | <field_name>"
    },
    { name: "example-code", type: Boolean,
      description: "Display all examples as code block"
    },
    { name: "example-code-gfm", type: String,
      description: "Display all examples as GFM fenced code block with highlighting"
    }    
];
