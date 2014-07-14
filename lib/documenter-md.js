"use strict";
var boil = require("boil-js"),
    path = require("path");

module.exports = function(options){
    options = options || {};
    options["heading-depth"] = options["heading-depth"] || 1;
    options._headingDepth = 0;
    options._indexDepth = 0;
    options.template = options.template || "{{>main}}";
    options.partials = path.resolve(__dirname, "..", "partials/**/*.hbs");
    options.helpers = path.resolve(__dirname, "..", "helpers/**/*.js");
    return boil.renderStream(options);
};
