#!/usr/bin/env node
"use strict";

var documenterMd = require("../");

process.stdin.pipe(documenterMd({
    // partials: "test/fixture/head.hbs"
    // plugins: [ "documenter-md-patch" ]
})).pipe(process.stdout);
