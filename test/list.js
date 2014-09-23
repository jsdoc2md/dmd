var test = require("tape");
var listHelpers = require("../helpers/list");
var l = console.log;

function makeOptions(data){
    return { data: { root: data }, hash: {} };
}

test("sort by property", function(t){
    var options = makeOptions([
        { one: "fff" }, { one: "aaa" }, { one: "ggg" }
    ]);
    options.hash.sortBy = "one";
    t.deepEqual(listHelpers.identifiers(options), [
        { one: "aaa" }, { one: "fff" }, { one: "ggg" }
    ])
    t.end();
});

test("sort by none", function(t){
    var options = makeOptions([
        { one: "fff" }, { one: "aaa" }, { one: "ggg" }
    ]);
    options.hash.sortBy = "none";
    t.deepEqual(listHelpers.identifiers(options), [
        { one: "fff" }, { one: "aaa" }, { one: "ggg" }
    ]);
    t.end();
});

test.only("descendants", function(t){
    var options = makeOptions([
        { id: "one" }, { id: "two", memberof: "one" }, { id: "three", memberof: "two" }, { id: "four"}
    ]);
    t.deepEqual(listHelpers.descendants.call({ id: "one" }, options), [
        { id: 'two', memberof: 'one' }, { id: 'three', memberof: 'two' }
    ]);
    t.deepEqual(listHelpers.descendants.call({ id: "two" }, options), [
        { id: 'three', memberof: 'two' }
    ]);
    t.deepEqual(listHelpers.descendants.call({ id: "four" }, options), []);
    t.end();
});
