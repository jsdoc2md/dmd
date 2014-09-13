#!/usr/bin/env node
"use strict";

var cliArgs = require("command-line-args"),
    dope = require("console-dope"),
    dmd = require("../"),
    domain = require("domain"),
    fs = require("fs");

var cli = cliArgs([
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
    }
]);
var usage = cli.getUsage({
    title: "dmd",
    header: "API docs with markdown",
    forms: [
        "$ cat <doc_json> | dmd [<options>]"
    ]
});

try{
    var argv = cli.parse({ unexpectedType: "string" });
} catch(err){
    halt(err);
}

if (argv.help){
    dope.log(usage);
    process.exit(0);
}

if (argv.template){
    argv.template = fs.readFileSync(argv.template, "utf8");
}

process.stdin.pipe(dmd(argv)).pipe(process.stdout);

function halt(err){
    if (err.code === "EPIPE") process.exit(0); /* no big deal */
    
    if (argv){
        if (argv.verbose){
            dope.red.error(err.stack || err);
        } else {
            dope.red.error("Error: " + err.message);
            dope.red.error("(run dmd with --verbose for a stack trace)");
        }
    } else {
        dope.red.error(err.stack);
    }
    dope.error(usage);
    process.exit(1);
}

