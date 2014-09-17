"use strict";

exports.headingDepth = headingDepth;
exports.headingDepthIncrement = headingDepthIncrement;
exports.headingDepthDecrement = headingDepthDecrement;

function headingDepth(options){
    return options.data.root.options._headingDepth + (options.data.root.options["heading-depth"]);
}
function headingDepthIncrement(options){
    options.data.root.options._headingDepth++;
}

function headingDepthDecrement(options){
    options.data.root.options._headingDepth--;
}
