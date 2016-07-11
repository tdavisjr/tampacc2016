require([
'angular',
'appController',
'usersController',
'dataService'
],
function(angular, AppController, UsersController, DataService) {

    angular
        .module('app', [])
        .controller('AppController', AppController)
        .controller('UsersController', UsersController)
        .factory('dataService', DataService);
});