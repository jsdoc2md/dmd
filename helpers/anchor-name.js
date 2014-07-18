var util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("anchorName", function(options){
        if (!this.longname) throw new Error("[anchorName helper] cannot create a link without a longname");
        return util.format(
            "%s%s%s", 
            handlebars.helpers.isExported.call(this, options) ? "exp_" : "",
            this.isConstructor ? "new_" : "", 
            this.longname.replace(/:/g, "_").replace(/~/g, "..")
        );
    });
};
