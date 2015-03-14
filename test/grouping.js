"use strict";
var test = require("tape");
var helpers = require("../helpers/helpers");
var a = require("array-tools");

function makeOptions(data){
    return { data: { root: data }, hash: {} };
}

test("_addGroup scope, cat", function(t){
    var fixture = [
        { "name": "aaa", "scope": "global", "cat": "main" },
        { "name": "bbb", "scope": "global", "cat": "main" },
        { "name": "ccc", "scope": "global", "cat": "main" },
        { "name": "ddd", "scope": "global", "cat": "pain" },
        { "name": "eee", "scope": "waters", "cat": "pain" },
        { "name": "fff", "scope": "waters", "cat": "pain" },
        { "name": "ggg", "scope": "waters", "cat": "pain" },
        { "name": "hhh", "cat": "main" },
        { "name": "iii", "cat": "main" },
        { "name": "jjj", "scope": "global" },
    ];

    var expected = [
        { "name": "aaa", "scope": "global", "cat": "main", _group: [ "global", "main" ] },
        { "name": "bbb", "scope": "global", "cat": "main", _group: [ "global", "main" ] },
        { "name": "ccc", "scope": "global", "cat": "main", _group: [ "global", "main" ] },
        { "name": "ddd", "scope": "global", "cat": "pain", _group: [ "global", "pain" ] },
        { "name": "eee", "scope": "waters", "cat": "pain", _group: [ "waters", "pain" ] },
        { "name": "fff", "scope": "waters", "cat": "pain", _group: [ "waters", "pain" ] },
        { "name": "ggg", "scope": "waters", "cat": "pain", _group: [ "waters", "pain" ] },
        { "name": "hhh", "cat": "main", _group: [ null, "main" ] },
        { "name": "iii", "cat": "main", _group: [ null, "main" ] },
        { "name": "jjj", "scope": "global", _group: [ "global", null ] },
    ];

    var result = helpers._addGroup(fixture, [ "scope", "cat" ]);
    t.deepEqual(result, expected);
    t.end();
});

test("_groupBy scope, cat", function(t){
    var fixture = [
        { "name": "aaa", "scope": "global", "cat": "main" },
        { "name": "bbb", "scope": "global", "cat": "main" },
        { "name": "ccc", "scope": "global", "cat": "main" },
        { "name": "ddd", "scope": "global", "cat": "pain" },
        { "name": "eee", "scope": "waters", "cat": "pain" },
        { "name": "fff", "scope": "waters", "cat": "pain" },
        { "name": "ggg", "scope": "waters", "cat": "pain" },
        { "name": "hhh", "cat": "main" },
        { "name": "iii", "cat": "main" },
        { "name": "jjj", "scope": "global" },
    ];

    var expected = [
        { _title: "global", level: 0 },
        { _title: "main", level: 1 },
        { name: "aaa", scope: "global", cat: "main", level: 2 },
        { name: "bbb", scope: "global", cat: "main", level: 2 },
        { name: "ccc", scope: "global", cat: "main", level: 2 },
        { _title: "pain", level: 1 },
        { name: "ddd", scope: "global", cat: "pain", level: 2 },
        { _title: "waters", level: 0 },
        { _title: "pain", level: 1 },
        { name: "eee", "scope": "waters", cat: "pain", level: 2 },
        { name: "fff", "scope": "waters", cat: "pain", level: 2 },
        { name: "ggg", "scope": "waters", cat: "pain", level: 2 },
        { _title: "main", level: 0 },
        { name: "hhh", cat: "main", level: 1 },
        { name: "iii", cat: "main", level: 1 },
        { _title: "global", level: 0 },
        { name: "jjj", scope: "global", level: 1 },
    ];

    var result = helpers._groupBy(fixture, [ "scope", "cat" ]);
    t.deepEqual(result, expected);
    t.end();
});

test("_groupBy skips if only one group", function(t){
    var fixture = [
        { "name": "aaa", "scope": "global" },
        { "name": "bbb", "scope": "global" },
        { "name": "ccc", "scope": "global" },
    ];

    var expected = [
        { "name": "aaa", "scope": "global", level: 0 },
        { "name": "bbb", "scope": "global", level: 0 },
        { "name": "ccc", "scope": "global", level: 0 },
    ];

    var result = helpers._groupBy(fixture, [ "scope", "cat" ]);
    t.deepEqual(result, expected);
    t.end();
});

test("_groupBy skips if only one group, where there are subgroups", function(t){
    var fixture = [
        { "name": "aaa", "scope": "global" },
        { "name": "bbb", "scope": "global", cat: "yeah" },
        { "name": "ccc", "scope": "global", cat: "yeah" },
    ];

    var expected = [
        { "name": "aaa", "scope": "global", level: 0 },
        { _title: "yeah", level: 0 },
        { "name": "bbb", "scope": "global", cat: "yeah", level: 1 },
        { "name": "ccc", "scope": "global", cat: "yeah", level: 1 },
    ];

    var result = helpers._groupBy(fixture, [ "scope", "cat" ]);
    t.deepEqual(result, expected);
    t.end();
});
