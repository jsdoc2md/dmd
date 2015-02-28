"use strict";
var test = require("tape");
var dmd = require("../");
var fs = require("fs");

test("{@link module:yeah}")             // caption: yeah, url: #module_yeah
test("{@link module:yeah|the module}")  // caption: the module, url: #module_yeah
test("{@link http://url.com|the page}") // caption: the page, url: http://url.com
test("@returns {module:yeah}")          // caption: yeah, url: #module_yeah
test("@type {module:yeah}")
test("@param {module:yeah}")
test("@extends {module:yeah}")
test("@emits {module:yeah}")
