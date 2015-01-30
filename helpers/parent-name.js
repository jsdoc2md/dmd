var a = require("array-tools");

function instantiate(input){
    return input.replace(/^([A-Z]+)([A-Z])/, function (str, p1, p2) {
        return p1.toLowerCase() + p2;
    });
}

module.exports = function(handlebars){
    handlebars.registerHelper("parentName", function(options){
        if (this.memberof){
            var parentClass = a.findWhere(options.data.root, { longname: this.memberof });
            if (parentClass) {
                return this.scope === "instance"
                    ? instantiate(parentClass.alias || parentClass.name)
                    : parentClass.alias || parentClass.name;
            } else {
                return this.memberof;
            }
        }
    });
};
