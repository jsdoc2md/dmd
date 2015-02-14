"use strict";
var test = require("tape");
var helpers = require("../helpers/helpers");
var fs = require("fs");

function makeOptions(data){
    return { data: { root: data }, hash: {} };
}

test("ting", function(t){
    var fixture = fs.readFileSync("test/fixture/uzi-lover.json", "utf8");
    var data = JSON.parse(fixture);
    var result = helpers.ting.call({ id: "FurQ" }, makeOptions(data));
    console.log(result);
    t.end();
});
