"use strict";
var test = require("tape");
var dmd = require("../");

test("dmd() on readable returns correct data", function(t){
    t.plan(1);
    var dmdStream = dmd();
    dmdStream.on("readable", function(){
        var md = this.read();
        if (md) t.ok(/is a class/.test(md.toString()));
    });
    dmdStream.end('[ { "id": "someclass", "longname": "someclass", "name": "someclass", "kind": "class", "description": "is a class" } ]');
});
