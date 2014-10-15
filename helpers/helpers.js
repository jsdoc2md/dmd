"use strict";

exports.escape = escape;

/**
Escape special markdown characters
*/
function escape(input){
    return input.replace(/\*/g, "\\*");
}
