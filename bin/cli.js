#!/usr/bin/env node
"use strict";

var dmd = require("../");

process.stdin.pipe(dmd()).pipe(process.stdout);
