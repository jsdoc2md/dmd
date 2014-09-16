var test = require("tape");
var a = require("array-tools");
var data = require("../helpers2/data");
var fixture = require("./fixture/module");
var fixtureGlobals = require("./fixture/globals");

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
    l(data.children.call(context, options));
    t.end();
});

test("children of an exported class", function(t){
    var context = a.findWhere(fixture, { kind: "class" });
    l(data.children.call(context, options));
    t.end();
});

test("children of a class", function(t){
    var context = a.findWhere(fixtureGlobals, { kind: "class", longname: "All" });
    l(data.children.call(context, optionsGlobals));
    t.end();
});
