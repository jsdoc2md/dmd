"use strict";
var test = require("tape");
var dmd = require("../");

test("plugin", function(t){
    t.plan(1);
    
    var dmdStream = dmd({ plugin: "dmd-plugin-example" });
    dmdStream.on("readable", function(){
        var md = this.read();
        if (md) t.ok(/documentation generated on/.test(md.toString()));
    });
    dmdStream.end('[ { "id": "someclass", "longname": "someclass", "name": "someclass", "kind": "class", "description": "is a class" } ]');    
});
