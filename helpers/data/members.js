var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("members", function(options){
        return handlebars.helpers.kinds.call(this, "member", options);
    });
};
