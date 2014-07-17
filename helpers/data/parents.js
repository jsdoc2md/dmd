var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("parents", function(options){
        return a.where(options.data.root, {
            "!kind": /module|package/,
            memberof: undefined,
            "!longname": /^module:/
        }).concat(a.where(options.data.root, {
            kind: "module"
        }));
    });
};
