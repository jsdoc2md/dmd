"use strict";
var documenter = require("documenter"),
    path = require("path");

module.exports = function(options){
    options.partials = path.resolve(__dirname, "..", "partials/**/*.hbs");
    options.helpers = path.resolve(__dirname, "..", "helpers/**/*.js");
    return documenter(options);
};
