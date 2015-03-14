"use strict";
var boil = require("boil");
var fs = require("fs");
var path = require("path");
var o = require("object-tools");
var a = require("array-tools");
var ddata = require("ddata");
var helpers = require("../helpers/helpers");

/**
@module
*/
module.exports = dmd;

/**
Transforms doclet data into markdown documentation. Returns a transform stream - pipe doclet data in to receive rendered markdown out.
@alias module:dmd
@param [options] {object} - The render options
@param [options.template="\{\{>main\}\}"] {string} - A handlebars template to insert your documentation into.
@param [options.heading-depth=2] {number} - the heading depth to begin the docs from (e.g. `2` starts from a markdown heading of `"##"`).
@param [options.example-lang] {string} - for syntax highlighting on github
@param [options.partial] {string | string[]} - overrides
@param [options.helper] {string | string[]} - overrides
@param [options.plugin] {string | string[]} - packages containing overrides
@return {external:TransformStream}
*/
function dmd(options){

    /* defaults */
    options = o.extend({
        "heading-depth": 2,
        template: "{{>main}}",
        _depth: 0,
        _indexDepth: 0,
        partial: [],
        helper: [],
        "module-index-format": "dl",
        "global-index-format": "dl",
        "param-list-format": "table",
        "property-list-format": "table",
        "member-index-format": "grouped",
        "group-by": [ "scope", "category" ]
    }, options);

    /* register both ddata and dmd helpers with handlebars.. register all dmd partials. */
    boil._handlebars.registerHelper(ddata);
    boil._handlebars.registerHelper(helpers);
    boil.registerPartials(path.resolve(__dirname, "..", "partials/**/*.hbs"));

    /* if plugins were specified, register the helpers/partials from them too */
    if(options.plugin){
        a.arrayify(options.plugin).forEach(function(plugin){
            var modulePath = moduleSearch(plugin);
            if (modulePath){
                /* load the plugin options */
                var pluginOptions = require(modulePath)(options);
                options.partial = options.partial.concat(pluginOptions.partial);
                options.helper = options.helper.concat(pluginOptions.helper);
            };
        });
    }

    /* if additional partials/helpers paths were specified, register them too */
    if(options.partial.length) boil.registerPartials(options.partial);
    if(options.helper.length) boil.registerHelpers(options.helper);
    return boil.renderStream(options, { preventIndent: true });
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
      description: "A custom handlebars template file to insert documentation into. The default template is `{{>main}}`."
    },
    { name: "heading-depth", type: Number, alias: "d",
      description: "root heading depth, defaults to 2 (`##`)."
    },
    { name: "plugin", type: Array,
      description: "Use an installed package containing helper and/or partial overrides"
    },
    { name: "helper", type: Array,
      description: "handlebars helper files to override or extend the default set"
    },
    { name: "partial", type: Array,
      description: "handlebars partial files to override or extend the default set"
    },
    { name: "example-lang", type: String, alias: "l",
      description: "Specifies the default language for @example blocks. In gfm mode, each @example is wrapped in a fenced-code block (```js var clive = 'yeah?'; ```). Example usage: `--example-lang js`. Use the special value `none` for no specific language."
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
    { name: "member-index-format", type: String, alias: "c",
      description: "grouped, list"
    },
    { name: "group-by", type: Array, 
      description: "a list of fields to group member indexes by"
    }
];

/**
@external TransformStream
@see http://nodejs.org/api/stream.html#stream_class_stream_transform
*/
