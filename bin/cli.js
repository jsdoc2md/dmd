#!/usr/bin/env node
"use strict";

var dmd = require("../");

process.stdin.pipe(dmd({
    // partials: "test/fixture/head.hbs"
    // plugins: [ "documenter-md-patch" ]
})).pipe(process.stdout);
