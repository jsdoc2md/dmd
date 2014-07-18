var util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("link", function(options){
        return util.format(
            "[%s](#%s)", 
            options.fn(this), 
            handlebars.helpers.anchorName.call(this, options)
        );
    });
};
