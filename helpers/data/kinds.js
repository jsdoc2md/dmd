var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("kinds", function(kind, options){
        if (options && options.hash.in && !Array.isArray(options.hash.in)){
            throw new Error("kinds: must pass an array for `in`");
        }
        
        var array;
        if (Array.isArray(this)){
            array = this;
        } else if (options){
            if (Array.isArray(options.hash.in)){
                array = options.hash.in;
            } else {
                array = options.data.root;
            }
        } else {
            throw new Error("members: bad data [" + JSON.stringify(this) + "]")
        }
        return a.where(array, { kind: kind });
    });
};
