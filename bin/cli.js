#!/usr/bin/env node
"use strict";
var cliArgs = require("command-line-args");
var ansi = require("ansi-escape-sequences");
var dmd = require("../");
var domain = require("domain");
var fs = require("fs");
var loadConfig = require("config-master");
var homePath = require("home-path");
var path = require("path");
var o = require("object-tools");

var cli = cliArgs(dmd.cliOptions.concat([
    { name: "help", alias: "h", type: Boolean },
    { name: "verbose", alias: "v", type: Boolean },
    { name: "config", type: Boolean, description: "Print the stored config and exit" }
]));

var usage = cli.getUsage({
    title: "dmd",
    description: "Generate markdown API documentation",
    footer: "Project home: [underline]{https://github.com/jsdoc2md/dmd}",
    forms: [
        "$ cat jsdoc-parse-output.json | dmd [<options>]",
        "$ dmd --help",
        "$ dmd --config"
    ]
});

try{
    var argv = cli.parse();
} catch(err){
    halt(err);
}

var dmdConfig = loadConfig(
    path.join(homePath(), ".dmd.json"),
    path.join(process.cwd(), ".dmd.json"),
    { jsonPath: path.join(process.cwd(), "package.json"), configProperty: "dmd" }
);

var config = o.extend(dmdConfig, argv);

if (config.config){
    console.log(JSON.stringify(o.without(config, "config"), null, "  "));
    process.exit(0);
}

if (config.help){
    console.log(usage);
    process.exit(0);
}

if (config.template){
    config.template = fs.readFileSync(config.template, "utf8");
}

var dmdStream = dmd(config);
dmdStream.on("error", halt);

process.stdin.pipe(dmdStream).pipe(process.stdout);

function halt(err){
    if (err.code === "EPIPE") process.exit(0); /* no big deal */

    if (config){
        if (config.verbose){
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
