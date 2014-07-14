#!/usr/bin/env node
"use strict";

var documenterMd = require("../");

process.stdin.pipe(documenterMd()).pipe(process.stdout);
