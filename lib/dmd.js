"use strict";
var boil = require("boil");
var fs = require("fs");
var path = require("path");
var o = require("object-tools");
var ddata = require("ddata");
var helpers = require("../helpers/helpers");

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
        _indexDepth: 0,
        "module-index-format": "dl",
        "global-index-format": "dl",
        "param-list-format": "table",
        "property-list-format": "table",
        "class-member-index-format": "grouped",
        "group-by": [ "scope", "category" ]
    }, options);

    boil._handlebars.registerHelper(ddata);
    boil._handlebars.registerHelper(helpers);

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
    { name: "heading-depth", type: Number, alias: "d",
      description: "root heading depth, defaults to 2 (`##`)."
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
    { name: "example-lang", type: String, alias: "l",
      description: "Specifies the default language for @example blocks. In gfm mode,\neach @example is wrapped in a fenced-code block (```js var clive = 'yeah?'; ```).\nExample usage: `--example-lang js`. \nUse the special value `none` for no specific language."
    },
    { name: "name-format", type: Boolean,
      description: "Format identifier names as code"
    },
    { name: "no-gfm", type: Boolean,
      description: "set this to avoid using github-specific markdown"
    },
    { name: "separators", type: Boolean,
      description: "Put <hr> breaks between identifiers. Improves readability on bulky docs. "
    },
    { name: "module-index-format", type: String, alias: "m",
      description: "none, grouped, table, dl"
    },
    { name: "global-index-format", type: String, alias: "g",
      description: "none, grouped, table, dl"
    },
    { name: "param-list-format", type: String, alias: "p",
      description: "list, table"
    },
    { name: "property-list-format", type: String, alias: "r",
      description: "list, table"
    },
    { name: "class-member-index-format", type: String, alias: "c",
      description: "grouped, list"
    },
    { name: "group-by", type: Array, 
      description: "a list of fields to group member indexes by"
    }
];
