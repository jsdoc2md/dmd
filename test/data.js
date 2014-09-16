var test = require("tape");
var data = require("../helpers2/data");
var fixture = require("./fixture/module");

var options = {
    data: {
        root: fixture
    },
    hash: {}
};

var l = console.log;

test("children", function(t){
    l(data.children(options));
    t.end();
});
