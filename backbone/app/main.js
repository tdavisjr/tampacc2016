require.config({
    paths: {
        jquery: '../vendor/jquery/dist/jquery.min',
        backbone: '../vendor/backbone/backbone',
        underscore: '../vendor/underscore/underscore'  
    }
});

require(['appView', 'users'], function(AppView, Users){

     new AppView({ collection: new Users() });

});