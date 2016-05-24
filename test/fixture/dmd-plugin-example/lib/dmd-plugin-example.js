module.exports = function(options){
    return {
        partial: __dirname + "/../partial/*.hbs",
        helper: __dirname + "/../helper/*.js"
    };
};
