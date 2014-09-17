var test = require("tape");
var a = require("array-tools");
var dataHelpers = require("../helpers2/data");
var fixture = require("./fixture/module");
var fixtureGlobals = require("./fixture/globals");
var unsorted = require("./fixture/unsorted");

var options = {
    data: { root: fixture },
    hash: {}
};
var optionsGlobals = {
    data: { root: fixtureGlobals },
    hash: {}
};

var l = console.log;

/* children should include constructors */
test("children of module that exports a class", function(t){
    var context = a.findWhere(fixture, { kind: "module" });
    l(dataHelpers.children.call(context, options));
    t.end();
});

test("children of an exported class", function(t){
    var context = a.findWhere(fixture, { kind: "class" });
    l(dataHelpers.children.call(context, options));
    t.end();
});

test("children of a class", function(t){
    var context = a.findWhere(fixtureGlobals, { kind: "class", longname: "All" });
    l(dataHelpers.children.call(context, optionsGlobals));
    t.end();
});

test.only("sort", function(t){
    l(dataHelpers.sort(unsorted, "scope,kind"));
    t.end();
});
