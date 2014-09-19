var test = require("tape");
var a = require("array-tools");
var stringHelpers = require("../helpers2/string");
var fixture = require("./fixture/handbrake");

var options = {
    data: { root: fixture },
    hash: {}
};
var options2 = {
    data: { root: fixture },
    hash: { style: "code" }
};

var l = console.log;

l(stringHelpers.linkTo("module:handbrake-js~Handbrake", options))
l(stringHelpers.linkTo("module:handbrake-js~Handbrake", options2))
l(stringHelpers.linkTo("number", options))
l(stringHelpers.linkTo("number", options2))

// test("linkTo", function(t){
//     l(stringHelpers.linkTo("clive", options))
//     t.end();
// });
