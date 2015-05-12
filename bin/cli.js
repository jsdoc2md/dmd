#!/usr/bin/env node
"use strict";
var cliArgs = require("command-line-args");
var ansi = require("ansi-escape-sequences");
var dmd = require("../");
var domain = require("domain");
var fs = require("fs");

var cli = cliArgs(dmd.cliOptions.concat([
    { name: "help", alias: "h", type: Boolean },
    { name: "verbose", alias: "v", type: Boolean }
]));

var usage = cli.getUsage({
    title: "dmd",
    header: "Generate markdown API documentation",
    forms: [
        "$ cat jsdoc-parse-output.json | dmd [<options>]"
    ]
});

try{
    var argv = cli.parse();
} catch(err){
    halt(err);
}

if (argv.help){
    console.log(usage);
    process.exit(0);
}

if (argv.template){
    argv.template = fs.readFileSync(argv.template, "utf8");
}

var dmdStream = dmd(argv);
dmdStream.on("error", halt);

process.stdin.pipe(dmdStream).pipe(process.stdout);

function halt(err){
    if (err.code === "EPIPE") process.exit(0); /* no big deal */
    
    if (argv){
        if (argv.verbose){
            logError("Error: " + err.message);
            logError(err.stack || err);
        } else {
            logError("Error: " + err.message);
            logError("(run dmd with --verbose for a stack trace)");
        }
    } else {
        logError(err.stack);
    }
    console.error(usage);
    process.exit(1);
}

function logError(msg){
    console.error(ansi.format(msg, "red"));
}
