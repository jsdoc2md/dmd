var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("parents", function(options){
        return a.where(options.data.root, {
            "!kind": "module",
            memberof: undefined,
            "!longname": /^module:/
        });
    });
};
