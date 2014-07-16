module.exports = function(handlebars){
    handlebars.registerHelper("or", function(a, b){
        return a || b;
    });
};
