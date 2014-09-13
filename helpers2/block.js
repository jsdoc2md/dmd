var util = require("util");

exports.link = link;

/**
Returns a markdown link to the 
*/
function link(options){
    return util.format(
        "[%s](#%s)", 
        options.fn(this), 
        handlebars.helpers.anchorName.call(this, options)
    );
}
