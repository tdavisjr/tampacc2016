define(function(require) {
  var Vue = require("vue");

  return Vue.extend({
    template: '#user',
    props: ['users']

  });

});
