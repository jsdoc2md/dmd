#!/usr/bin/env node
"use strict";
var cliArgs = require("command-line-args");
var dope = require("console-dope");
var dmd = require("../");
var domain = require("domain");
var fs = require("fs");

var cli = cliArgs(dmd.cliOptions);
var usage = cli.getUsage({
    title: "dmd",
    header: "API docs with markdown",
    forms: [
        "$ cat <doc_json> | dmd [<options>]"
    ]
});

try{
    var argv = cli.parse();
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

