"use strict";

exports.headingDepth = headingDepth;
exports.depth = depth;
exports.depthIncrement = depthIncrement;
exports.depthDecrement = depthDecrement;

function headingDepth(options){
    return options.data.root.options._depth + (options.data.root.options["heading-depth"]);
}

function depth(options){
    return options.data.root.options._depth;
}

function depthIncrement(options){
    options.data.root.options._depth++;
}

function depthDecrement(options){
    options.data.root.options._depth--;
}
