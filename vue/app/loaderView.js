define(function(require, exports, module) {
  var Vue = require("vue");

  module.exports = Vue.extend({
    template: '#loader',
    props: ['isLoading'],

  });

});