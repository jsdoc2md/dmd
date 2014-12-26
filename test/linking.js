"use strict";
var test = require("tape");
var dmd = require("../");
var fs = require("fs");

test("{@link longname|caption}")
test("{@link url|caption}")
test("@returns {longname}")
test("@type {longname}")
test("@param {longname}")
test("@extends {longname}")
test("@emits {longname}")


test("@link", function(t){
    t.plan(1);
    
    fs.createReadStream("test/fixture/everything.json").pipe(dmd()).on("readable", function(){
        var md = this.read();
        if (md) t.ok(/exports a class/.test(md.toString()));
    });
});
