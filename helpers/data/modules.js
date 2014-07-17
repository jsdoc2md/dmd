var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("modules", function(options){
        return handlebars.helpers.kinds.call(this, "module", options);
    });
};
