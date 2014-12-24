"use strict";
var test = require("tape");
var dmd = require("../");
var fs = require("fs");

test("dmd() on readable returns correct data", function(t){
    t.plan(1);
    
    fs.createReadStream("test/fixture/everything.json").pipe(dmd()).on("readable", function(){
        var md = this.read();
        if (md) t.ok(/exports a class/.test(md.toString()));
    });
});
