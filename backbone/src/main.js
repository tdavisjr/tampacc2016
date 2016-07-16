require(['appView', 'users'], function(AppView, Users) {

    new AppView({
        collection: new Users()
    });

});