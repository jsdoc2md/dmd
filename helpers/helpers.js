"use strict";

exports.escape = escape;

function escape(input){
    return input.replace(/\*/g, "\\*");
}
