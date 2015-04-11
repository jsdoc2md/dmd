var fs = require("fs");
var dmd = require("../");

var template = "The description from my class: {{#class name='MyClass'}}{{description}}{{/class}}";

fs.createReadStream(__dirname + "/my-class.json")
    .pipe(dmd({ template: template }))
    .pipe(process.stdout);
