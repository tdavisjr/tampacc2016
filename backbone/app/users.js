define(function(require, exports, module){
    var Backbone = require("backbone");

    module.exports = Backbone.Collection.extend({
        url: 'https://api.github.com/users'
    });
    

});