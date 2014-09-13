var test = require("tape");
var helpers = require("../helpers2/data");
var data = require("./fixture/class");

console.log(helpers.parents({ data: { root: data } }));
console.log(data)
console.log(helpers.parents({ data: { root: data } }).length)
console.log(data.length)
// test("parents", function(t){
//     t.end();
// });
