module.exports = function(options){
    return {
        partial: __dirname + "/../partial/*.hbs",
        helper: __dirname + "/../helper/*.js"
    };
};

/*
Command to test this plugin:

jsdoc2md --plugin test/fixture/dmd-plugin-example/lib/dmd-plugin-example.js --files index.js
 */

